import { StyledRsuiteCalendarBox } from 'fields/shared/StyledRsuiteCalendarBox'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { DateRangePicker as RsuiteDateRangePicker } from 'rsuite'

import { RSUITE_CALENDAR_LOCALE } from './constants'
import { getDateTupleFromUtcDate } from './utils'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { customDayjs } from '../../utils/customDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { sortDates } from '../../utils/sortDates'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'

import type { DateTupleRange } from './types'
import type { DateRange } from '../../types/definitions'
import type { Promisable } from 'type-fest'

type RangeCalendarPickerProps = {
  /**
   * @description
   * We expect a UTC Date range here and NOT a utcized one.
   *
   * The order between the start and end date doesn't matter since it's sorted internally.
   */
  defaultValue?: DateRange | undefined
  hasSingleCalendar?: boolean
  isHistorical?: boolean | undefined
  isOpen: boolean
  /**
   * @description
   * Note that `nextUtcdDateTupleRange` is ALREADY utized from the user pick.
   */
  onChange: (nextUtcDateTupleRange: DateTupleRange) => Promisable<void>
}
export function RangeCalendarPicker({
  defaultValue,
  hasSingleCalendar = false,
  isHistorical,
  isOpen,
  onChange
}: RangeCalendarPickerProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  // It's called "first" and "second" because the calendar can also be picked from right to left,
  // that's why we sort these first and second dates before calling `onChange()`
  // in order to distinguish the start date from the end date
  const selectedFirstUtcDate = useRef<Date | undefined>(undefined)
  const selectedSecondUtcDate = useRef<Date | undefined>(undefined)

  const { forceUpdate } = useForceUpdate()

  const controlledValue = useMemo(
    () => (defaultValue ? (sortDates(defaultValue) as DateRange) : undefined),
    [defaultValue]
  )
  const utcTodayAsDayjs = useMemo(() => customDayjs().utc().endOf('day'), [])
  const shouldDisableDate = useMemo(
    () => (date: Date) => (isHistorical ? getUtcizedDayjs(date).isAfter(utcTodayAsDayjs) : false),
    [isHistorical, utcTodayAsDayjs]
  )

  const handleSelect = useCallback(
    (nextLocalDate: Date) => {
      // We utcize the date picked by the user
      const nextUtcDate = getUtcizedDayjs(nextLocalDate).toDate()

      if (!selectedFirstUtcDate.current || selectedSecondUtcDate.current) {
        selectedFirstUtcDate.current = nextUtcDate
        selectedSecondUtcDate.current = undefined

        return
      }

      const sortedDateRange = sortDates([selectedFirstUtcDate.current, nextUtcDate]) as DateRange
      const [startDate, endDate] = sortedDateRange
      const startDateTuple = getDateTupleFromUtcDate(startDate)
      const endDateTuple = getDateTupleFromUtcDate(endDate)
      const nextUtcDateTupleRange = [startDateTuple, endDateTuple] as DateTupleRange

      selectedSecondUtcDate.current = nextUtcDate

      onChange(nextUtcDateTupleRange)
    },
    [onChange]
  )

  useEffect(() => {
    // We wait for the <Box /> to render so that `boxRef` is defined
    // and can be used as a container for <RsuiteDateRangePicker />
    forceUpdate()
  }, [forceUpdate])

  return (
    <StyledRsuiteCalendarBox
      ref={boxRef}
      $isDoubleCalendar={!hasSingleCalendar}
      className="Field-DateRangePicker__RangeCalendarPicker"
      onClick={stopMouseEventPropagation}
    >
      {boxRef.current && (
        <RsuiteDateRangePicker
          container={boxRef.current}
          format="yyyy-MM-dd"
          locale={RSUITE_CALENDAR_LOCALE}
          onSelect={handleSelect}
          open={isOpen}
          ranges={[]}
          shouldDisableDate={shouldDisableDate}
          showOneCalendar={hasSingleCalendar}
          // `defaultValue` seems to be immediatly cancelled so we come down to using a controlled `value`
          // eslint-disable-next-line no-null/no-null
          value={controlledValue ?? null}
        />
      )}
    </StyledRsuiteCalendarBox>
  )
}
