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

import classNames from 'classnames'
import { useCallback, useMemo, useRef } from 'react'
import styled from 'styled-components'

import { CalendarPicker } from './CalendarPicker'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { customDayjs } from '../../utils/customDayjs'
import { normalizeString } from '../../utils/normalizeString'
import { DateInput } from '../DateRangePicker/DateInput'
import { TimeInput } from '../DateRangePicker/TimeInput'
import {
  getDayjsFromUtcDateAndTimeTuple,
  getUtcDateFromDateAndTimeTuple,
  getUtcDateTupleFromDayjs,
  getUtcTimeTupleFromDayjs
} from '../DateRangePicker/utils'

import type { DateInputRef, DateTuple, TimeInputRef, TimeTuple } from '../DateRangePicker/types'
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
  /** Only allow past dates until today. */
  isHistorical?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isStringDate?: boolean | undefined
  label: string
  /**
   * Range of minutes used to generate the time picker list.
   *
   * @example
   * `15` would produce a list with `..., 10:45, 11:00, 11:15, ...`.
   */
  minutesRange?: number | undefined
  /**
   * Called each time the date range picker is changed to a new valid value.
   *
   * @param nextUtcDateRange - A utcized date to be used as is to interact with the API.
   */
  onChange?:
    | ((nextUtcDate: Date | undefined) => Promisable<void>)
    | ((nextUtcDate: string | undefined) => Promisable<void>)
    | undefined
  withTime?: boolean | undefined
}
export interface DatePickerWithDateDateProps extends DatePickerProps {
  isStringDate?: false | undefined
  onChange?: (nextUtcDate: Date | undefined) => Promisable<void> | undefined
}
export interface DatePickerWithStringDateProps extends DatePickerProps {
  isStringDate: true
  onChange?: (nextUtcDate: string | undefined) => Promisable<void> | undefined
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
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
  isStringDate = false,
  label,
  minutesRange = 15,
  onChange,
  withTime = false,
  ...nativeProps
}: DatePickerProps) {
  /* eslint-disable no-null/no-null */
  const boxRef = useRef<HTMLDivElement>(null)
  const dateInputRef = useRef<DateInputRef>(null)
  const timeInputRef = useRef<TimeInputRef>(null)
  /* eslint-enable no-null/no-null */

  const isCalendarPickerOpenRef = useRef(false)

  const selectedUtcDateAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue) : undefined)
  const selectedUtcDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedUtcDateAsDayjsRef.current))
  const selectedUtcTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current))

  const { forceUpdate } = useForceUpdate()

  const controlledError = useMemo(() => normalizeString(error), [error])
  const defaultTimeTuple: TimeTuple = useMemo(() => (isEndDate ? ['23', '59'] : ['00', '00']), [isEndDate])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const calendarPickerDefaultValue = useMemo(
    () =>
      selectedUtcDateTupleRef.current
        ? getUtcDateFromDateAndTimeTuple(selectedUtcDateTupleRef.current, defaultTimeTuple)
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedUtcDateTupleRef.current]
  )

  const submit = useCallback(() => {
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

  const closeCalendarPicker = useCallback(() => {
    isCalendarPickerOpenRef.current = false

    forceUpdate()
  }, [forceUpdate])

  const handleDateInputNext = useCallback(() => {
    if (!withTime || !timeInputRef.current) {
      return
    }

    timeInputRef.current.focus()
  }, [withTime])

  const handleDateInputChange = useCallback(
    (nextUtcDateTuple: DateTuple, isFilled: boolean) => {
      selectedUtcDateTupleRef.current = nextUtcDateTuple

      // If there is no time input or a time has already been selected,
      if (!withTime || selectedUtcTimeTupleRef.current) {
        // we must update the selected date and call onChange()
        const timeTuple =
          withTime && selectedUtcTimeTupleRef.current ? selectedUtcTimeTupleRef.current : defaultTimeTuple

        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextUtcDateTuple, timeTuple, isEndDate)

        submit()
      }

      if (isFilled) {
        handleDateInputNext()
      }
    },
    [defaultTimeTuple, handleDateInputNext, isEndDate, submit, withTime]
  )

  const handleCalendarPickerChange = useCallback(
    (nextUtcizedDateTuple: DateTuple) => {
      // If this is a date picker without a time input,
      if (!withTime) {
        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextUtcizedDateTuple,
          // we set the time to the start (or end) of the day
          defaultTimeTuple,
          isEndDate
        )
      }

      // If this is a date picker with a time input,
      else {
        selectedUtcDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextUtcizedDateTuple,
          // we include the selected time if it exists, or set it to the start (or end) of the day if it doesn't
          selectedUtcTimeTupleRef.current || defaultTimeTuple,
          isEndDate
        )
      }

      selectedUtcDateTupleRef.current = nextUtcizedDateTuple
      selectedUtcTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedUtcDateAsDayjsRef.current)

      closeCalendarPicker()
      forceUpdate()

      submit()

      if (withTime && !selectedUtcTimeTupleRef.current && timeInputRef.current) {
        timeInputRef.current.focus()
      }
    },
    [closeCalendarPicker, defaultTimeTuple, forceUpdate, isEndDate, submit, withTime]
  )

  const handleDisable = useCallback(() => {
    selectedUtcDateTupleRef.current = undefined
    selectedUtcTimeTupleRef.current = undefined

    forceUpdate()
  }, [forceUpdate])

  /**
   * @description
   * This function is used to detect a user clearing all the date/time-related inputs
   * in order to call `onChange(undefined)` when everything is cleared
   */
  const handleDateOrTimeInputInput = useCallback(() => {
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

  const handleTimeInputFilled = useCallback(
    (nextTimeTuple: TimeTuple) => {
      // If a date has already been selected
      if (selectedUtcDateTupleRef.current) {
        // we must update the selected date accordingly and submit it
        const nextDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(selectedUtcDateTupleRef.current, nextTimeTuple)

        selectedUtcDateAsDayjsRef.current = nextDateAsDayjs

        submit()
      }

      selectedUtcTimeTupleRef.current = nextTimeTuple

      submit()
    },
    [submit]
  )

  const openCalendarPicker = useCallback(() => {
    isCalendarPickerOpenRef.current = true

    forceUpdate()
  }, [forceUpdate])

  useFieldUndefineEffect(disabled, onChange, handleDisable)

  useClickOutsideEffect(boxRef, closeCalendarPicker, baseContainer)

  return (
    <Fieldset
      className={classNames('Field-DatePicker', className)}
      disabled={disabled}
      isLegendHidden={isLabelHidden}
      legend={label}
      {...nativeProps}
    >
      <Box ref={boxRef}>
        <Field>
          <DateInput
            ref={dateInputRef}
            baseContainer={baseContainer || undefined}
            defaultValue={selectedUtcDateTupleRef.current}
            disabled={disabled}
            isCompact={isCompact}
            isEndDate={isEndDate}
            isForcedFocused={isCalendarPickerOpenRef.current}
            isLight={isLight}
            onChange={handleDateInputChange}
            onClick={openCalendarPicker}
            onInput={handleDateOrTimeInputInput}
            onNext={handleDateInputNext}
          />
        </Field>

        {withTime && (
          <Field $isTimeField>
            <TimeInput
              key={JSON.stringify(selectedUtcTimeTupleRef.current)}
              ref={timeInputRef}
              baseContainer={baseContainer || undefined}
              defaultValue={selectedUtcTimeTupleRef.current}
              disabled={disabled}
              isCompact={isCompact}
              isLight={isLight}
              minutesRange={minutesRange}
              onBack={() => dateInputRef.current?.focus(true)}
              onChange={handleTimeInputFilled}
              onFocus={closeCalendarPicker}
              onInput={handleDateOrTimeInputInput}
              onPrevious={() => dateInputRef.current?.focus(true)}
            />
          </Field>
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}

      <CalendarPicker
        isHistorical={isHistorical}
        isOpen={isCalendarPickerOpenRef.current}
        onChange={handleCalendarPickerChange}
        value={calendarPickerDefaultValue}
      />
    </Fieldset>
  )
}

const Box = styled.div`
  * {
    font-weight: 500;
    line-height: 1;
  }

  color: ${p => p.theme.color.gunMetal};
  font-size: 13px;
  position: relative;
`

const Field = styled.span<{
  $isTimeField?: boolean
}>`
  font-size: inherit;
  margin-left: ${p => (p.$isTimeField ? '2px' : 0)};
`
