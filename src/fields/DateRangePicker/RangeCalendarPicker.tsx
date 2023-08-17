import { useCallback, useEffect, useMemo, useRef } from 'react'
import { DateRangePicker as RsuiteDateRangePicker } from 'rsuite'
import styled from 'styled-components'

import { RSUITE_CALENDAR_LOCALE } from './constants'
import { getDateTupleFromUtcDate } from './utils'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { customDayjs } from '../../utils/customDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { sortDates } from '../../utils/sortDates'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'

import type { DateTupleRange } from './types'
import type { DateRange } from '../../types'
import type { Promisable } from 'type-fest'

type RangeCalendarPickerProps = {
  /**
   * @description
   * We expect a UTC Date range here and NOT a utcized one.
   *
   * The order between the start and end date doesn't matter since it's sorted internally.
   */
  defaultValue?: DateRange | undefined
  didShowOneCalendar?: boolean
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
  didShowOneCalendar = false,
  isHistorical,
  isOpen,
  onChange
}: RangeCalendarPickerProps) {
  const boxRef = useRef<HTMLDivElement>()
  // It's called "first" and "second" because the calendar can also be picked from right to left,
  // that's why we sort these first and second dates before calling `onChange()`
  // in order to distinguish the start date from the end date
  const selectedFirstUtcDate = useRef<Date>()
  const selectedSecondUtcDate = useRef<Date>()

  const { forceUpdate } = useForceUpdate()

  const controlledValue = useMemo(
    () => (defaultValue ? (sortDates(defaultValue) as DateRange) : undefined),
    [defaultValue]
  )
  const utcTodayAsDayjs = useMemo(() => customDayjs().utc().endOf('day'), [])
  const shouldDisableDate = useMemo(
    () => (date: Date) => isHistorical ? getUtcizedDayjs(date).isAfter(utcTodayAsDayjs) : false,
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
    <Box ref={boxRef as any} onClick={stopMouseEventPropagation}>
      {boxRef.current && (
        <RsuiteDateRangePicker
          container={boxRef.current}
          format="yyyy-MM-dd"
          locale={RSUITE_CALENDAR_LOCALE}
          onSelect={handleSelect}
          open={isOpen}
          ranges={[]}
          shouldDisableDate={shouldDisableDate}
          showOneCalendar={didShowOneCalendar}
          // `defaultValue` seems to be immediatly cancelled so we come down to using a controlled `value`
          // eslint-disable-next-line no-null/no-null
          value={controlledValue ?? null}
        />
      )}
    </Box>
  )
}

const Box = styled.div`
  height: 0;
  position: relative;
  user-select: none;

  /*
    This is a hack to hide .rs-picker-daterange > .rs-picker-toggle which must exist in DOM
    since it's used as a ref by Rsuite to calculate .rs-picker-daterange-menu position
  */
  .rs-picker-daterange {
    font-size: 0;
    position: absolute;

    .rs-picker-toggle {
      border: 0 !important;
      padding: 0;
      box-shadow: none;

      * {
        display: none;
      }
    }
  }

  .rs-picker-daterange-menu {
    box-shadow: inset 0px 0px 0px 1px ${p => p.theme.color.lightGray};
    border-radius: 0;
    margin-top: 2px;

    .rs-picker-daterange-header,
    .rs-calendar-header-time-toolbar,
    .rs-picker-toolbar {
      display: none;
    }
    .rs-picker-daterange-panel,
    .rs-picker-daterange-panel-show-one-calendar {
      .rs-picker-daterange-calendar-group,
      .rs-picker-daterange-calendar-single {
        height: auto;

        > .rs-calendar {
          font-size: 13px;
          height: auto !important;
          line-height: 1.3846;
          padding: 0;

          &:first-child {
            border-right: solid 1px ${p => p.theme.color.lightGray};
          }

          > .rs-calendar-header {
            border-bottom: solid 1px ${p => p.theme.color.lightGray};
            padding: 8px;

            > .rs-calendar-header-month-toolbar {
              align-items: center;
              color: ${p => p.theme.color.slateGray};
              display: flex;
              justify-content: space-between;

              > .rs-calendar-header-backward {
                color: ${p => p.theme.color.slateGray};
              }

              > .rs-calendar-header-title {
                color: ${p => p.theme.color.slateGray};
                font-size: 13px;
                font-weight: 500;
                padding: 5px 8px 6px;
                text-transform: uppercase;

                &.rs-calendar-header-error {
                  color: ${p => p.theme.color.slateGray};

                  &:hover {
                    color: ${p => p.theme.color.slateGray};
                  }
                }
              }

              > .rs-calendar-header-forward {
                color: ${p => p.theme.color.slateGray};
              }
            }
          }

          > .rs-calendar-body {
            padding: 12px 8px 0;

            .rs-calendar-table-cell {
              padding: 0 0 4px 0;
              width: 33px;

              &.rs-calendar-table-cell-in-range:before {
                background-color: ${p => p.theme.color.blueGray[25]};
                height: 33px;
                margin-top: 0;
              }

              > .rs-calendar-table-cell-content {
                border-radius: 0 !important;
                display: inline-flex;
                height: 33px;
                justify-content: center;
                line-height: 1;
                padding: 7px 0 0;
                width: 33px;
              }
              &:hover .rs-calendar-table-cell-content {
                background-color: ${p => p.theme.color.blueYonder[25]};
                color: ${p => p.theme.color.blueYonder[100]};
              }
              &[role='columnheader'] .rs-calendar-table-cell-content,
              &[role='columnheader']:hover .rs-calendar-table-cell-content {
                background-color: transparent;
                color: ${p => p.theme.color.slateGray};
              }
              &.rs-calendar-table-cell-disabled .rs-calendar-table-cell-content {
                background-color: transparent;
                color: ${p => p.theme.color.lightGray};
              }
              &.rs-calendar-table-cell-selected > .rs-calendar-table-cell-content {
                background-color: ${p => p.theme.color.blueGray[100]};
              }

              &.rs-calendar-table-cell-selected .rs-calendar-table-cell-content {
                background-color: ${p => p.theme.color.blueGray[100]};
              }
            }
          }

          > .rs-calendar-month-dropdown {
            border: 0;
            margin-top: 3px;

            .rs-calendar-month-dropdown-year {
              color: ${p => p.theme.color.slateGray};

              &.rs-calendar-month-dropdown-year-active {
                color: ${p => p.theme.color.blueYonder[100]};
              }
            }

            .rs-calendar-month-dropdown-cell {
              > .rs-calendar-month-dropdown-cell-content {
                border-radius: 0 !important;
                color: ${p => p.theme.color.gunMetal};
                display: inline-flex;
                height: 33px;
                justify-content: center;
                line-height: 1;
                padding: 8px 0 0;
                width: 33px;
              }
              &:hover > .rs-calendar-month-dropdown-cell-content {
                background-color: ${p => p.theme.color.blueYonder[25]};
                color: ${p => p.theme.color.blueYonder[100]};
              }
              &.rs-calendar-month-dropdown-cell-active > .rs-calendar-month-dropdown-cell-content {
                background-color: ${p => p.theme.color.blueGray[100]};
                color: ${p => p.theme.color.white};
              }
            }
          }
        }
      }
    }
  }
`
