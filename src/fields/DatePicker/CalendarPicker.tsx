import { StyledRsuiteCalendarBox } from 'fields/shared/StyledRsuiteCalendarBox'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { DatePicker as RsuiteDatePicker } from 'rsuite'

import { useForceUpdate } from '../../hooks/useForceUpdate'
import { customDayjs } from '../../utils/customDayjs'
import { getLocalizedDayjs } from '../../utils/getLocalizedDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'
import { RSUITE_CALENDAR_LOCALE } from '../DateRangePicker/constants'
import { getUtcDateTupleFromDayjs } from '../DateRangePicker/utils'

import type { DateTuple } from '../DateRangePicker/types'
import type { Promisable } from 'type-fest'

type CalendarPickerProps = {
  isHistorical?: boolean | undefined
  isOpen: boolean
  /**
   * @description
   * Note that `nextUtcDateTuple` is ALREADY utized from the user pick.
   */
  onChange: (nextUtcDateTuple: DateTuple) => Promisable<void>
  /**
   * @description
   * We expect a UTC Date here and NOT a utcized one.
   */
  value?: Date | undefined
}
export function CalendarPicker({ isHistorical, isOpen, onChange, value }: CalendarPickerProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const { forceUpdate } = useForceUpdate()

  const utcTodayAsDayjs = useMemo(() => customDayjs().utc().endOf('day'), [])
  const controlledValue = useMemo(() => (value ? getLocalizedDayjs(value).toDate() : undefined), [value])
  const shouldDisableDate = useMemo(
    () => (date?: Date) => (date && isHistorical ? getUtcizedDayjs(date).isAfter(utcTodayAsDayjs) : false),
    [isHistorical, utcTodayAsDayjs]
  )

  const handleSelect = useCallback(
    (nextLocalDate: Date) => {
      // We utcize the date picked by the user
      const nextUtcDateAsDayjs = getUtcizedDayjs(nextLocalDate)
      const nextUtcDateTuple = getUtcDateTupleFromDayjs(nextUtcDateAsDayjs)

      onChange(nextUtcDateTuple)
    },
    [onChange]
  )

  useEffect(() => {
    // We wait for the <Box /> to render so that `boxRef` is defined
    // and can be used as a container for <RsuiteDatePicker />
    forceUpdate()
  }, [forceUpdate])

  return (
    <StyledRsuiteCalendarBox
      ref={boxRef}
      className="Field-DatePicker__CalendarPicker"
      onClick={stopMouseEventPropagation}
    >
      {boxRef.current && (
        <RsuiteDatePicker
          container={boxRef.current}
          format="yyyy-MM-dd"
          locale={RSUITE_CALENDAR_LOCALE}
          oneTap
          onSelect={handleSelect}
          open={isOpen}
          ranges={[]}
          shouldDisableDate={shouldDisableDate}
          // eslint-disable-next-line no-null/no-null
          value={controlledValue ?? null}
        />
      )}
    </StyledRsuiteCalendarBox>
  )
}
