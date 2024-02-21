import styled from 'styled-components'

export const StyledRsuiteCalendarBox = styled.div`
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
    top: 0 !important;
    line-height: 1;
    padding: 0;

    > .rs-picker-daterange-panel {
      min-width: unset !important;
    }

    > .rs-stack,
    > .rs-picker-daterange-panel > .rs-stack {
      > .rs-stack-item {
        > .rs-picker-daterange-header,
        > .rs-picker-daterange-content > .rs-picker-daterange-header {
          display: none;
        }

        > .rs-picker-daterange-content > .rs-picker-daterange-calendar-group,
        > .rs-picker-daterange-content > .rs-picker-daterange-calendar-single {
          height: unset;
          min-width: unset;
        }

        > .rs-picker-daterange-content > .rs-picker-daterange-calendar-group > .rs-calendar:first-child {
          border-right: solid 1px ${p => p.theme.color.lightGray};
        }

        > .rs-calendar,
        > .rs-picker-daterange-content > .rs-picker-daterange-calendar-group > .rs-calendar,
        > .rs-picker-daterange-content > .rs-picker-daterange-calendar-single > .rs-calendar {
          border: 0;
          height: unset;
          min-height: unset;
          padding: 0;
          min-width: unset;

          /* Month selector (above table) */
          > .rs-calendar-header {
            border-bottom: solid 1px ${p => p.theme.color.lightGray};
            padding: 0;

            > .rs-calendar-header-month-toolbar {
              padding: 0 6px;

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

          /* Calendar table */
          > .rs-calendar-body {
            padding: 8px;

            > [role='grid'] {
              width: unset;

              /* Week days (table head) */
              > .rs-calendar-table-row.rs-calendar-table-header-row {
                > .rs-calendar-table-header-cell {
                  align-items: center;
                  height: 32px;
                  justify-content: center;
                  padding: 0 0 1px 0;
                  vertical-align: middle;
                  width: 32px;

                  > .rs-calendar-table-header-cell-content {
                    color: ${p => p.theme.color.slateGray};
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
                  > .rs-calendar-table-cell-content {
                    color: ${p => p.theme.color.gunMetal};
                  }
                  &.rs-calendar-table-cell-is-today > .rs-calendar-table-cell-content {
                    box-shadow: inset 0 0 0 1px ${p => p.theme.color.blueGray};
                  }
                  &:hover > .rs-calendar-table-cell-content {
                    background-color: ${p => p.theme.color.blueYonder25};
                    color: ${p => p.theme.color.blueYonder};
                  }
                  &.rs-calendar-table-cell-selected > .rs-calendar-table-cell-content {
                    background-color: ${p => p.theme.color.blueGray};
                    color: ${p => p.theme.color.white};
                  }
                  &.rs-calendar-table-cell-in-range:not(.rs-calendar-table-cell-selected)
                    > .rs-calendar-table-cell-content {
                    background-color: ${p => p.theme.color.blueGray25};
                  }
                  &.rs-calendar-table-cell-disabled > .rs-calendar-table-cell-content {
                    background-color: transparent;
                    color: ${p => p.theme.color.lightGray};
                  }
                }
              }
            }
          }

          /* Month dropdown selector (over table) */
          > .rs-calendar-month-dropdown {
            border: 0;
            bottom: 0;
            top: 33px;

            > .rs-calendar-month-dropdown-content {
              > .rs-calendar-month-dropdown-scroll {
                > div {
                  > .rs-calendar-month-dropdown-row-wrapper {
                    /* Non-WebKit Firefox Compatibility */
                    scrollbar-color: ${p => p.theme.color.lightGray};
                    scrollbar-width: thin;

                    &::-webkit-scrollbar {
                      -webkit-appearance: none;
                    }
                    &::-webkit-scrollbar:vertical {
                      width: 5px;
                    }
                    &::-webkit-scrollbar-thumb {
                      border: 0;
                      background-color: ${p => p.theme.color.lightGray};
                    }
                    &::-webkit-scrollbar-track {
                      background-color: ${p => p.theme.color.gainsboro};
                    }

                    > div {
                      > .rs-calendar-month-dropdown-row {
                        border-bottom: solid 1px ${p => p.theme.color.lightGray};
                        padding: 6.5px 0 0 46px;

                        > .rs-calendar-month-dropdown-year {
                          color: ${p => p.theme.color.gunMetal};
                          left: 7px;
                          top: 29px;

                          &.rs-calendar-month-dropdown-year-active {
                            color: ${p => p.theme.color.blueGray};
                          }
                        }

                        > .rs-calendar-month-dropdown-list {
                          min-width: unset;
                          width: 168px; /* 28px x 6 */

                          > .rs-calendar-month-dropdown-cell {
                            margin: 0 0 4px 0;

                            > .rs-calendar-month-dropdown-cell-content {
                              align-items: center;
                              border-radius: 0;
                              color: ${p => p.theme.color.gunMetal};
                              display: flex;
                              height: 28px;
                              justify-content: center;
                              padding: 0;
                              width: 28px;
                            }
                            &:hover > .rs-calendar-month-dropdown-cell-content {
                              background-color: ${p => p.theme.color.blueYonder25};
                              color: ${p => p.theme.color.blueYonder};
                            }
                            &.rs-calendar-month-dropdown-cell-active > .rs-calendar-month-dropdown-cell-content {
                              background-color: transparent;
                              box-shadow: inset 0 0 0 1px ${p => p.theme.color.blueGray};
                            }
                            &.disabled > .rs-calendar-month-dropdown-cell-content {
                              background-color: transparent;
                              color: ${p => p.theme.color.lightGray};
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        /* Submit button (below tables) */
        .rs-picker-toolbar {
          display: none;
        }
      }
    }
  }
`
