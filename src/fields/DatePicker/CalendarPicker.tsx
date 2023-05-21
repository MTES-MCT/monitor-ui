import { useCallback, useEffect, useMemo, useRef } from 'react'
import { DatePicker as RsuiteDatePicker } from 'rsuite'
import styled from 'styled-components'

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
  const boxRef = useRef<HTMLDivElement>()

  const { forceUpdate } = useForceUpdate()

  const utcTodayAsDayjs = useMemo(() => customDayjs().utc().endOf('day'), [])
  const controlledValue = useMemo(() => (value ? getLocalizedDayjs(value).toDate() : undefined), [value])
  const shouldDisableDate = useMemo(
    () => (date?: Date) => date && isHistorical ? getUtcizedDayjs(date).isAfter(utcTodayAsDayjs) : false,
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
    <Box ref={boxRef as any} onClick={stopMouseEventPropagation}>
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
      box-shadow: none;
      padding: 0;

      * {
        display: none;
      }
    }
  }

  .rs-picker-date-menu {
    box-shadow: inset 0px 0px 0px 1px ${p => p.theme.color.lightGray};
    border-radius: 0;
    margin-top: 2px;

    .rs-picker-date-header,
    .rs-calendar-header-time-toolbar,
    .rs-picker-toolbar {
      display: none;
    }

    .rs-calendar {
      border: 0;
      font-size: 13px;
      height: auto !important;
      line-height: 1.3846;
      padding: 0;

      > .rs-calendar-header {
        border-bottom: solid 1px ${p => p.theme.color.lightGray};
        padding: 4px 0;

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
`
