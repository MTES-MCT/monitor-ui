/**
 * The time and date text input values are used as tuples (i.e.: `["2021", "12", "31"]`, `["23", "59"]`)
 * in order to avoid over-converting datetimes between UTC and local time zones.
 *
 * Once we receive a new tuple (because the user entered/picked a new value has been changed), we treat it as a UTC one,
 * whether it's a date or a time.
 *
 * In short, ALL INTERNAL DATETIME-RELATED VALUES ARE ALWAYS TREATED AS WE WERE RUNNING IN A UTC TIME ZONE.
 *
 * The only exception is the `<RangeCalendarPicker />` which returns a local date range which must be "utcized",
 * meaning that it must be treated as of the date range was picked in a UTC timezone
 * despite the local time zone marker (i.e.: `+01:00`) as well as the DST (Daylight Saving Time).
 *
 * In this case, if the user picked December 31st, 2021 as a start date on the calendar,
 * it MUST BE interpreted as `2021-12-31T00:00:00.000Z` and NOT `2021-12-31T00:00:00.000±HH:MM`.
 * If the user picked December 31st, 2021 as an end date on the same calendar,
 * it MUST BE interpreted as `2021-12-31T23:59:59.000Z`
 * (we return `.000Z` rather than `.999Z` because the backend does not handle milliseconds as expected).
 */

import { usePressEscapeEffect } from '@hooks/usePressEscapeEffect'
import classnames from 'classnames'
import { isEqual } from 'lodash'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'

import { DateInput } from './DateInput'
import { RangeCalendarPicker } from './RangeCalendarPicker'
import { TimeInput } from './TimeInput'
import {
  type DateInputRef,
  DateRangePosition,
  type DateTuple,
  type DateTupleRange,
  type TimeInputRef,
  type TimeTuple
} from './types'
import {
  getDayjsFromUtcDateAndTimeTuple,
  getUtcDateFromDateAndTimeTuple,
  getUtcDateTupleFromDayjs,
  getUtcTimeTupleFromDayjs
} from './utils'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { usePrevious } from '../../hooks/usePrevious'
import { customDayjs } from '../../utils/customDayjs'
import { normalizeString } from '../../utils/normalizeString'

import type { DateAsStringRange, DateRange } from '../../types/definitions'
import type { CommonFieldStyleProps } from 'fields/shared/types'
import type { HTMLAttributes } from 'react'
import type { Promisable } from 'type-fest'

/**
 * @description
 * This type should not be exposed in the distributed library.
 * It's only exported to be reused in <FormikDateRangePicker />.
 *
 * @private
 */
export interface DateRangePickerProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange' | 'placeholder'> {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: DateRange | DateAsStringRange | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  hasSingleCalendar?: boolean
  isCompact?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  /** Only allow past dates until today. */
  isHistorical?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
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
  onChange?:
    | ((nextValue: DateRange | undefined) => Promisable<void>)
    | ((nextValue: DateAsStringRange | undefined) => Promisable<void>)
  readOnly?: boolean
  withTime?: boolean
}
export interface DateRangePickerWithDateDateProps extends DateRangePickerProps {
  isStringDate?: false
  onChange?: (nextValue: DateRange | undefined) => Promisable<void>
}
export interface DateRangePickerWithStringDateProps extends DateRangePickerProps {
  isStringDate: true
  onChange?: (nextValue: DateAsStringRange | undefined) => Promisable<void>
}

// TODO We should make this component both form- & a11y-compliant with a `name` and proper (aria-)labels.
export function DateRangePicker(props: DateRangePickerWithDateDateProps): JSX.Element
export function DateRangePicker(props: DateRangePickerWithStringDateProps): JSX.Element
export function DateRangePicker({
  baseContainer,
  className,
  defaultValue,
  disabled = false,
  error,
  hasSingleCalendar = false,
  isCompact = false,
  isErrorMessageHidden = false,
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isStringDate = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  minutesRange = 15,
  name,
  onChange,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readOnly = false,
  style,
  withTime = false,
  ...nativeProps
}: DateRangePickerProps) {
  /* eslint-disable no-null/no-null */
  const startDateInputRef = useRef<DateInputRef>(null)
  const startTimeInputRef = useRef<TimeInputRef>(null)
  const endDateInputRef = useRef<DateInputRef>(null)
  const endTimeInputRef = useRef<TimeInputRef>(null)
  /* eslint-enable no-null/no-null */

  const hasMountedRef = useRef(false)

  const selectedStartDateTimeAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue[0]) : undefined)
  const selectedStartDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedStartDateTimeAsDayjsRef.current))
  const selectedStartTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedStartDateTimeAsDayjsRef.current))

  const selectedEndDateTimeAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue[1]) : undefined)
  const selectedEndDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedEndDateTimeAsDayjsRef.current))
  const selectedEndTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedEndDateTimeAsDayjsRef.current))

  const [isRangeCalendarPickerOpen, setIsRangeCalendarPickerOpen] = useState(false)

  const controlledClassName = useMemo(() => classnames('Field-DateRangePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const previousDefaultValue = usePrevious(defaultValue)

  const { forceUpdate } = useForceUpdate()

  const rangeCalendarPickerDefaultValue: DateRange | undefined = useMemo(
    () =>
      selectedStartDateTupleRef.current && selectedEndDateTupleRef.current
        ? [
            getUtcDateFromDateAndTimeTuple(selectedStartDateTupleRef.current, ['00', '00']),
            getUtcDateFromDateAndTimeTuple(selectedEndDateTupleRef.current, ['00', '00'], true)
          ]
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedEndDateTupleRef.current, selectedStartDateTupleRef.current]
  )

  const callOnChange = useCallback(() => {
    if (!onChange || !selectedStartDateTimeAsDayjsRef.current || !selectedEndDateTimeAsDayjsRef.current) {
      return
    }

    if (isStringDate) {
      const startUtcDateAsString = selectedStartDateTimeAsDayjsRef.current.utc().toISOString()
      const endUtcDateAsString = selectedEndDateTimeAsDayjsRef.current.utc().toISOString()

      const nextUtcDateAsStringRange: DateAsStringRange = [startUtcDateAsString, endUtcDateAsString]

      ;(onChange as (nextUtcDateRange: DateAsStringRange) => Promisable<void>)(nextUtcDateAsStringRange)

      return
    }

    const startUtcDate = selectedStartDateTimeAsDayjsRef.current.toDate()
    const endUtcDate = selectedEndDateTimeAsDayjsRef.current.toDate()

    const nextDateRange: DateRange = [startUtcDate, endUtcDate]

    ;(onChange as (nextUtcDateRange: DateRange) => Promisable<void>)(nextDateRange)
  }, [isStringDate, onChange])

  const callOnChangeUndefinedIfInputsAreEmpty = useCallback(() => {
    if (!startDateInputRef.current || !endDateInputRef.current || !onChange) {
      return
    }

    const [startYear, startMonth, startDay] = startDateInputRef.current.getValueAsPartialDateTuple()
    const [endYear, endMonth, endDay] = endDateInputRef.current.getValueAsPartialDateTuple()

    if (!withTime && !startYear && !startMonth && !startDay && !endYear && !endMonth && !endDay) {
      onChange(undefined)

      return
    }

    if (!startTimeInputRef.current || !endTimeInputRef.current) {
      return
    }

    const [startHour, startMinute] = startTimeInputRef.current.getValueAsPartialTimeTuple()
    const [endHour, endMinute] = endTimeInputRef.current.getValueAsPartialTimeTuple()
    if (
      !startYear &&
      !startMonth &&
      !startDay &&
      !startHour &&
      !startMinute &&
      !endYear &&
      !endMonth &&
      !endDay &&
      !endHour &&
      !endMinute
    ) {
      onChange(undefined)
    }
  }, [onChange, withTime])

  const closeRangeCalendarPicker = useCallback(() => {
    setIsRangeCalendarPickerOpen(false)
  }, [])

  const handleDisable = useCallback(() => {
    selectedStartDateTupleRef.current = undefined
    selectedStartTimeTupleRef.current = undefined
    selectedEndDateTupleRef.current = undefined
    selectedEndTimeTupleRef.current = undefined

    forceUpdate()
  }, [forceUpdate])

  const handleEndDateInputNext = useCallback(() => {
    if (!withTime || !endTimeInputRef.current) {
      return
    }

    endTimeInputRef.current.focus()
  }, [withTime])

  const handleEndDateInputPrevious = useCallback(() => {
    if (!startDateInputRef.current) {
      return
    }

    if (withTime && startTimeInputRef.current) {
      startTimeInputRef.current.focus(true)

      return
    }

    startDateInputRef.current.focus(true)
  }, [withTime])

  const handleStartDateInputNext = useCallback(() => {
    if (!endDateInputRef.current) {
      return
    }

    if (withTime && startTimeInputRef.current) {
      startTimeInputRef.current.focus()

      return
    }

    endDateInputRef.current.focus()
  }, [withTime])

  const handleDateInputChange = useCallback(
    (position: DateRangePosition, nextDateTuple: DateTuple, isFilled: boolean) => {
      if (position === DateRangePosition.START) {
        selectedStartDateTupleRef.current = nextDateTuple

        // If there is NO time input OR there is a time input WHILE a start time is selected,
        if (!withTime || (withTime && selectedStartTimeTupleRef.current)) {
          // we update the selected start datetime
          const startUtcTimeTuple: TimeTuple =
            withTime && selectedStartTimeTupleRef.current ? selectedStartTimeTupleRef.current : ['00', '00']
          const nextStartDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(nextDateTuple, startUtcTimeTuple)

          selectedStartDateTimeAsDayjsRef.current = nextStartDateAsDayjs

          callOnChange()
        }

        if (isFilled) {
          handleStartDateInputNext()
        }
      } else {
        selectedEndDateTupleRef.current = nextDateTuple

        // If there is NO time input OR there is a time input WHILE a start time is selected,
        if (!withTime || (withTime && selectedEndTimeTupleRef.current)) {
          // we update the selected end datetime
          const endTimeTuple = (withTime ? selectedEndTimeTupleRef.current : ['23', '59']) as TimeTuple
          const nextEndDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(nextDateTuple, endTimeTuple, true)

          selectedEndDateTimeAsDayjsRef.current = nextEndDateAsDayjs

          callOnChange()
        }

        if (isFilled) {
          handleEndDateInputNext()
        }
      }
    },
    [callOnChange, handleEndDateInputNext, handleStartDateInputNext, withTime]
  )

  const handleRangeCalendarPickerChange = useCallback(
    (nextUtcDateTupleRange: DateTupleRange) => {
      const [nextStartUtcDateTuple, nextEndUtcDateTuple] = nextUtcDateTupleRange

      // If there is NO time input,
      if (!withTime) {
        // we have to fix the start datetime at the beginning of the day
        selectedStartDateTimeAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextStartUtcDateTuple, ['00', '00'])
        // and the end datetime at the end of the day
        selectedEndDateTimeAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextEndUtcDateTuple, ['23', '59'], true)
      }

      // If there is a time input,
      else {
        // AND there is BOTH a selected start time and a selected end time,
        if (selectedStartTimeTupleRef.current && selectedEndTimeTupleRef.current) {
          // we update the selected start datetime
          selectedStartDateTimeAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
            nextStartUtcDateTuple,
            selectedStartTimeTupleRef.current
          )

          // we update the selected start datetime
          selectedEndDateTimeAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
            nextEndUtcDateTuple,
            selectedEndTimeTupleRef.current,
            true
          )
        }

        startTimeInputRef.current?.focus()
      }

      selectedStartDateTupleRef.current = nextStartUtcDateTuple
      selectedStartTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedStartDateTimeAsDayjsRef.current)
      selectedEndDateTupleRef.current = nextEndUtcDateTuple
      selectedEndTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedEndDateTimeAsDayjsRef.current)

      closeRangeCalendarPicker()

      callOnChange()
    },
    [callOnChange, closeRangeCalendarPicker, withTime]
  )

  const handleTimeInputChange = useCallback(
    (position: DateRangePosition, nextTimeTuple: TimeTuple) => {
      if (!endDateInputRef.current) {
        return
      }

      if (position === DateRangePosition.START) {
        // If a start date is selected
        if (selectedStartDateTupleRef.current) {
          // we update the selected start datetime and submit it
          const nextStartDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(selectedStartDateTupleRef.current, nextTimeTuple)

          selectedStartDateTimeAsDayjsRef.current = nextStartDateAsDayjs
        }

        selectedStartTimeTupleRef.current = nextTimeTuple
      } else {
        // If an end date is selected
        if (selectedEndDateTupleRef.current) {
          // we update the selected end datetime and submit it
          const nextEndDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(
            selectedEndDateTupleRef.current,
            nextTimeTuple,
            true
          )

          selectedEndDateTimeAsDayjsRef.current = nextEndDateAsDayjs
        }

        selectedEndTimeTupleRef.current = nextTimeTuple
      }

      callOnChange()
    },
    [callOnChange]
  )

  const openRangeCalendarPicker = useCallback(() => {
    if (disabled || readOnly) {
      return
    }

    setIsRangeCalendarPickerOpen(true)
  }, [disabled, readOnly])

  useClickOutsideEffect([endDateInputRef, startDateInputRef], closeRangeCalendarPicker, baseContainer)
  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, handleDisable)
  usePressEscapeEffect(closeRangeCalendarPicker, baseContainer)

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true

      return
    }

    if (
      (!!defaultValue &&
        !!previousDefaultValue &&
        defaultValue[0] instanceof Date &&
        defaultValue[1] instanceof Date &&
        previousDefaultValue[0] instanceof Date &&
        previousDefaultValue[1] instanceof Date &&
        defaultValue[0].toISOString() === previousDefaultValue[0].toISOString() &&
        defaultValue[1].toISOString() === previousDefaultValue[1].toISOString()) ||
      isEqual(defaultValue, previousDefaultValue)
    ) {
      return
    }

    selectedStartDateTimeAsDayjsRef.current = defaultValue ? customDayjs(defaultValue[0]) : undefined
    selectedEndDateTimeAsDayjsRef.current = defaultValue ? customDayjs(defaultValue[1]) : undefined
    selectedStartDateTupleRef.current = getUtcDateTupleFromDayjs(selectedStartDateTimeAsDayjsRef.current)
    selectedEndDateTupleRef.current = getUtcDateTupleFromDayjs(selectedEndDateTimeAsDayjsRef.current)
    selectedStartTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedStartDateTimeAsDayjsRef.current)
    selectedEndTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedEndDateTimeAsDayjsRef.current)

    forceUpdate()
  }, [defaultValue, forceUpdate, previousDefaultValue])

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      isLegendHidden={isLabelHidden}
      isRequired={isRequired}
      legend={label}
      style={style}
      {...nativeProps}
    >
      <Box
        $hasError={hasError}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
      >
        <Field>
          <DateInput
            ref={startDateInputRef}
            baseContainer={baseContainer ?? undefined}
            disabled={disabled}
            isCompact={isCompact}
            isForcedFocused={isRangeCalendarPickerOpen}
            isLight={isLight}
            isRange
            isStartDate
            isTransparent={isTransparent}
            name={`${name}Start`}
            onChange={(nextDateTuple, isFilled) =>
              handleDateInputChange(DateRangePosition.START, nextDateTuple, isFilled)
            }
            onClick={openRangeCalendarPicker}
            onInput={callOnChangeUndefinedIfInputsAreEmpty}
            onNext={handleStartDateInputNext}
            readOnly={readOnly}
            value={selectedStartDateTupleRef.current}
          />
        </Field>

        {withTime && (
          <Field isTimeField>
            <TimeInput
              ref={startTimeInputRef}
              baseContainer={baseContainer ?? undefined}
              disabled={disabled}
              isCompact={isCompact}
              isLight={isLight}
              isStartDate
              isTransparent={isTransparent}
              minutesRange={minutesRange}
              name={`${name}Start`}
              onBack={() => startDateInputRef.current?.focus(true)}
              onChange={nextTimeTuple => handleTimeInputChange(DateRangePosition.START, nextTimeTuple)}
              onFocus={closeRangeCalendarPicker}
              onInput={callOnChangeUndefinedIfInputsAreEmpty}
              onNext={() => endDateInputRef.current?.focus()}
              onPrevious={() => startDateInputRef.current?.focus(true)}
              readOnly={readOnly}
              value={selectedStartTimeTupleRef.current}
            />
          </Field>
        )}

        <Field isEndDateField>
          <DateInput
            ref={endDateInputRef}
            baseContainer={baseContainer ?? undefined}
            disabled={disabled}
            isCompact={isCompact}
            isEndDate
            isForcedFocused={isRangeCalendarPickerOpen}
            isLight={isLight}
            isRange
            isTransparent={isTransparent}
            name={`${name}End`}
            onBack={handleEndDateInputPrevious}
            onChange={(nextDateTuple, isFilled) =>
              handleDateInputChange(DateRangePosition.END, nextDateTuple, isFilled)
            }
            onClick={openRangeCalendarPicker}
            onInput={callOnChangeUndefinedIfInputsAreEmpty}
            onNext={handleEndDateInputNext}
            onPrevious={handleEndDateInputPrevious}
            readOnly={readOnly}
            value={selectedEndDateTupleRef.current}
          />
        </Field>

        {withTime && (
          <Field isTimeField>
            <TimeInput
              ref={endTimeInputRef}
              baseContainer={baseContainer ?? undefined}
              disabled={disabled}
              isCompact={isCompact}
              isEndDate
              isLight={isLight}
              isTransparent={isTransparent}
              minutesRange={minutesRange}
              name={`${name}End`}
              onBack={() => endDateInputRef.current?.focus(true)}
              onChange={nextTimeTuple => handleTimeInputChange(DateRangePosition.END, nextTimeTuple)}
              onFocus={closeRangeCalendarPicker}
              onInput={callOnChangeUndefinedIfInputsAreEmpty}
              onPrevious={() => endDateInputRef.current?.focus(true)}
              readOnly={readOnly}
              value={selectedEndTimeTupleRef.current}
            />
          </Field>
        )}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}

      <RangeCalendarPicker
        key={JSON.stringify(rangeCalendarPickerDefaultValue)}
        defaultValue={rangeCalendarPickerDefaultValue}
        hasSingleCalendar={hasSingleCalendar}
        isHistorical={isHistorical}
        isOpen={isRangeCalendarPickerOpen}
        onChange={handleRangeCalendarPickerChange}
      />
    </Fieldset>
  )
}

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
  isEndDateField?: boolean
  isTimeField?: boolean
}>`
  font-size: inherit;
  margin-left: ${p => {
    if (p.isEndDateField) {
      return '10px'
    }

    return p.isTimeField ? '2px' : 0
  }} !important;
`
