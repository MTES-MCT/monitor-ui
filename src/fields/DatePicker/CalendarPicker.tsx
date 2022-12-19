import { useCallback, useEffect, useMemo, useRef } from 'react'
import { DatePicker as RsuiteDatePicker } from 'rsuite'
import styled from 'styled-components'

import { useForceUpdate } from '../../hooks/useForceUpdate'
import { getUtcDayjs } from '../../utils/getUtcDayjs'
import { getUtcizedDayjs } from '../../utils/getUtcizedDayjs'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'
import { RSUITE_CALENDAR_LOCALE } from '../DateRangePicker/constants'
import { getDateTupleFromDate } from '../DateRangePicker/utils'

import type { DateTuple } from '../DateRangePicker/types'
import type { MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

type CalendarPickerProps = {
  defaultValue?: Date
  isHistorical?: boolean
  isOpen: boolean
  onChange: (nextDateTuple: DateTuple) => Promisable<void>
}
export function CalendarPicker({ defaultValue, isHistorical, isOpen, onChange }: CalendarPickerProps) {
  const boxRef = useRef() as MutableRefObject<HTMLDivElement | undefined>

  const { forceUpdate } = useForceUpdate()

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

  useEffect(() => {
    // We wait for the <Box /> to render so that `boxRef` is defined
    // and can be used as a container for <RsuiteDatePicker />
    forceUpdate()
  }, [forceUpdate])

  return (
    <Box ref={boxRef as any} onClick={stopMouseEventPropagation}>
      {boxRef.current && (
        <RsuiteDatePicker
          container={boxRef.current}
          disabledDate={disabledDate}
          format="yyyy-MM-dd"
          locale={RSUITE_CALENDAR_LOCALE}
          oneTap
          onSelect={handleSelect}
          open={isOpen}
          // `defaultValue` seems to be immediatly cancelled so we come down to using a controlled `value`
          ranges={[]}
          value={defaultValue}
        />
      )}
    </Box>
  )
}

export const Box = styled.div`
  height: 0;
  position: relative;
  user-select: none;

  /*
    This is a hack to hide .rs-picker-date > .rs-picker-toggle which must exist in DOM
    since it's used as a ref by Rsuite to calculate .rs-picker-date-menu position
  */
  .rs-picker-date {
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

  .rs-picker-date-panel {
    height: 274px;
  }

  .rs-picker-date-menu {
    border: solid 1px ${p => p.theme.color.lightGray};
    border-radius: 0;
    margin-top: 4px;

    .rs-picker-date-header,
    .rs-calendar-header-time-toolbar,
    .rs-picker-toolbar {
      display: none;
    }

    .rs-calendar {
      font-size: 13px;
      height: auto !important;
      line-height: 1.4px;
      padding: 0;

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
