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

import { useCallback, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { DateInput } from './DateInput'
import { RangeCalendarPicker } from './RangeCalendarPicker'
import { TimeInput } from './TimeInput'
import { DateInputRef, DateRangePosition, DateTuple, DateTupleRange, TimeInputRef, TimeTuple } from './types'
import { getDateTupleFromUtcDate, getTimeTupleFromUtcDate, getUtcDateFromDateAndTimeTuple } from './utils'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
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
  defaultValue,
  disabled = false,
  error,
  isCompact = false,
  isErrorMessageHidden = false,
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
  isStringDate = false,
  label,
  minutesRange = 15,
  onChange,
  withTime = false,
  ...nativeProps
}: DateRangePickerProps) {
  /* eslint-disable no-null/no-null */
  const startDateInputRef = useRef<DateInputRef>(null)
  const startTimeInputRef = useRef<TimeInputRef>(null)
  const endDateInputRef = useRef<DateInputRef>(null)
  const endTimeInputRef = useRef<TimeInputRef>(null)
  /* eslint-enable no-null/no-null */

  const isRangeCalendarPickerOpenRef = useRef(false)

  const selectedStartUtcDateRef = useRef(defaultValue ? customDayjs(defaultValue[0]).toDate() : undefined)
  const selectedEndUtcDateRef = useRef(defaultValue ? customDayjs(defaultValue[1]).toDate() : undefined)
  const selectedStartDateTupleRef = useRef(getDateTupleFromUtcDate(selectedStartUtcDateRef.current))
  const selectedEndDateTupleRef = useRef(getDateTupleFromUtcDate(selectedEndUtcDateRef.current))
  const selectedStartTimeTupleRef = useRef(getTimeTupleFromUtcDate(selectedStartUtcDateRef.current))
  const selectedEndTimeTupleRef = useRef(getTimeTupleFromUtcDate(selectedEndUtcDateRef.current))

  const { forceUpdate } = useForceUpdate()

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
    if (!onChange || !selectedStartUtcDateRef.current || !selectedEndUtcDateRef.current) {
      return
    }

    if (isStringDate) {
      const utcizedStartDateAsString = selectedStartUtcDateRef.current.toISOString()
      const utcizedEndDateAsString = selectedEndUtcDateRef.current.toISOString()

      const nextDateAsStringRange: DateAsStringRange = [utcizedStartDateAsString, utcizedEndDateAsString]

      ;(onChange as (nextUtcDateRange: DateAsStringRange) => Promisable<void>)(nextDateAsStringRange)
    } else {
      const utcizedStartDate = selectedStartUtcDateRef.current
      const utcizedEndDate = selectedEndUtcDateRef.current

      const nextDateRange: DateRange = [utcizedStartDate, utcizedEndDate]

      ;(onChange as (nextUtcDateRange: DateRange) => Promisable<void>)(nextDateRange)
    }
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

        // If there is no time input or a start time has already been selected,
        if (!withTime || selectedStartTimeTupleRef.current) {
          // we must update the selected start date and call onChange()
          const startUtcTimeTuple: TimeTuple =
            withTime && selectedStartTimeTupleRef.current ? selectedStartTimeTupleRef.current : ['00', '00']
          const nextStartDate = getUtcDateFromDateAndTimeTuple(nextDateTuple, startUtcTimeTuple)

          selectedStartUtcDateRef.current = nextStartDate

          submit()
        }

        if (isFilled) {
          handleStartDateInputNext()
        }
      } else {
        selectedEndDateTupleRef.current = nextDateTuple

        // If there is no time input or an end time has already been selected,
        if (!withTime || selectedEndTimeTupleRef.current) {
          // we must update the selected end date and call onChange()
          const endTimeTuple = (withTime ? selectedEndTimeTupleRef.current : ['23', '59']) as TimeTuple
          const nextEndDate = getUtcDateFromDateAndTimeTuple(nextDateTuple, endTimeTuple, true)

          selectedEndUtcDateRef.current = nextEndDate

          submit()
        }

        if (isFilled) {
          handleEndDateInputNext()
        }
      }
    },
    [handleEndDateInputNext, handleStartDateInputNext, submit, withTime]
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
        selectedStartUtcDateRef.current = getUtcDateFromDateAndTimeTuple(nextStartUtcDateTuple, ['00', '00'])
        // and the end date at the end of the day
        selectedEndUtcDateRef.current = getUtcDateFromDateAndTimeTuple(nextEndUtcDateTuple, ['23', '59'], true)
      }

      // If this is a date picker with a time input,
      else {
        // we include the selected start time if it exists, set it at the beginning of the day if not
        selectedStartUtcDateRef.current = getUtcDateFromDateAndTimeTuple(
          nextStartUtcDateTuple,
          selectedStartTimeTupleRef.current || ['00', '00']
        )

        // we include the selected end time if it exists, set it at the end of the day if not
        selectedEndUtcDateRef.current = getUtcDateFromDateAndTimeTuple(
          nextEndUtcDateTuple,
          selectedEndTimeTupleRef.current || ['23', '59'],
          true
        )
      }

      selectedStartDateTupleRef.current = nextStartUtcDateTuple
      selectedStartTimeTupleRef.current = getTimeTupleFromUtcDate(selectedStartUtcDateRef.current)
      selectedEndDateTupleRef.current = nextEndUtcDateTuple
      selectedEndTimeTupleRef.current = getTimeTupleFromUtcDate(selectedEndUtcDateRef.current)

      closeRangeCalendarPicker()

      submit()
    },
    [closeRangeCalendarPicker, submit, withTime]
  )

  const handleTimeInputFilled = useCallback(
    (position: DateRangePosition, nextTimeTuple: TimeTuple) => {
      if (!endDateInputRef.current) {
        return
      }

      if (position === DateRangePosition.START) {
        // If a start date has already been selected
        if (selectedStartDateTupleRef.current) {
          // we must update the selected start date accordingly and submit it
          const nextStartDate = getUtcDateFromDateAndTimeTuple(selectedStartDateTupleRef.current, nextTimeTuple)

          selectedStartUtcDateRef.current = nextStartDate

          submit()
        }

        selectedStartTimeTupleRef.current = nextTimeTuple

        endDateInputRef.current.focus()
      } else {
        // If an end date has already been selected
        if (selectedEndDateTupleRef.current) {
          // we must update the selected end date accordingly and submit it
          const nextEndDate = getUtcDateFromDateAndTimeTuple(selectedEndDateTupleRef.current, nextTimeTuple, true)

          selectedEndUtcDateRef.current = nextEndDate

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

  useFieldUndefineEffect(disabled, onChange, handleDisable)

  useClickOutsideEffect([endDateInputRef, startDateInputRef], closeRangeCalendarPicker, baseContainer)

  return (
    <Fieldset
      className="Field-DateRangePicker"
      disabled={disabled}
      isLegendHidden={isLabelHidden}
      legend={label}
      {...nativeProps}
    >
      <Box isDisabled={disabled}>
        <Field>
          <DateInput
            ref={startDateInputRef}
            baseContainer={baseContainer || undefined}
            defaultValue={selectedStartDateTupleRef.current}
            disabled={disabled}
            isCompact={isCompact}
            isForcedFocused={isRangeCalendarPickerOpenRef.current}
            isLight={isLight}
            isRange
            isStartDate
            onChange={(nextDateTuple, isFilled) =>
              handleDateInputChange(DateRangePosition.START, nextDateTuple, isFilled)
            }
            onClick={openRangeCalendarPicker}
            onInput={handleDateOrTimeInputInput}
            onNext={handleStartDateInputNext}
          />
        </Field>

        {withTime && (
          <Field isTimeField>
            <TimeInput
              ref={startTimeInputRef}
              baseContainer={baseContainer || undefined}
              defaultValue={selectedStartTimeTupleRef.current}
              disabled={disabled}
              isCompact={isCompact}
              isLight={isLight}
              isStartDate
              minutesRange={minutesRange}
              onBack={() => startDateInputRef.current?.focus(true)}
              onChange={nextTimeTuple => handleTimeInputFilled(DateRangePosition.START, nextTimeTuple)}
              onFocus={closeRangeCalendarPicker}
              onInput={handleDateOrTimeInputInput}
              onNext={() => endDateInputRef.current?.focus()}
              onPrevious={() => startDateInputRef.current?.focus(true)}
            />
          </Field>
        )}

        <Field isEndDateField>
          <DateInput
            ref={endDateInputRef}
            baseContainer={baseContainer || undefined}
            defaultValue={selectedEndDateTupleRef.current}
            disabled={disabled}
            isCompact={isCompact}
            isEndDate
            isForcedFocused={isRangeCalendarPickerOpenRef.current}
            isLight={isLight}
            isRange
            onBack={handleEndDateInputPrevious}
            onChange={(nextDateTuple, isFilled) =>
              handleDateInputChange(DateRangePosition.END, nextDateTuple, isFilled)
            }
            onClick={openRangeCalendarPicker}
            onInput={handleDateOrTimeInputInput}
            onNext={handleEndDateInputNext}
            onPrevious={handleEndDateInputPrevious}
          />
        </Field>

        {withTime && (
          <Field isTimeField>
            <TimeInput
              ref={endTimeInputRef}
              baseContainer={baseContainer || undefined}
              defaultValue={selectedEndTimeTupleRef.current}
              disabled={disabled}
              isCompact={isCompact}
              isEndDate
              isLight={isLight}
              minutesRange={minutesRange}
              onBack={() => endDateInputRef.current?.focus(true)}
              onChange={nextTimeTuple => handleTimeInputFilled(DateRangePosition.END, nextTimeTuple)}
              onFocus={closeRangeCalendarPicker}
              onInput={handleDateOrTimeInputInput}
              onPrevious={() => endDateInputRef.current?.focus(true)}
            />
          </Field>
        )}
      </Box>

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
  isDisabled: boolean
}>`
  * {
    font-weight: 500;
    line-height: 1;
  }

  color: ${p => p.theme.color.gunMetal};
  font-size: 13px;
  position: relative;

  ${p =>
    p.isDisabled &&
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
