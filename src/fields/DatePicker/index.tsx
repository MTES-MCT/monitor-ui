// TODO We should make this component both form- & a11y-compliant with a `name` and proper (aria-)labels.

import { useCallback, useMemo, useRef } from 'react'
import styled from 'styled-components'

import { Fieldset } from '../../elements/Fieldset'
import { Legend } from '../../elements/Legend'
import { useClickOutside } from '../../hooks/useClickOutside'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { getLocalizedDayjs } from '../../utils/getLocalizedDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { DateInput } from '../DateRangePicker/DateInput'
import { TimeInput } from '../DateRangePicker/TimeInput'
import { getDateFromDateAndTimeTuple, getDateTupleFromDate, getTimeTupleFromDate } from '../DateRangePicker/utils'
import { CalendarPicker } from './CalendarPicker'

import type { DateOrTimeInputRef, DateTuple, TimeTuple } from '../DateRangePicker/types'
import type { HTMLAttributes, MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

/**
 * This type should not be exposed in the final library. It's only exported to be reused in <FormikDatePicker />.
 *
 * @private
 */
export interface DatePickerProps extends Omit<HTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange'> {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: Date | string | undefined
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
  minutesRange?: number | undefined
  /**
   * Called each time the date range picker is changed to a new valid value.
   *
   * @param nextUtcDateRange - A utcized date to be used as is to interact with the API.
   */
  onChange?: ((nextUtcDate: Date) => Promisable<void>) | ((nextUtcDate: string) => Promisable<void>) | undefined
  withTime?: boolean | undefined
}
export interface DatePickerWithDateDateProps extends DatePickerProps {
  isStringDate?: false | undefined
  onChange?: (nextUtcDate: Date) => Promisable<void> | undefined
}
export interface DatePickerWithStringDateProps extends DatePickerProps {
  isStringDate: true
  onChange?: (nextUtcDate: string) => Promisable<void> | undefined
}

export function DatePicker(props: DatePickerWithDateDateProps): JSX.Element
export function DatePicker(props: DatePickerWithStringDateProps): JSX.Element
export function DatePicker({
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
}: DatePickerProps) {
  const boxRef = useRef() as MutableRefObject<HTMLDivElement>
  const dateInputRef = useRef() as MutableRefObject<DateOrTimeInputRef>
  const timeInputRef = useRef() as MutableRefObject<DateOrTimeInputRef>

  const isCalendarPickerOpenRef = useRef(false)

  const selectedLocalizedDateRef = useRef<Date | undefined>(
    defaultValue ? getLocalizedDayjs(defaultValue).toDate() : undefined
  )
  const selectedLocalizedDateTupleRef = useRef<DateTuple | undefined>(
    getDateTupleFromDate(selectedLocalizedDateRef.current)
  )
  const selectedLocalizedTimeTupleRef = useRef<TimeTuple | undefined>(
    getTimeTupleFromDate(selectedLocalizedDateRef.current)
  )

  const { forceUpdate } = useForceUpdate()

  const rangeCalendarPickerDefaultValue = useMemo(
    () =>
      selectedLocalizedDateTupleRef.current
        ? getDateFromDateAndTimeTuple(selectedLocalizedDateTupleRef.current, ['00', '00'])
        : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedLocalizedDateTupleRef.current]
  )

  const submit = useCallback(() => {
    if (!onChange || !selectedLocalizedDateRef.current) {
      return
    }

    const nextDateAsDayjs = getUtcizedDayjs(selectedLocalizedDateRef.current)

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
    if (!withTime) {
      return
    }

    timeInputRef.current.focus()
  }, [withTime])

  const handleDateInputChange = useCallback(
    (nextDateTuple: DateTuple, isFilled: boolean) => {
      selectedLocalizedDateTupleRef.current = nextDateTuple

      // If there is no time input or a time has already been selected,
      if (!withTime || selectedLocalizedTimeTupleRef.current) {
        // we must update the selected date and call onChange()
        const timeTuple = (withTime ? selectedLocalizedTimeTupleRef.current : ['00', '00']) as TimeTuple
        const nextDate = getDateFromDateAndTimeTuple(nextDateTuple, timeTuple)

        selectedLocalizedDateRef.current = getLocalizedDayjs(nextDate).toDate()

        submit()
      }

      if (isFilled) {
        handleDateInputNext()
      }
    },
    [handleDateInputNext, submit, withTime]
  )

  const handleCalendarPickerChange = useCallback(
    (nextDateTuple: DateTuple) => {
      // If this is a date picker without a time input,
      if (!withTime) {
        // we have to fix the date at the beginning of the day
        const nextDate = getDateFromDateAndTimeTuple(nextDateTuple, ['00', '00'])

        selectedLocalizedDateRef.current = nextDate
      }

      // If this is a date picker with a time input,
      else {
        // we include the selected time if it exists, set it at the beginning of the day if not
        const nextDate = getDateFromDateAndTimeTuple(
          nextDateTuple,
          selectedLocalizedTimeTupleRef.current || ['00', '00']
        )
        selectedLocalizedDateRef.current = nextDate
      }

      selectedLocalizedDateTupleRef.current = nextDateTuple
      selectedLocalizedTimeTupleRef.current = getTimeTupleFromDate(selectedLocalizedDateRef.current)

      closeCalendarPicker()
      forceUpdate()

      submit()

      if (withTime && !selectedLocalizedTimeTupleRef.current) {
        timeInputRef.current.focus()
      }
    },
    [closeCalendarPicker, forceUpdate, submit, withTime]
  )

  const handleTimeInputFilled = useCallback(
    (nextTimeTuple: TimeTuple) => {
      // If a date has already been selected
      if (selectedLocalizedDateTupleRef.current) {
        // we must update the selected date accordingly and submit it
        const nextDate = getDateFromDateAndTimeTuple(selectedLocalizedDateTupleRef.current, nextTimeTuple)

        selectedLocalizedDateRef.current = nextDate

        submit()
      }

      selectedLocalizedTimeTupleRef.current = nextTimeTuple

      submit()
    },
    [submit]
  )

  const openCalendarPicker = useCallback(() => {
    isCalendarPickerOpenRef.current = true

    forceUpdate()
  }, [forceUpdate])

  useClickOutside(boxRef, closeCalendarPicker, baseContainer)

  return (
    <Fieldset disabled={disabled} {...nativeProps}>
      <Legend isDisabled={disabled} isHidden={isLabelHidden}>
        {label}
      </Legend>

      <Box ref={boxRef}>
        <Field>
          <DateInput
            ref={dateInputRef}
            defaultValue={selectedLocalizedDateTupleRef.current}
            disabled={disabled}
            isCompact={isCompact}
            isForcedFocused={isCalendarPickerOpenRef.current}
            isLight={isLight}
            onChange={handleDateInputChange}
            onClick={openCalendarPicker}
            onNext={handleDateInputNext}
          />
        </Field>

        {withTime && (
          <Field $isTimeField>
            <TimeInput
              ref={timeInputRef}
              baseContainer={baseContainer}
              defaultValue={selectedLocalizedTimeTupleRef.current}
              disabled={disabled}
              isCompact={isCompact}
              isLight={isLight}
              minutesRange={minutesRange}
              onBack={() => dateInputRef.current.focus(true)}
              onChange={handleTimeInputFilled}
              onFocus={closeCalendarPicker}
              onPrevious={() => dateInputRef.current.focus(true)}
            />
          </Field>
        )}
      </Box>

      <CalendarPicker
        defaultValue={rangeCalendarPickerDefaultValue}
        isHistorical={isHistorical}
        isOpen={isCalendarPickerOpenRef.current}
        onChange={handleCalendarPickerChange}
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
