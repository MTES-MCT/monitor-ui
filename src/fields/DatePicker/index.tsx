/**
 * The time and date text input values are used as tuples (i.e.: `["2021", "12", "31"]`, `["23", "59"]`)
 * in order to avoid over-converting datetimes between UTC and local time zones.
 *
 * Once we receive a new tuple (because the user entered/picked a new value has been changed), we treat it as a UTC one,
 * whether it's a date or a time.
 *
 * In short, ALL INTERNAL DATETIME-RELATED VALUES ARE ALWAYS TREATED AS WE WERE RUNNING IN A UTC TIME ZONE.
 *
 * The only exception is the `<CalendarPicker />` which returns a local date which must be "utcized",
 * meaning that it must be treated as if the date was picked in a UTC timezone
 * despite the local time zone marker (i.e.: `+01:00`) as well as the DST (Daylight Saving Time).
 *
 * In this case, if the user picked December 31st, 2021 on the calendar,
 * it MUST BE interpreted as `2021-12-31T00:00:00.000Z` and NOT `2021-12-31T00:00:00.000±HH:MM`.
 */

import { FieldError } from '@elements/FieldError'
import { Fieldset } from '@elements/Fieldset'
import { useClickOutsideEffect } from '@hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { useForceUpdate } from '@hooks/useForceUpdate'
import { usePressEscapeEffect } from '@hooks/usePressEscapeEffect'
import { usePrevious } from '@hooks/usePrevious'
import { customDayjs } from '@utils/customDayjs'
import { normalizeString } from '@utils/normalizeString'
import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { CalendarPicker } from './CalendarPicker'
import { DateInput } from '../DateRangePicker/DateInput'
import { TimeInput } from '../DateRangePicker/TimeInput'
import {
  getDayjsFromUtcDateAndTimeTuple,
  getUtcDateFromDateAndTimeTuple,
  getUtcDateTupleFromDayjs,
  getUtcTimeTupleFromDayjs
} from '../DateRangePicker/utils'

import type { DateInputRef, DateTuple, TimeInputRef, TimeTuple } from '../DateRangePicker/types'
import type { CommonFieldStyleProps } from 'fields/shared/types'
import type { HTMLAttributes } from 'react'
import type { Promisable } from 'type-fest'

/**
 * @description
 * This type should not be exposed in the distributed library. It's only exported to be reused in <FormikDatePicker />.
 *
 * @private
 */
export interface DatePickerProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange' | 'placeholder'> {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: Date | string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isCompact?: boolean | undefined
  /** Set the default time to the end (instead of start) of the day when picking/entering a date. */
  isEndDate?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  /** Only allow past dates until today. */
  isHistorical?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isRightAligned?: boolean | undefined
  isStringDate?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  /**
   * Range of minutes used to generate the time picker list.
   *
   * @example
   * `15` would produce a list with `..., 10:45, 11:00, 11:15, ...`.
   */
  minutesRange?: number | undefined
  name: string
  /**
   * Called each time the date range picker is changed to a new valid value.
   *
   * @param nextValue - A utcized date to be used as is to interact with the API.
   */
  onChange?: ((nextValue: Date | undefined) => Promisable<void>) | ((nextValue: string | undefined) => Promisable<void>)
  readOnly?: boolean | undefined
  withTime?: boolean | undefined
}
export interface DatePickerWithDateDateProps extends DatePickerProps {
  isStringDate?: false | undefined
  onChange?: (nextValue: Date | undefined) => Promisable<void>
}
export interface DatePickerWithStringDateProps extends DatePickerProps {
  isStringDate: true
  onChange?: (nextValue: string | undefined) => Promisable<void>
}

// TODO We should make this component both form- & a11y-compliant with a `name` and proper (aria-)labels.
export function DatePicker(props: DatePickerWithDateDateProps): JSX.Element
export function DatePicker(props: DatePickerWithStringDateProps): JSX.Element
export function DatePicker({
  baseContainer,
  className,
  defaultValue,
  disabled = false,
  error,
  isCompact = false,
  isEndDate = false,
  isErrorMessageHidden = false,
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isRightAligned = false,
  isStringDate = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  minutesRange = 15,
  name,
  onChange,
  readOnly = false,
  style,
  withTime = false,
  ...nativeProps
}: DatePickerProps) {
  /* eslint-disable no-null/no-null */
  const boxRef = useRef<HTMLDivElement | null>(null)
  const dateInputRef = useRef<DateInputRef | null>(null)
  const timeInputRef = useRef<TimeInputRef | null>(null)
  /* eslint-enable no-null/no-null */

  const hasMountedRef = useRef(false)
  const selectedUtcDateAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue) : undefined)
  const selectedUtcDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedUtcDateAsDayjsRef.current))
  const selectedUtcTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current))

  const [isRangeCalendarPickerOpen, setIsRangeCalendarPickerOpen] = useState(false)

  const controlledClassName = useMemo(() => classnames('Field-DatePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const defaultTimeTuple: TimeTuple = useMemo(() => (isEndDate ? ['23', '59'] : ['00', '00']), [isEndDate])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const previousDefaultValue = usePrevious(defaultValue)

  const { forceUpdate } = useForceUpdate()

  const calendarPickerDefaultValue = useMemo(
    () =>
      selectedUtcDateTupleRef.current
        ? getUtcDateFromDateAndTimeTuple(selectedUtcDateTupleRef.current, defaultTimeTuple)
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedUtcDateTupleRef.current]
  )

  const callOnChange = useCallback(() => {
    if (!onChange || !selectedUtcDateAsDayjsRef.current) {
      return
    }

    const nextDateAsDayjs = selectedUtcDateAsDayjsRef.current

    if (isStringDate) {
      ;(onChange as (nextUtcDate: string) => Promisable<void>)(nextDateAsDayjs.toISOString())
    } else {
      ;(onChange as (nextUtcDate: Date) => Promisable<void>)(nextDateAsDayjs.toDate())
    }
  }, [isStringDate, onChange])

  const callOnChangeUndefinedIfInputsAreEmpty = useCallback(() => {
    if (!dateInputRef.current || !onChange) {
      return
    }

    const [year, month, day] = dateInputRef.current.getValueAsPartialDateTuple()

    if (!withTime && !year && !month && !day) {
      onChange(undefined)

      return
    }

    if (!timeInputRef.current) {
      return
    }

    const [hour, minute] = timeInputRef.current.getValueAsPartialTimeTuple()
    if (!year && !month && !day && !hour && !minute) {
      onChange(undefined)
    }
  }, [onChange, withTime])

  const closeCalendarPicker = useCallback(() => {
    setIsRangeCalendarPickerOpen(false)
  }, [])

  const handleDateInputNext = useCallback(() => {
    if (!withTime || !timeInputRef.current) {
      return
    }

    timeInputRef.current.focus()
  }, [withTime])

  const handleDateInputChange = useCallback(
    (nextUtcDateTuple: DateTuple, isFilled: boolean) => {
      selectedUtcDateTupleRef.current = nextUtcDateTuple

      // If there is NO time input OR there is a time input WHILE a time is selected,
      if (!withTime || (withTime && selectedUtcTimeTupleRef.current)) {
        // we must update the selected datetime and call `onChange()`
        const timeTuple =
          withTime && selectedUtcTimeTupleRef.current ? selectedUtcTimeTupleRef.current : defaultTimeTuple

        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextUtcDateTuple, timeTuple, isEndDate)

        callOnChange()
      }

      if (isFilled) {
        handleDateInputNext()
      }
    },
    [callOnChange, defaultTimeTuple, handleDateInputNext, isEndDate, withTime]
  )

  const handleCalendarPickerChange = useCallback(
    (nextUtcizedDateTuple: DateTuple) => {
      // If there is NO time input,
      if (!withTime) {
        // we update the selected datetime
        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextUtcizedDateTuple,
          // with a time set to the start (or end) of the day
          defaultTimeTuple,
          isEndDate
        )
      }

      // If there is a time input AND a time is selected,
      else if (selectedUtcTimeTupleRef.current) {
        // we update the selected datetime
        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextUtcizedDateTuple,
          selectedUtcTimeTupleRef.current,
          isEndDate
        )
      }

      selectedUtcDateTupleRef.current = nextUtcizedDateTuple
      selectedUtcTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current)

      closeCalendarPicker()
      forceUpdate()

      callOnChange()

      if (withTime && timeInputRef.current) {
        timeInputRef.current.focus()
      }
    },
    [callOnChange, closeCalendarPicker, defaultTimeTuple, forceUpdate, isEndDate, withTime]
  )

  const handleDisable = useCallback(() => {
    selectedUtcDateTupleRef.current = undefined
    selectedUtcTimeTupleRef.current = undefined

    forceUpdate()
  }, [forceUpdate])

  const handleTimeInputChange = useCallback(
    (nextTimeTuple: TimeTuple) => {
      // If a date is selected
      if (selectedUtcDateTupleRef.current) {
        // we update the selected datetime
        const nextDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(selectedUtcDateTupleRef.current, nextTimeTuple)

        selectedUtcDateAsDayjsRef.current = nextDateAsDayjs
      }

      selectedUtcTimeTupleRef.current = nextTimeTuple

      callOnChange()
    },
    [callOnChange]
  )

  const openCalendarPicker = useCallback(() => {
    if (disabled || readOnly) {
      return
    }

    setIsRangeCalendarPickerOpen(true)
  }, [disabled, readOnly])

  useClickOutsideEffect(boxRef, closeCalendarPicker, baseContainer)
  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, handleDisable)
  usePressEscapeEffect(closeCalendarPicker, baseContainer)

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true

      return
    }

    if (
      (defaultValue instanceof Date &&
        previousDefaultValue instanceof Date &&
        defaultValue.toISOString() === previousDefaultValue.toISOString()) ||
      defaultValue === previousDefaultValue
    ) {
      return
    }

    selectedUtcDateAsDayjsRef.current = defaultValue ? customDayjs(defaultValue) : undefined
    selectedUtcDateTupleRef.current = getUtcDateTupleFromDayjs(selectedUtcDateAsDayjsRef.current)
    selectedUtcTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current)

    forceUpdate()
  }, [defaultValue, forceUpdate, previousDefaultValue])

  return (
    <StyledFieldset
      $isRightAligned={isRightAligned}
      className={controlledClassName}
      disabled={disabled}
      isLegendHidden={isLabelHidden}
      isRequired={isRequired}
      legend={label}
      style={style}
      {...nativeProps}
    >
      <Box
        ref={boxRef}
        $hasError={hasError}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
      >
        <Field>
          <DateInput
            ref={dateInputRef}
            baseContainer={baseContainer ?? undefined}
            disabled={disabled}
            isCompact={isCompact}
            isEndDate={isEndDate}
            isForcedFocused={isRangeCalendarPickerOpen}
            isLight={isLight}
            isTransparent={isTransparent}
            name={name}
            onChange={handleDateInputChange}
            onClick={openCalendarPicker}
            onInput={callOnChangeUndefinedIfInputsAreEmpty}
            onNext={handleDateInputNext}
            readOnly={readOnly}
            value={selectedUtcDateTupleRef.current}
          />
        </Field>

        {withTime && (
          <Field $isTimeField>
            <TimeInput
              ref={timeInputRef}
              baseContainer={baseContainer ?? undefined}
              disabled={disabled}
              isCompact={isCompact}
              isLight={isLight}
              isTransparent={isTransparent}
              minutesRange={minutesRange}
              name={name}
              onBack={() => dateInputRef.current?.focus(true)}
              onChange={handleTimeInputChange}
              onFocus={closeCalendarPicker}
              onInput={callOnChangeUndefinedIfInputsAreEmpty}
              onPrevious={() => dateInputRef.current?.focus(true)}
              readOnly={readOnly}
              value={selectedUtcTimeTupleRef.current}
            />
          </Field>
        )}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}

      <CalendarPicker
        isHistorical={isHistorical}
        isOpen={isRangeCalendarPickerOpen}
        isRightAligned={isRightAligned}
        onChange={handleCalendarPickerChange}
        value={calendarPickerDefaultValue}
      />
    </StyledFieldset>
  )
}

const StyledFieldset = styled(Fieldset)<{
  $isRightAligned: boolean
}>`
  > .Element-Fieldset__InnerBox {
    width: ${p => (p.$isRightAligned ? 'auto' : '100%')};
  }
`

const Box = styled.div<CommonFieldStyleProps>`
  * {
    ${p => p.$isReadOnly && `cursor: default;`}
    font-weight: 500;
    line-height: 1;
  }

  color: ${p => p.theme.color.gunMetal};
  display: inline-flex;
  font-size: 13px !important;
  outline: ${p => (p.$hasError ? `1px solid ${p.theme.color.maximumRed}` : 0)};
  position: relative;
  width: auto;

  ${p =>
    p.$isDisabled &&
    css`
      * {
        background-color: ${p.theme.color.cultured} !important;
        color: ${p.theme.color.lightGray} !important;
        cursor: not-allowed;
      }
    `}
`

const Field = styled.span<{
  $isTimeField?: boolean
}>`
  font-size: inherit;
  margin-left: ${p => (p.$isTimeField ? '4px' : 0)} !important;
`
