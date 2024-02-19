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
    <Box ref={boxRef} className="Field-DatePicker__CalendarPicker" onClick={stopMouseEventPropagation}>
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
  position: relative;
  user-select: none;

  > .rs-picker {
    display: none;
  }

  > .rs-picker-popup {
    border: solid 1px ${p => p.theme.color.lightGray};
    border-radius: 0;
    font-size: 13px;
    left: 0 !important;
    line-height: 1;
    padding: 0;

    > .rs-stack {
      > .rs-stack-item {
        .rs-picker-date-header,
        .rs-calendar-header-time-toolbar,
        .rs-picker-toolbar {
          display: none;
        }

        .rs-calendar {
          border: 0;
          min-height: auto;
          padding: 0;
          min-width: auto;

          /* Month selector (above table) */
          > .rs-calendar-header {
            border-bottom: solid 1px ${p => p.theme.color.lightGray};
            padding: 0;

            > .rs-calendar-header-month-toolbar {
              > .rs-calendar-header-backward {
                color: ${p => p.theme.color.slateGray};
                padding: 5.5px 6px 6.5px;
              }

              > .rs-calendar-header-title {
                color: ${p => p.theme.color.slateGray};
                font-size: 13px;
                font-weight: 500;
                padding: 6.5px 0 7.5px;
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
                padding: 5.5px 6px 6.5px;
              }
            }
          }

          > .rs-calendar-body {
            padding: 0;

            > [role='grid'] {
              /* Week days (table head) */
              width: auto;

              > .rs-calendar-table-row.rs-calendar-table-header-row {
                > .rs-calendar-table-header-cell {
                  align-items: center;
                  height: 32px;
                  justify-content: center;
                  padding: 0 0 1px 0;
                  vertical-align: middle;
                  width: 32px;

                  > span {
                    padding: 0;
                  }
                }
              }

              /* Day picker (table body) */
              > .rs-calendar-table-row:not(.rs-calendar-table-header-row) {
                > .rs-calendar-table-cell {
                  height: 32px;
                  padding: 0;
                  width: 32px;

                  /* &.rs-calendar-table-cell-in-range:before {
                    background-color: ${p => p.theme.color.blueGray25};
                    height: 33px;
                    margin-top: 0;
                  } */

                  > .rs-calendar-table-cell-content {
                    align-items: center;
                    border-radius: 0;
                    display: flex;
                    height: 32px;
                    justify-content: center;
                    padding: 0;
                    width: 32px;

                    > span {
                      padding: 0 0 2px 0;
                    }
                  }
                  /* &:hover .rs-calendar-table-cell-content {
                    background-color: ${p => p.theme.color.blueYonder25};
                    color: ${p => p.theme.color.blueYonder};
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
                    background-color: ${p => p.theme.color.blueGray};
                  } */
                }
              }
            }
          }

          > .rs-calendar-month-dropdown {
            .rs-calendar-month-dropdown-year {
              color: ${p => p.theme.color.slateGray};

              &.rs-calendar-month-dropdown-year-active {
                color: ${p => p.theme.color.blueYonder};
              }
            }

            .rs-calendar-month-dropdown-cell {
              > .rs-calendar-month-dropdown-cell-content {
                border-radius: 0 !important;
                color: ${p => p.theme.color.gunMetal};
                display: inline-flex;
                height: 32px;
                justify-content: center;
                line-height: 1;
                width: 32px;
              }
              &:hover > .rs-calendar-month-dropdown-cell-content {
                background-color: ${p => p.theme.color.blueYonder25};
                color: ${p => p.theme.color.blueYonder};
              }
              &.rs-calendar-month-dropdown-cell-active > .rs-calendar-month-dropdown-cell-content {
                background-color: ${p => p.theme.color.blueGray};
                color: ${p => p.theme.color.white};
              }
            }
          }
        }
      }
    }
  }
`
