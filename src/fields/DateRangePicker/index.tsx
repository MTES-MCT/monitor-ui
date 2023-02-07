// TODO We should make this component both form- & a11y-compliant with a `name` and proper (aria-)labels.

import { useCallback, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { Fieldset } from '../../elements/Fieldset'
import { Legend } from '../../elements/Legend'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { getLocalizedDayjs } from '../../utils/getLocalizedDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { DateInput } from './DateInput'
import { RangeCalendarPicker } from './RangeCalendarPicker'
import { TimeInput } from './TimeInput'
import { DateOrTimeInputRef, DateRangePosition, DateTuple, DateTupleRange, TimeTuple } from './types'
import { getDateFromDateAndTimeTuple, getDateTupleFromDate, getTimeTupleFromDate } from './utils'

import type { DateAsStringRange, DateRange } from '../../types'
import type { HTMLAttributes, MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

/**
 * This type should not be exposed in the final library. It's only exported to be reused in <FormikDateRangePicker />.
 *
 * @private
 */
export interface DateRangePickerProps extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange'> {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: DateRange | DateAsStringRange | undefined
  disabled?: boolean | undefined
  isCompact?: boolean | undefined
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
    | ((nextUtcDateRange: DateRange) => Promisable<void>)
    | ((nextUtcDateRange: DateAsStringRange) => Promisable<void>)
  withTime?: boolean
}
export interface DateRangePickerWithDateDateProps extends DateRangePickerProps {
  isStringDate?: false
  onChange?: (nextUtcDateRange: DateRange) => Promisable<void>
}
export interface DateRangePickerWithStringDateProps extends DateRangePickerProps {
  isStringDate: true
  onChange?: (nextUtcDateRange: DateAsStringRange) => Promisable<void>
}

export function DateRangePicker(props: DateRangePickerWithDateDateProps): JSX.Element
export function DateRangePicker(props: DateRangePickerWithStringDateProps): JSX.Element
export function DateRangePicker({
  baseContainer,
  defaultValue,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  isCompact = false,
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
  const startDateInputRef = useRef() as MutableRefObject<DateOrTimeInputRef>
  const startTimeInputRef = useRef() as MutableRefObject<DateOrTimeInputRef>
  const endDateInputRef = useRef() as MutableRefObject<DateOrTimeInputRef>
  const endTimeInputRef = useRef() as MutableRefObject<DateOrTimeInputRef>

  const isRangeCalendarPickerOpenRef = useRef(false)

  const selectedLocalizedStartDateRef = useRef<Date | undefined>(
    defaultValue ? getLocalizedDayjs(defaultValue[0]).toDate() : undefined
  )
  const selectedLocalizedEndDateRef = useRef<Date | undefined>(
    defaultValue ? getLocalizedDayjs(defaultValue[1]).toDate() : undefined
  )
  const selectedLocalizedStartDateTupleRef = useRef<DateTuple | undefined>(
    getDateTupleFromDate(selectedLocalizedStartDateRef.current)
  )
  const selectedLocalizedEndDateTupleRef = useRef<DateTuple | undefined>(
    getDateTupleFromDate(selectedLocalizedEndDateRef.current)
  )
  const selectedLocalizedStartTimeTupleRef = useRef<TimeTuple | undefined>(
    getTimeTupleFromDate(selectedLocalizedStartDateRef.current)
  )
  const selectedLocalizedEndTimeTupleRef = useRef<TimeTuple | undefined>(
    getTimeTupleFromDate(selectedLocalizedEndDateRef.current)
  )

  const { forceUpdate } = useForceUpdate()

  const rangeCalendarPickerDefaultValue = useMemo(
    () =>
      selectedLocalizedStartDateTupleRef.current && selectedLocalizedEndDateTupleRef.current
        ? ([
            getDateFromDateAndTimeTuple(selectedLocalizedStartDateTupleRef.current, ['00', '00']),
            getDateFromDateAndTimeTuple(selectedLocalizedEndDateTupleRef.current, ['00', '00'], true)
          ] as DateRange)
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedLocalizedEndDateTupleRef.current, selectedLocalizedStartDateTupleRef.current]
  )

  const submit = useCallback(() => {
    if (!onChange || !selectedLocalizedStartDateRef.current || !selectedLocalizedEndDateRef.current) {
      return
    }

    if (isStringDate) {
      const utcizedStartDateAsString = getUtcizedDayjs(selectedLocalizedStartDateRef.current).toISOString()
      const utcizedEndDateAsString = getUtcizedDayjs(selectedLocalizedEndDateRef.current).toISOString()

      const nextDateAsStringRange: DateAsStringRange = [utcizedStartDateAsString, utcizedEndDateAsString]

      ;(onChange as (nextUtcDateRange: DateAsStringRange) => Promisable<void>)(nextDateAsStringRange)
    } else {
      const utcizedStartDate = getUtcizedDayjs(selectedLocalizedStartDateRef.current).toDate()
      const utcizedEndDate = getUtcizedDayjs(selectedLocalizedEndDateRef.current).toDate()

      const nextDateRange: DateRange = [utcizedStartDate, utcizedEndDate]

      ;(onChange as (nextUtcDateRange: DateRange) => Promisable<void>)(nextDateRange)
    }
  }, [isStringDate, onChange])

  const closeRangeCalendarPicker = useCallback(() => {
    isRangeCalendarPickerOpenRef.current = false

    forceUpdate()
  }, [forceUpdate])

  const handleEndDateInputNext = useCallback(() => {
    if (!withTime) {
      return
    }

    endTimeInputRef.current.focus()
  }, [withTime])

  const handleEndDateInputPrevious = useCallback(() => {
    if (withTime) {
      startTimeInputRef.current.focus(true)

      return
    }

    startDateInputRef.current.focus(true)
  }, [withTime])

  const handleStartDateInputNext = useCallback(() => {
    if (withTime) {
      startTimeInputRef.current.focus()

      return
    }

    endDateInputRef.current.focus()
  }, [withTime])

  const handleDateInputChange = useCallback(
    (position: DateRangePosition, nextDateTuple: DateTuple, isFilled: boolean) => {
      if (position === DateRangePosition.START) {
        selectedLocalizedStartDateTupleRef.current = nextDateTuple

        // If there is no time input or a start time has already been selected,
        if (!withTime || selectedLocalizedStartTimeTupleRef.current) {
          // we must update the selected start date and call onChange()
          const startTimeTuple = (withTime ? selectedLocalizedStartTimeTupleRef.current : ['00', '00']) as TimeTuple
          const nextStartDate = getDateFromDateAndTimeTuple(nextDateTuple, startTimeTuple)

          selectedLocalizedStartDateRef.current = nextStartDate

          submit()
        }

        if (isFilled) {
          handleStartDateInputNext()
        }
      } else {
        selectedLocalizedEndDateTupleRef.current = nextDateTuple

        // If there is no time input or an end time has already been selected,
        if (!withTime || selectedLocalizedEndTimeTupleRef.current) {
          // we must update the selected end date and call onChange()
          const endTimeTuple = (withTime ? selectedLocalizedEndTimeTupleRef.current : ['23', '59']) as TimeTuple
          const nextEndDate = getDateFromDateAndTimeTuple(nextDateTuple, endTimeTuple, true)

          selectedLocalizedEndDateRef.current = nextEndDate

          submit()
        }

        if (isFilled) {
          handleEndDateInputNext()
        }
      }
    },
    [handleEndDateInputNext, handleStartDateInputNext, submit, withTime]
  )

  const handleRangeCalendarPickerChange = useCallback(
    (nextDateTupleRange: DateTupleRange) => {
      const [nextStartDateTuple, nextEndDateTuple] = nextDateTupleRange

      // If this is a date picker without a time input,
      if (!withTime) {
        // we have to fix the start date at the beginning of the day
        const nextStartDate = getDateFromDateAndTimeTuple(nextStartDateTuple, ['00', '00'])
        // and the end date at the end of the day
        const nextEndDate = getDateFromDateAndTimeTuple(nextEndDateTuple, ['23', '59'], true)

        selectedLocalizedStartDateRef.current = nextStartDate
        selectedLocalizedEndDateRef.current = nextEndDate
      }

      // If this is a date picker with a time input,
      else {
        // we include the selected start time if it exists, set it at the beginning of the day if not
        const nextStartDate = getDateFromDateAndTimeTuple(
          nextStartDateTuple,
          selectedLocalizedStartTimeTupleRef.current || ['00', '00']
        )
        selectedLocalizedStartDateRef.current = nextStartDate

        // we include the selected end time if it exists, set it at the end of the day if not
        const nextEndDate = getDateFromDateAndTimeTuple(
          nextEndDateTuple,
          selectedLocalizedEndTimeTupleRef.current || ['23', '59'],
          true
        )

        selectedLocalizedEndDateRef.current = nextEndDate
      }

      selectedLocalizedStartDateTupleRef.current = nextStartDateTuple
      selectedLocalizedStartTimeTupleRef.current = getTimeTupleFromDate(selectedLocalizedStartDateRef.current)
      selectedLocalizedEndDateTupleRef.current = nextEndDateTuple
      selectedLocalizedEndTimeTupleRef.current = getTimeTupleFromDate(selectedLocalizedEndDateRef.current)

      closeRangeCalendarPicker()

      submit()
    },
    [closeRangeCalendarPicker, submit, withTime]
  )

  const handleTimeInputFilled = useCallback(
    (position: DateRangePosition, nextTimeTuple: TimeTuple) => {
      if (position === DateRangePosition.START) {
        // If a start date has already been selected
        if (selectedLocalizedStartDateTupleRef.current) {
          // we must update the selected start date accordingly and submit it
          const nextStartDate = getDateFromDateAndTimeTuple(selectedLocalizedStartDateTupleRef.current, nextTimeTuple)

          selectedLocalizedStartDateRef.current = nextStartDate

          submit()
        }

        selectedLocalizedStartTimeTupleRef.current = nextTimeTuple

        endDateInputRef.current.focus()
      } else {
        // If an end date has already been selected
        if (selectedLocalizedEndDateTupleRef.current) {
          // we must update the selected end date accordingly and submit it
          const nextEndDate = getDateFromDateAndTimeTuple(selectedLocalizedEndDateTupleRef.current, nextTimeTuple, true)

          selectedLocalizedEndDateRef.current = nextEndDate

          submit()
        }

        selectedLocalizedEndTimeTupleRef.current = nextTimeTuple
      }

      submit()
    },
    [submit]
  )

  const openRangeCalendarPicker = useCallback(() => {
    isRangeCalendarPickerOpenRef.current = true

    forceUpdate()
  }, [forceUpdate])

  useFieldUndefineEffect(disabled, onChange)

  useClickOutsideEffect([endDateInputRef, startDateInputRef], closeRangeCalendarPicker, baseContainer)

  return (
    <Fieldset {...nativeProps}>
      <Legend isDisabled={disabled} isHidden={isLabelHidden}>
        {label}
      </Legend>

      <Box isDisabled={disabled}>
        <Field>
          <DateInput
            ref={startDateInputRef}
            defaultValue={selectedLocalizedStartDateTupleRef.current}
            disabled={disabled}
            isCompact={isCompact}
            isForcedFocused={isRangeCalendarPickerOpenRef.current}
            isLight={isLight}
            isStartDate
            onChange={(nextDateTuple, isFilled) =>
              handleDateInputChange(DateRangePosition.START, nextDateTuple, isFilled)
            }
            onClick={openRangeCalendarPicker}
            onNext={handleStartDateInputNext}
          />
        </Field>

        {withTime && (
          <Field isTimeField>
            <TimeInput
              ref={startTimeInputRef}
              baseContainer={baseContainer}
              defaultValue={selectedLocalizedStartTimeTupleRef.current}
              disabled={disabled}
              isCompact={isCompact}
              isLight={isLight}
              isStartDate
              minutesRange={minutesRange}
              onBack={() => startDateInputRef.current.focus(true)}
              onChange={nextTimeTuple => handleTimeInputFilled(DateRangePosition.START, nextTimeTuple)}
              onFocus={closeRangeCalendarPicker}
              onNext={() => endDateInputRef.current.focus()}
              onPrevious={() => startDateInputRef.current.focus(true)}
            />
          </Field>
        )}

        <Field isEndDateField>
          <DateInput
            ref={endDateInputRef}
            defaultValue={selectedLocalizedEndDateTupleRef.current}
            disabled={disabled}
            isCompact={isCompact}
            isEndDate
            isForcedFocused={isRangeCalendarPickerOpenRef.current}
            isLight={isLight}
            onBack={handleEndDateInputPrevious}
            onChange={(nextDateTuple, isFilled) =>
              handleDateInputChange(DateRangePosition.END, nextDateTuple, isFilled)
            }
            onClick={openRangeCalendarPicker}
            onNext={handleEndDateInputNext}
            onPrevious={handleEndDateInputPrevious}
          />
        </Field>

        {withTime && (
          <Field isTimeField>
            <TimeInput
              ref={endTimeInputRef}
              baseContainer={baseContainer}
              defaultValue={selectedLocalizedEndTimeTupleRef.current}
              disabled={disabled}
              isCompact={isCompact}
              isEndDate
              isLight={isLight}
              minutesRange={minutesRange}
              onBack={() => endDateInputRef.current.focus(true)}
              onChange={nextTimeTuple => handleTimeInputFilled(DateRangePosition.END, nextTimeTuple)}
              onFocus={closeRangeCalendarPicker}
              onPrevious={() => endDateInputRef.current.focus(true)}
            />
          </Field>
        )}
      </Box>

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
