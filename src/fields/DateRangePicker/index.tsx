// TODO We should make this component both form- & a11y-compliant with a `name` and proper (aria-)labels.

import { useCallback, useEffect, useMemo, useRef } from 'react'
import styled, { css } from 'styled-components'

import { Fieldset } from '../../elements/Fieldset'
import { Legend } from '../../elements/Legend'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { getLocalizedDayjs } from '../../utils/getLocalizedDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { DateInput } from './DateInput'
import { RangeCalendarPicker } from './RangeCalendarPicker'
import { TimeInput } from './TimeInput'
import { DateOrTimeInputRef, DateRangePosition, DateTuple, DateTupleRange, TimeTuple } from './types'
import { getDateFromDateAndTimeTuple, getDateTupleFromDate, getTimeTupleFromDate } from './utils'

import type { DateRange } from '../../types'
import type { HTMLAttributes, MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

export type DateRangePickerProps = Omit<HTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange'> & {
  defaultValue?: DateRange
  disabled?: boolean
  isCompact?: boolean
  /** Only allow past dates until today. */
  isHistorical?: boolean
  isLabelHidden?: boolean
  isLight?: boolean
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
  onChange?: (nextUtcDateRange: DateRange) => Promisable<void>
  withTime?: boolean
}
export function DateRangePicker({
  defaultValue,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  isCompact = false,
  isHistorical = false,
  isLabelHidden = false,
  isLight = false,
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

  const selectedStartDateRef = useRef<Date | undefined>(
    defaultValue ? getLocalizedDayjs(defaultValue[0]).toDate() : undefined
  )
  const selectedEndDateRef = useRef<Date | undefined>(
    defaultValue ? getLocalizedDayjs(defaultValue[1]).toDate() : undefined
  )
  const selectedStartDateTupleRef = useRef<DateTuple | undefined>(getDateTupleFromDate(selectedStartDateRef.current))
  const selectedEndDateTupleRef = useRef<DateTuple | undefined>(getDateTupleFromDate(selectedEndDateRef.current))
  const selectedStartTimeTupleRef = useRef<TimeTuple | undefined>(getTimeTupleFromDate(selectedStartDateRef.current))
  const selectedEndTimeTupleRef = useRef<TimeTuple | undefined>(getTimeTupleFromDate(selectedEndDateRef.current))

  const { forceUpdate } = useForceUpdate()

  const rangeCalendarPickerDefaultValue = useMemo(
    () =>
      selectedStartDateTupleRef.current && selectedEndDateTupleRef.current
        ? ([
            getDateFromDateAndTimeTuple(selectedStartDateTupleRef.current, ['00', '00']),
            getDateFromDateAndTimeTuple(selectedEndDateTupleRef.current, ['00', '00'], true)
          ] as DateRange)
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedEndDateTupleRef.current, selectedStartDateTupleRef.current]
  )

  const submit = useCallback(() => {
    if (!onChange || !selectedStartDateRef.current || !selectedEndDateRef.current) {
      return
    }

    const utcizedStartDate = getUtcizedDayjs(selectedStartDateRef.current).toDate()
    const utcizedEndDate = getUtcizedDayjs(selectedEndDateRef.current).toDate()

    const nextDateRange: DateRange = [utcizedStartDate, utcizedEndDate]
    onChange(nextDateRange)
  }, [onChange])

  const closeRangeCalendarPicker = useCallback(() => {
    isRangeCalendarPickerOpenRef.current = false

    forceUpdate()
  }, [forceUpdate])

  const handleClickOutside = useCallback(
    (event: globalThis.MouseEvent) => {
      const target = event.target as Node | null

      if (startDateInputRef.current.box.contains(target) || endDateInputRef.current.box.contains(target)) {
        return
      }

      closeRangeCalendarPicker()
    },
    [closeRangeCalendarPicker]
  )

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
        selectedStartDateTupleRef.current = nextDateTuple

        // If there is no time input or a start time has already been selected,
        if (!withTime || selectedStartTimeTupleRef.current) {
          // we must update the selected start date and call onChange()
          const startTimeTuple = (withTime ? selectedStartTimeTupleRef.current : ['00', '00']) as TimeTuple
          const nextStartDate = getDateFromDateAndTimeTuple(nextDateTuple, startTimeTuple)

          selectedStartDateRef.current = nextStartDate

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
          const nextEndDate = getDateFromDateAndTimeTuple(nextDateTuple, endTimeTuple, true)

          selectedEndDateRef.current = nextEndDate

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

        selectedStartDateRef.current = nextStartDate
        selectedEndDateRef.current = nextEndDate
      }

      // If this is a date picker with a time input,
      else {
        // we include the selected start time if it exists, set it at the beginning of the day if not
        const nextStartDate = getDateFromDateAndTimeTuple(
          nextStartDateTuple,
          selectedStartTimeTupleRef.current || ['00', '00']
        )
        selectedStartDateRef.current = nextStartDate

        // we include the selected end time if it exists, set it at the end of the day if not
        const nextEndDate = getDateFromDateAndTimeTuple(
          nextEndDateTuple,
          selectedEndTimeTupleRef.current || ['23', '59'],
          true
        )

        selectedEndDateRef.current = nextEndDate
      }

      selectedStartDateTupleRef.current = nextStartDateTuple
      selectedStartTimeTupleRef.current = getTimeTupleFromDate(selectedStartDateRef.current)
      selectedEndDateTupleRef.current = nextEndDateTuple
      selectedEndTimeTupleRef.current = getTimeTupleFromDate(selectedEndDateRef.current)

      closeRangeCalendarPicker()
      forceUpdate()

      submit()
    },
    [closeRangeCalendarPicker, forceUpdate, submit, withTime]
  )

  const handleTimeInputFilled = useCallback(
    (position: DateRangePosition, nextTimeTuple: TimeTuple) => {
      if (position === DateRangePosition.START) {
        // If a start date has already been selected
        if (selectedStartDateTupleRef.current) {
          // we must update the selected start date accordingly and submit it
          const nextStartDate = getDateFromDateAndTimeTuple(selectedStartDateTupleRef.current, nextTimeTuple)

          selectedStartDateRef.current = nextStartDate

          submit()
        }

        selectedStartTimeTupleRef.current = nextTimeTuple

        endDateInputRef.current.focus()
      } else {
        // If an end date has already been selected
        if (selectedEndDateTupleRef.current) {
          // we must update the selected end date accordingly and submit it
          const nextEndDate = getDateFromDateAndTimeTuple(selectedEndDateTupleRef.current, nextTimeTuple, true)

          selectedEndDateRef.current = nextEndDate

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

  useEffect(() => {
    window.document.addEventListener('click', handleClickOutside)

    return () => {
      window.document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <Fieldset {...nativeProps}>
      <Legend isDisabled={disabled} isHidden={isLabelHidden}>
        {label}
      </Legend>

      <Box isDisabled={disabled}>
        <Field>
          <DateInput
            ref={startDateInputRef}
            defaultValue={selectedStartDateTupleRef.current}
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
              defaultValue={selectedStartTimeTupleRef.current}
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
            defaultValue={selectedEndDateTupleRef.current}
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
              defaultValue={selectedEndTimeTupleRef.current}
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
