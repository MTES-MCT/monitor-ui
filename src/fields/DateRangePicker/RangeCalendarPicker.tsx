import { useCallback, useEffect, useMemo, useRef } from 'react'
import { DateRangePicker as RsuiteDateRangePicker } from 'rsuite'
import styled from 'styled-components'

import { useForceUpdate } from '../../hooks/useForceUpdate'
import { getUtcDayjs } from '../../utils/getUtcDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { sortDates } from '../../utils/sortDates'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'
import { RSUITE_CALENDAR_LOCALE } from './constants'
import { getDateTupleFromDate } from './utils'

import type { DateRange } from '../../types'
import type { DateTupleRange } from './types'
import type { Promisable } from 'type-fest'

type RangeCalendarPickerProps = {
  defaultValue?: DateRange
  isHistorical?: boolean
  isOpen: boolean
  onChange: (nextDateTupleRange: DateTupleRange) => Promisable<void>
}
export function RangeCalendarPicker({ defaultValue, isHistorical, isOpen, onChange }: RangeCalendarPickerProps) {
  const boxRef = useRef<HTMLDivElement>()
  const selectedFirstDate = useRef<Date>()

  const { forceUpdate } = useForceUpdate()

  const controlledValue = useMemo(
    () => (defaultValue ? (sortDates(defaultValue) as DateRange) : undefined),
    [defaultValue]
  )
  const utcTodayAsDayjs = useMemo(() => getUtcDayjs().endOf('day'), [])
  const disabledDate = useMemo(
    () => (date: Date) => isHistorical ? getUtcizedDayjs(date).isAfter(utcTodayAsDayjs) : false,
    [isHistorical, utcTodayAsDayjs]
  )

  const handleSelect = useCallback(
    (nextDate: Date) => {
      if (!selectedFirstDate.current) {
        selectedFirstDate.current = nextDate

        return
      }

      const sortedDateRange = sortDates([selectedFirstDate.current, nextDate]) as DateRange
      const [startDate, endDate] = sortedDateRange
      const startDateTuple = getDateTupleFromDate(startDate)
      const endDateTuple = getDateTupleFromDate(endDate)
      const nextDateTupleRange = [startDateTuple, endDateTuple] as DateTupleRange

      onChange(nextDateTupleRange)
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
          disabledDate={disabledDate}
          format="yyyy-MM-dd"
          locale={RSUITE_CALENDAR_LOCALE}
          onSelect={handleSelect}
          open={isOpen}
          ranges={[]}
          // `defaultValue` seems to be immediatly cancelled so we come down to using a controlled `value`
          value={controlledValue}
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

      * {
        display: none;
      }
    }
  }

  .rs-picker-daterange-menu {
    box-shadow: inset 0px 0px 0px 1px ${p => p.theme.color.lightGray};
    border-radius: 0;
    margin-top: 2px;
    width: 495px;

    .rs-picker-daterange-header,
    .rs-calendar-header-time-toolbar,
    .rs-picker-toolbar {
      display: none;
    }

    .rs-picker-daterange-calendar-group {
      height: auto;

      > .rs-calendar {
        font-size: 13px;
        height: auto !important;
        line-height: 1.4;
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
`
