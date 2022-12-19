import { useCallback, useMemo } from 'react'
import { DatePicker as RsuiteDatePicker } from 'rsuite'
import styled, { createGlobalStyle } from 'styled-components'

import { getUtcDayjs } from '../../utils/getUtcDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { RSUITE_CALENDAR_LOCALE } from '../DateRangePicker/constants'
import { getDateTupleFromDate } from '../DateRangePicker/utils'

import type { DateTuple } from '../DateRangePicker/types'
import type { Promisable } from 'type-fest'

type CalendarPickerProps = {
  defaultValue?: Date
  isHistorical?: boolean
  onChange: (nextDateTuple: DateTuple) => Promisable<void>
}
export function CalendarPicker({ defaultValue, isHistorical, onChange }: CalendarPickerProps) {
  const utcTodayAsDayjs = useMemo(() => getUtcDayjs().endOf('day'), [])
  const disabledDate = useMemo(
    () => (date?: Date) => date && isHistorical ? getUtcizedDayjs(date).isAfter(utcTodayAsDayjs) : false,
    [isHistorical, utcTodayAsDayjs]
  )

  const handleSelect = useCallback(
    (nextDate: Date) => {
      const nextDateTuple = getDateTupleFromDate(nextDate)

      onChange(nextDateTuple)
    },
    [onChange]
  )

  return (
    <>
      <RsuiteCalendarPickerModalGlobalStyle />

      <Box>
        <RsuiteDatePicker
          className="AAAAAAAAA"
          classPrefix="mui-picker-"
          disabledDate={disabledDate}
          format="yyyy-MM-dd"
          locale={RSUITE_CALENDAR_LOCALE}
          oneTap
          onSelect={handleSelect}
          open
          ranges={[]}
          // `defaultValue` seems to be immediatly cancelled so we come down to using a controlled `value`
          value={defaultValue}
        />
      </Box>
    </>
  )
}

export const RsuiteCalendarPickerModalGlobalStyle: any = createGlobalStyle`
  .rs-mui-picker-date-menu {
    border: solid 1px ${p => p.theme.color.lightGray};
    border-radius: 0;
    margin-top: 4px;

    .rs-picker-date-header,
    .rs-calendar-header-time-toolbar,
    .rs-picker-toolbar {
      display: none;
    }

    .rs-calendar {
      height: auto !important;
      padding: 0;

      :first-child {
        border-right: solid 1px ${p => p.theme.color.lightGray};
      }

      .rs-calendar-header {
        border-bottom: solid 1px ${p => p.theme.color.lightGray};
        padding: 8px;

        .rs-calendar-header-month-toolbar {
          align-items: center;
          color: ${p => p.theme.color.slateGray};
          display: flex;
          justify-content: space-between;

          .rs-calendar-header-title {
            font-size: inherit;
            text-transform: uppercase;

            &.rs-calendar-header-error {
              color: ${p => p.theme.color.slateGray};

              :hover {
                color: ${p => p.theme.color.slateGray};
              }
            }
          }
        }
      }

      .rs-calendar-view {
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
            align-items: center;
            border-radius: 0 !important;
            display: inline-flex;
            height: 33px;
            justify-content: center;
            padding-bottom: 3px;
            width: 33px;
          }
          :hover .rs-calendar-table-cell-content {
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
    }
  }
`

export const Box = styled.div`
  /* height: 0;
  position: relative;
  top: 0; */
  user-select: none;

  .rs-picker-toggle {
    display: none;
  }

  .rs-picker-date-panel {
    height: 290px;
  }
`
