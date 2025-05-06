import styled, { css } from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './utils'

import type { CommonPickerFieldStyleProps } from './types'

export const getCheckPickerInputCss = (p: CommonPickerFieldStyleProps) => css`
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
            color: ${p.theme.color.gunMetal};
            font-weight: 500;

            > .rs-picker-value-list {
              > .rs-picker-value-separator {
                margin: 0 4px 0 0 !important;
              }
            }

            /* Counter badge, if any */
            > .rs-picker-value-count {
              align-items: center;
              background-color: ${p.theme.color.charcoal};
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
    border: solid 1px ${p.theme.color.gainsboro};
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

    > .rs-search-box {
      padding: 8px;

      > .rs-input-group {
        background-color: ${p.theme.color.white};
        border: solid 1px ${p.theme.color.lightGray};
        border-radius: 0;

        > [role='searchbox'] {
          color: ${p.theme.color.gunMetal};
          caret-color: ${p.theme.color.gunMetal};
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
            color: ${p.theme.color.lightGray};
          }
        }
      }
    }

    > div[role='listbox'],
    > .rs-picker-cascader-menu-items {
      padding: 0;
      margin: 0;

      /* No caret here to make it compatible with <MultiCascader /> */
      [role='option'],
      [role='treeitem'] {
        > .rs-picker-select-menu-item {
          color: ${p.theme.color.gunMetal};
          line-height: 1;
          overflow: hidden;
          padding: 8px 8px 11px 8px;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
            background-color: ${p.theme.color.blueYonder25};
            color: ${p.theme.color.blueYonder};
          }

          &.rs-picker-select-menu-item-active {
            background-color: transparent;
            font-weight: 500;

            &:hover {
              background-color: ${p.theme.color.blueYonder25};
            }
          }

          &.rs-picker-select-menu-item-disabled {
            background-color: transparent;
            color: ${p.theme.color.lightGray};
          }
        }

        > .rs-check-item {
          > .rs-checkbox-checker {
            min-height: auto;

            > label {
              color: ${p.theme.color.gunMetal};
              font-size: 13px !important;
              line-height: 1;
              overflow: hidden;
              padding: 8.5px 8px 10.5px 36px;
              text-overflow: ellipsis;
              white-space: nowrap;

              > .rs-checkbox-wrapper {
                height: auto;
                left: 8px;
                top: 8px !important;

                > .rs-checkbox-inner {
                  &:before {
                    background-color: ${p.theme.color.gainsboro};
                    border: solid 2px ${p.theme.color.lightGray};
                    border-radius: 0;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: ${p.theme.color.blueYonder25};

            > .rs-checkbox-checker {
              > label {
                color: ${p.theme.color.blueYonder};

                > .rs-checkbox-wrapper {
                  > .rs-checkbox-inner {
                    &:before {
                      background-color: ${p.theme.color.blueYonder25};
                      border: solid 2px ${p.theme.color.blueYonder};
                    }
                  }
                }
              }
            }
          }

          &.rs-check-item-focus {
            background-color: ${p.theme.color.blueYonder25};

            > .rs-checkbox-checker {
              > label {
                font-weight: 400;
              }
            }
          }

          &.rs-checkbox-checked {
            background-color: transparent;

            &.rs-check-item-focus {
              background-color: ${p.theme.color.blueYonder25};
            }

            > .rs-checkbox-checker {
              > label {
                color: ${p.theme.color.gunMetal};
                font-weight: 500;

                > .rs-checkbox-wrapper {
                  > .rs-checkbox-inner {
                    &:before {
                      background-color: ${p.theme.color.charcoal};
                      border: solid 2px ${p.theme.color.charcoal};
                    }
                  }
                }
              }
            }

            &:hover,
            &._hover {
              background-color: ${p.theme.color.blueYonder25};

              > .rs-checkbox-checker {
                > label {
                  color: ${p.theme.color.blueYonder};

                  > .rs-checkbox-wrapper {
                    > .rs-checkbox-inner {
                      &:before {
                        background-color: ${p.theme.color.blueYonder};
                        border: solid 2px ${p.theme.color.blueYonder};
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

  ${p => getCheckPickerInputCss(p)}

  ${p => getCheckPickerMenuCss(p)}
`
