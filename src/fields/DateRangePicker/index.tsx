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

import classnames from 'classnames'
import { isEqual } from 'lodash'
import { useCallback, useEffect, useMemo, useRef } from 'react'
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
import { FocusControlProvider } from './useFocusControl'
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

import type { DateAsStringRange, DateRange } from '../../types'
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
  isCompact?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  /** Only allow past dates until today. */
  isHistorical?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isStringDate?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  /**
   * Range of minutes used to generate the time picker list.
   *
   * @example
   * `15` would produce a list with `..., 10:45, 11:00, 11:15, ...`.
   */
  minutesRange?: number
  /**
   * Called each time the date range picker is changed to a new valid value.
   *
   * @param nextUtcDateRange - A utcized date to be used as is to interact with the API.
   */
  onChange?:
    | ((nextUtcDateRange: DateRange | undefined) => Promisable<void>)
    | ((nextUtcDateRange: DateAsStringRange | undefined) => Promisable<void>)
  withTime?: boolean
}
export interface DateRangePickerWithDateDateProps extends DateRangePickerProps {
  isStringDate?: false
  onChange?: (nextUtcDateRange: DateRange | undefined) => Promisable<void>
}
export interface DateRangePickerWithStringDateProps extends DateRangePickerProps {
  isStringDate: true
  onChange?: (nextUtcDateRange: DateAsStringRange | undefined) => Promisable<void>
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
  isCompact = false,
  isErrorMessageHidden = false,
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
  isStringDate = false,
  isUndefinedWhenDisabled = false,
  label,
  minutesRange = 15,
  onChange,
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
  const isRangeCalendarPickerOpenRef = useRef(false)

  const selectedStartDateAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue[0]) : undefined)
  const selectedEndDateAsDayjsRef = useRef(defaultValue ? customDayjs(defaultValue[1]) : undefined)
  const selectedStartDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedStartDateAsDayjsRef.current))
  const selectedEndDateTupleRef = useRef(getUtcDateTupleFromDayjs(selectedEndDateAsDayjsRef.current))
  const selectedStartTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedStartDateAsDayjsRef.current))
  const selectedEndTimeTupleRef = useRef(getUtcTimeTupleFromDayjs(selectedEndDateAsDayjsRef.current))

  const previousDefaultValue = usePrevious(defaultValue)

  const { forceUpdate } = useForceUpdate()

  const controlledClassName = useMemo(() => classnames('Field-DateRangePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const rangeCalendarPickerDefaultValue = useMemo(
    () =>
      selectedStartDateTupleRef.current && selectedEndDateTupleRef.current
        ? ([
            getUtcDateFromDateAndTimeTuple(selectedStartDateTupleRef.current, ['00', '00']),
            getUtcDateFromDateAndTimeTuple(selectedEndDateTupleRef.current, ['00', '00'], true)
          ] as DateRange)
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedEndDateTupleRef.current, selectedStartDateTupleRef.current]
  )

  const submit = useCallback(() => {
    if (!onChange || !selectedStartDateAsDayjsRef.current || !selectedEndDateAsDayjsRef.current) {
      return
    }

    if (isStringDate) {
      const startUtcDateAsString = selectedStartDateAsDayjsRef.current.utc().toISOString()
      const endUtcDateAsString = selectedEndDateAsDayjsRef.current.utc().toISOString()

      const nextUtcDateAsStringRange: DateAsStringRange = [startUtcDateAsString, endUtcDateAsString]

      ;(onChange as (nextUtcDateRange: DateAsStringRange) => Promisable<void>)(nextUtcDateAsStringRange)

      return
    }

    const startUtcDate = selectedStartDateAsDayjsRef.current.toDate()
    const endUtcDate = selectedEndDateAsDayjsRef.current.toDate()

    const nextDateRange: DateRange = [startUtcDate, endUtcDate]

    ;(onChange as (nextUtcDateRange: DateRange) => Promisable<void>)(nextDateRange)
  }, [isStringDate, onChange])

  const closeRangeCalendarPicker = useCallback(() => {
    isRangeCalendarPickerOpenRef.current = false

    forceUpdate()
  }, [forceUpdate])

  const handleDisable = useCallback(() => {
    selectedStartDateTupleRef.current = undefined
    selectedStartTimeTupleRef.current = undefined
    selectedEndDateTupleRef.current = undefined
    selectedEndTimeTupleRef.current = undefined

    forceUpdate()
  }, [forceUpdate])

  const handleDateInputChange = useCallback(
    (position: DateRangePosition, nextDateTuple: DateTuple) => {
      if (position === DateRangePosition.START) {
        selectedStartDateTupleRef.current = nextDateTuple

        // If there is no time input or a start time has already been selected,
        if (!withTime || selectedStartTimeTupleRef.current) {
          // we must update the selected start date and call onChange()
          const startUtcTimeTuple: TimeTuple =
            withTime && selectedStartTimeTupleRef.current ? selectedStartTimeTupleRef.current : ['00', '00']
          const nextStartDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(nextDateTuple, startUtcTimeTuple)

          selectedStartDateAsDayjsRef.current = nextStartDateAsDayjs

          submit()
        }
      } else {
        selectedEndDateTupleRef.current = nextDateTuple

        // If there is no time input or an end time has already been selected,
        if (!withTime || selectedEndTimeTupleRef.current) {
          // we must update the selected end date and call onChange()
          const endTimeTuple = (withTime ? selectedEndTimeTupleRef.current : ['23', '59']) as TimeTuple
          const nextEndDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(nextDateTuple, endTimeTuple, true)

          selectedEndDateAsDayjsRef.current = nextEndDateAsDayjs

          submit()
        }
      }
    },
    [submit, withTime]
  )

  /**
   * @description
   * This function is used to detect a user clearing all the date/time-related inputs
   * in order to call `onChange(undefined)` when everything is cleared
   */
  const handleDateOrTimeInputInput = useCallback(() => {
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

  const handleRangeCalendarPickerChange = useCallback(
    (nextUtcDateTupleRange: DateTupleRange) => {
      const [nextStartUtcDateTuple, nextEndUtcDateTuple] = nextUtcDateTupleRange

      // If this is a date picker without a time input,
      if (!withTime) {
        // we have to fix the start date at the beginning of the day
        selectedStartDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextStartUtcDateTuple, ['00', '00'])
        // and the end date at the end of the day
        selectedEndDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(nextEndUtcDateTuple, ['23', '59'], true)
      }

      // If this is a date picker with a time input,
      else {
        // we include the selected start time if it exists, set it at the beginning of the day if not
        selectedStartDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextStartUtcDateTuple,
          selectedStartTimeTupleRef.current || ['00', '00']
        )

        // we include the selected end time if it exists, set it at the end of the day if not
        selectedEndDateAsDayjsRef.current = getDayjsFromUtcDateAndTimeTuple(
          nextEndUtcDateTuple,
          selectedEndTimeTupleRef.current || ['23', '59'],
          true
        )
      }

      selectedStartDateTupleRef.current = nextStartUtcDateTuple
      selectedStartTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedStartDateAsDayjsRef.current)
      selectedEndDateTupleRef.current = nextEndUtcDateTuple
      selectedEndTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedEndDateAsDayjsRef.current)

      closeRangeCalendarPicker()

      submit()
    },
    [closeRangeCalendarPicker, submit, withTime]
  )

  const handleTimeInputChange = useCallback(
    (position: DateRangePosition, nextTimeTuple: TimeTuple) => {
      if (!endDateInputRef.current) {
        return
      }

      if (position === DateRangePosition.START) {
        // If a start date has already been selected
        if (selectedStartDateTupleRef.current) {
          // we must update the selected start date accordingly and submit it
          const nextStartDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(selectedStartDateTupleRef.current, nextTimeTuple)

          selectedStartDateAsDayjsRef.current = nextStartDateAsDayjs

          submit()
        }

        selectedStartTimeTupleRef.current = nextTimeTuple
      } else {
        // If an end date has already been selected
        if (selectedEndDateTupleRef.current) {
          // we must update the selected end date accordingly and submit it
          const nextEndDateAsDayjs = getDayjsFromUtcDateAndTimeTuple(
            selectedEndDateTupleRef.current,
            nextTimeTuple,
            true
          )

          selectedEndDateAsDayjsRef.current = nextEndDateAsDayjs

          submit()
        }

        selectedEndTimeTupleRef.current = nextTimeTuple
      }

      submit()
    },
    [submit]
  )

  const openRangeCalendarPicker = useCallback(() => {
    isRangeCalendarPickerOpenRef.current = true

    forceUpdate()
  }, [forceUpdate])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, handleDisable)

  useClickOutsideEffect([endDateInputRef, startDateInputRef], closeRangeCalendarPicker, baseContainer)

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true

      return
    }

    if (
      (defaultValue &&
        previousDefaultValue &&
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

    selectedStartDateAsDayjsRef.current = defaultValue ? customDayjs(defaultValue[0]) : undefined
    selectedEndDateAsDayjsRef.current = defaultValue ? customDayjs(defaultValue[1]) : undefined
    selectedStartDateTupleRef.current = getUtcDateTupleFromDayjs(selectedStartDateAsDayjsRef.current)
    selectedEndDateTupleRef.current = getUtcDateTupleFromDayjs(selectedEndDateAsDayjsRef.current)
    selectedStartTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedStartDateAsDayjsRef.current)
    selectedEndTimeTupleRef.current = getUtcTimeTupleFromDayjs(selectedEndDateAsDayjsRef.current)

    forceUpdate()
  }, [defaultValue, forceUpdate, previousDefaultValue])

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      legend={label}
      style={style}
      {...nativeProps}
    >
      <FocusControlProvider>
        <Box $hasError={hasError} $isDisabled={disabled}>
          <Field>
            <DateInput
              ref={startDateInputRef}
              disabled={disabled}
              isCompact={isCompact}
              isForcedFocused={isRangeCalendarPickerOpenRef.current}
              isLight={isLight}
              isRange
              isStartDate
              onChange={nextDateTuple => handleDateInputChange(DateRangePosition.START, nextDateTuple)}
              onClick={openRangeCalendarPicker}
              onInput={handleDateOrTimeInputInput}
              value={selectedStartDateTupleRef.current}
            />
          </Field>

          {withTime && (
            <Field isTimeField>
              <TimeInput
                ref={startTimeInputRef}
                baseContainer={baseContainer || undefined}
                disabled={disabled}
                isCompact={isCompact}
                isLight={isLight}
                isStartDate
                minutesRange={minutesRange}
                onChange={nextTimeTuple => handleTimeInputChange(DateRangePosition.START, nextTimeTuple)}
                onFocus={closeRangeCalendarPicker}
                onInput={handleDateOrTimeInputInput}
                value={selectedStartTimeTupleRef.current}
              />
            </Field>
          )}

          <Field isEndDateField>
            <DateInput
              ref={endDateInputRef}
              disabled={disabled}
              isCompact={isCompact}
              isEndDate
              isForcedFocused={isRangeCalendarPickerOpenRef.current}
              isLight={isLight}
              isRange
              onChange={nextDateTuple => handleDateInputChange(DateRangePosition.END, nextDateTuple)}
              onClick={openRangeCalendarPicker}
              onInput={handleDateOrTimeInputInput}
              value={selectedEndDateTupleRef.current}
            />
          </Field>

          {withTime && (
            <Field isTimeField>
              <TimeInput
                ref={endTimeInputRef}
                baseContainer={baseContainer || undefined}
                disabled={disabled}
                isCompact={isCompact}
                isEndDate
                isLight={isLight}
                minutesRange={minutesRange}
                onChange={nextTimeTuple => handleTimeInputChange(DateRangePosition.END, nextTimeTuple)}
                onFocus={closeRangeCalendarPicker}
                onInput={handleDateOrTimeInputInput}
                value={selectedEndTimeTupleRef.current}
              />
            </Field>
          )}
        </Box>
      </FocusControlProvider>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}

      <RangeCalendarPicker
        defaultValue={rangeCalendarPickerDefaultValue}
        isHistorical={isHistorical}
        isOpen={isRangeCalendarPickerOpenRef.current}
        onChange={handleRangeCalendarPickerChange}
      />
    </Fieldset>
  )
}

const Box = styled.div<{
  $hasError: boolean
  $isDisabled: boolean
}>`
  * {
    font-weight: 500;
    line-height: 1;
  }

  color: ${p => p.theme.color.gunMetal};
  display: inline-flex;
  font-size: 13px;
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
  }};
`
