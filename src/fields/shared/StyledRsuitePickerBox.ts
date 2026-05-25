import { THEME } from '@theme'
import styled, { css } from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './utils'

import type { CommonPickerFieldStyleProps } from './types'

const getSearchInputCss = () => css`
  padding: 8px;

  > .rs-input-group {
    background-color: ${THEME.color.white};
    border: solid 1px ${THEME.color.lightGray};
    border-radius: 0;

    > [role='searchbox'] {
      color: ${THEME.color.gunMetal};
      caret-color: ${THEME.color.gunMetal};
      font-size: 13px;
      line-height: 1;
      padding: 1px 8px 5px 8px;

      &::placeholder {
        color: transparent;
      }
    }

    > .rs-input-group-addon {
      line-height: 1;
      padding: 4px 8px 4px 4px;

      > svg {
        color: ${THEME.color.lightGray};
      }
    }
  }
`
export const getCheckPickerInputCss = () => css`
  > .rs-picker-toggle-wrapper,
  > .rs-auto-complete {
    background-color: transparent;
    border: 0;
    /* Remove focus ring (TagPicker) */
    box-shadow: none;
    width: 100%;

    &.rs-picker-disabled {
      opacity: 1;
    }

    > [role='combobox'] {
      background-color: ${getFieldBackgroundColorFactory()} !important;
      border: solid 1px ${getFieldBorderColorFactoryForState('default')} !important;
      border-radius: 0;
      /* Remove focus ring (Select) */
      box-shadow: none;
      font-size: 13px;
      min-height: 30px;
      line-height: 1.3846;
      padding: 3.5px 40px 3.5px 8px !important;

      &:hover,
      &._hover {
        border: solid 1px ${getFieldBorderColorFactoryForState('hover')} !important;

        > .rs-stack {
          > .rs-stack-item {
            /* Placeholder */
            > .rs-picker-toggle-placeholder {
              color: ${getFieldPlaceholderColorFactoryForState('hover')};
            }
          }
        }
      }

      &:active,
      &._active,
      &:focus,
      &._focus,
      &.rs-picker-toggle-active {
        border: solid 1px ${getFieldBorderColorFactoryForState('focus')} !important;

        > .rs-stack {
          > .rs-stack-item {
            /* Placeholder */
            > .rs-picker-toggle-placeholder {
              color: ${getFieldPlaceholderColorFactoryForState('focus')};
            }
          }
        }
      }
      &.rs-picker-toggle-active {
        > .rs-stack {
          > .rs-stack-item {
            > .rs-picker-caret-icon {
              rotate: 180deg;
              transition: rotate 100ms linear;
            }
          }
        }
      }

      > .rs-stack {
        > .rs-stack-item {
          /* Placeholder */
          > .rs-picker-toggle-placeholder {
            color: ${getFieldPlaceholderColorFactoryForState('default')};
          }

          /* Selected value(s) */
          > .rs-picker-toggle-value {
            color: ${THEME.color.gunMetal};
            font-weight: 500;

            > .rs-picker-value-list {
              > .rs-picker-value-separator {
                margin: 0 4px 0 0 !important;
              }
            }

            /* Counter badge, if any */
            > .rs-picker-value-count {
              align-items: center;
              background-color: ${THEME.color.charcoal};
              border-radius: 50%;
              display: flex;
              font-family: 'Open Sans', sans-serif !important;
              font-size: 12px !important;
              font-weight: 600;
              min-height: 21px;
              justify-content: center;
              line-height: 1;
              margin: 0 0 0 4px;
              padding: 0;
              min-width: 21px;
            }
          }

          &.rs-picker-toggle-indicator {
            > .rs-picker-toggle-placeholder {
              font-size: 13px;
              line-height: 1.3846;
            }

            > .rs-picker-caret-icon {
              height: 18px;
              top: 4px;
              transition: rotate 100ms linear;
            }

            > .rs-picker-clean {
              top: 3.5px;
            }
          }
        }
      }
    }
  }
`
export const getCheckPickerMenuCss = (p: CommonPickerFieldStyleProps) => css`
  > .rs-picker-popup {
    border: solid 1px ${THEME.color.gainsboro};
    border-radius: 0;
    padding: 0;

    ${p.$popupWidth
      ? `
      max-width: ${p.$popupWidth}px;
      min-width: ${p.$popupWidth}px !important;
      width: ${p.$popupWidth}px;
      `
      : `
      width: 100%;
    `};

    > .rs-cascade-search-view {
      > .rs-search-box {
        ${getSearchInputCss()}
      }
    }
    > .rs-search-box {
      ${getSearchInputCss()}
    }

    > div[role='listbox'],
    > .rs-cascade-tree-items {
      padding: 0;
      margin: 0;

      /* No caret here to make it compatible with <MultiCascader /> */
      [role='option'],
      [role='treeitem'] {
        > .rs-picker-select-menu-item {
          color: ${THEME.color.gunMetal};
          line-height: 1;
          overflow: hidden;
          padding: 8px 8px 11px 8px;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
            background-color: ${THEME.color.blueYonder25};
            color: ${THEME.color.blueYonder};
          }

          &.rs-picker-select-menu-item-active {
            background-color: transparent;
            font-weight: 500;

            &:hover {
              background-color: ${THEME.color.blueYonder25};
            }
          }

          &.rs-picker-select-menu-item-disabled {
            background-color: transparent;
            color: ${THEME.color.lightGray};
          }
        }

        > .rs-check-item {
          > .rs-checkbox-checker {
            min-height: auto;

            > label {
              color: ${THEME.color.gunMetal};
              font-size: 13px !important;
              line-height: 1;
              overflow: hidden;
              padding: 8.5px 8px 10.5px 36px;
              text-overflow: ellipsis;
              white-space: nowrap;

              > .rs-checkbox-control {
                height: auto;
                left: 8px;
                top: 8px !important;

                > .rs-checkbox-inner {
                  &:before {
                    background-color: ${THEME.color.gainsboro};
                    border: solid 2px ${THEME.color.lightGray};
                    border-radius: 0;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: ${THEME.color.blueYonder25};

            > .rs-checkbox-checker {
              > label {
                color: ${THEME.color.blueYonder};

                > .rs-checkbox-control {
                  > .rs-checkbox-inner {
                    &:before {
                      background-color: ${THEME.color.blueYonder25};
                      border: solid 2px ${THEME.color.blueYonder};
                    }
                  }
                }
              }
            }
          }

          &.rs-check-item-focus {
            background-color: ${THEME.color.blueYonder25};

            > .rs-checkbox-checker {
              > label {
                font-weight: 400;
              }
            }
          }

          &.rs-checkbox-checked {
            background-color: transparent;

            &.rs-check-item-focus {
              background-color: ${THEME.color.blueYonder25};
            }

            > .rs-checkbox-checker {
              > label {
                color: ${THEME.color.gunMetal};
                font-weight: 500;

                > .rs-checkbox-control {
                  > .rs-checkbox-inner {
                    &:before {
                      background-color: ${THEME.color.charcoal};
                      border: solid 2px ${THEME.color.charcoal};
                    }
                  }
                }
              }
            }

            &:hover,
            &._hover {
              background-color: ${THEME.color.blueYonder25};

              > .rs-checkbox-checker {
                > label {
                  color: ${THEME.color.blueYonder};

                  > .rs-checkbox-control {
                    > .rs-checkbox-inner {
                      &:before {
                        background-color: ${THEME.color.blueYonder};
                        border: solid 2px ${THEME.color.blueYonder};
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
`
export const StyledRsuitePickerBox = styled.div<CommonPickerFieldStyleProps>`
  font-size: 13px !important;
  position: relative;
  user-select: none;
  width: 100%;

  * {
    ${p => p.$isReadOnly && `cursor: default !important;`}
  }

  ${getCheckPickerInputCss()}

  ${p => getCheckPickerMenuCss(p)}
`
