import { getCheckPickerInputCss } from '@fields/shared/StyledRsuitePickerBox'
import styled from 'styled-components'

import type { CommonPickerFieldStyleProps } from '@fields/shared/types'

export const RsuiteCheckTreePickerBox = styled.div<CommonPickerFieldStyleProps>`
  font-size: 13px !important;
  position: relative;
  user-select: none;
  width: 100%;

  * {
    ${p => p.$isReadOnly && `cursor: default !important;`}
  }

  ${p => getCheckPickerInputCss(p)}
  > .rs-picker-popup {
    border: solid 1px ${p => p.theme.color.gainsboro};
    border-radius: 0;
    padding: 0;

    ${p =>
      p.$popupWidth
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
        background-color: ${p => p.theme.color.white};
        border: solid 1px ${p => p.theme.color.lightGray};
        border-radius: 0;

        > [role='searchbox'] {
          color: ${p => p.theme.color.gunMetal};
          caret-color: ${p => p.theme.color.gunMetal};
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
            color: ${p => p.theme.color.lightGray};
          }
        }
      }
    }

    > .rs-check-tree {
      padding: 0;
      margin: 0;

      .rs-check-tree-node {
        padding: 0 !important;
        &:hover {
          background-color: ${p => p.theme.color.blueYonder25};
        }
      }
      .rs-check-tree-node-expand-icon-wrapper {
        width: 100%;
      }

      .rs-check-tree-node-custom-icon {
        margin-top: -2px;
      }

      [role='treeitem'] {
        display: flex;
        align-items: center;

        .rs-check-item {
          width: 100%;
          color: ${p => p.theme.color.gunMetal};
          line-height: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          .rs-check-item-focus {
            background-color: transparent;
          }

          &.rs-picker-select-menu-item-active {
            background-color: transparent;
            font-weight: 500;

            &:hover {
              background-color: ${p => p.theme.color.blueYonder25};
            }
          }

          &.rs-picker-select-menu-item-disabled {
            background-color: transparent;
            color: ${p => p.theme.color.lightGray};
          }
        }

        > .rs-check-item {
          /** !important because it's override by determinate checkbox **/

          &.rs-checkbox-indeterminate {
            &:hover {
              .rs-checkbox-inner {
                &:before {
                  background-color: ${p => p.theme.color.blueYonder} !important;
                  border: solid 2px ${p => p.theme.color.blueYonder} !important;
                }
              }
            }

            .rs-checkbox-inner {
              &:before {
                background-color: ${p => p.theme.color.charcoal} !important;
                border: solid 2px ${p => p.theme.color.charcoal} !important;
              }

              &:after {
                margin-left: 11px !important;
              }
            }
          }

          &.rs-checkbox-disabled {
            &:hover {
              background-color: transparent !important;
            }

            label,
            span {
              background-color: transparent !important;
              color: ${p => p.theme.color.lightGray} !important;
            }

            &:hover {
              span:before {
                background-color: ${p => p.theme.color.gainsboro} !important;
                border: solid 2px ${p => p.theme.color.lightGray} !important;
              }
            }
          }

          > .rs-checkbox-checker {
            min-height: auto;

            > label {
              color: ${p => p.theme.color.gunMetal};
              font-size: 13px !important;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding: 1px 0;

              > .rs-check-tree-node-label-content {
                background-color: initial;
                color: initial;
                padding: 3px 8px 6px 8px;
                width: 100%;
              }

              > .rs-checkbox-wrapper {
                height: auto;
                left: 14px;
                top: 7px !important;

                &:before {
                  border: none;
                }

                > .rs-checkbox-inner {
                  &:before {
                    background-color: ${p => p.theme.color.gainsboro};
                    border: solid 2px ${p => p.theme.color.lightGray};
                    border-radius: 0;
                    margin-left: 8px;
                  }

                  &:after {
                    margin-left: 13px;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: ${p => p.theme.color.blueYonder25} !important;

            > .rs-checkbox-checker {
              > label {
                color: ${p => p.theme.color.blueYonder};

                > .rs-checkbox-wrapper {
                  > .rs-checkbox-inner {
                    &:before {
                      background-color: ${p => p.theme.color.blueYonder25};
                      border: solid 2px ${p => p.theme.color.blueYonder};
                    }
                  }
                }
              }
            }
          }

          &.rs-check-item-focus {
            background-color: ${p => p.theme.color.blueYonder25} !important;

            > .rs-checkbox-checker {
              > label {
                font-weight: 400;
              }
            }
          }

          &.rs-checkbox-checked {
            &.rs-check-item-focus {
              background-color: ${p => p.theme.color.blueYonder25} !important;
            }

            > .rs-checkbox-checker {
              > label {
                color: ${p => p.theme.color.gunMetal};
                font-weight: 500;

                > .rs-checkbox-wrapper {
                  > .rs-checkbox-inner {
                    &:before {
                      background-color: ${p => p.theme.color.charcoal};
                      border: solid 2px ${p => p.theme.color.charcoal};
                    }
                  }
                }
              }
            }

            &:hover,
            &._hover {
              background-color: ${p => p.theme.color.blueYonder25};

              > .rs-checkbox-checker {
                > label {
                  color: ${p => p.theme.color.blueYonder};

                  > .rs-checkbox-wrapper {
                    > .rs-checkbox-inner {
                      &:before {
                        background-color: ${p => p.theme.color.blueYonder};
                        border: solid 2px ${p => p.theme.color.blueYonder};
                      }
                    }
                  }
                }
              }
            }
          }
        }

        /* childrens */

        &[aria-level='1'] {
          > .rs-check-item {
            > .rs-checkbox-checker {
              > label {
                > .rs-check-tree-node-label-content {
                  margin-left: 20px;
                }

                > .rs-checkbox-wrapper {
                  > .rs-checkbox-inner {
                    &:before {
                      margin-left: -8px;
                    }

                    &:after {
                      margin-left: -3px;
                    }
                  }
                }
              }
            }
          }
        }

        &[aria-level='2'] {
          > .rs-check-item {
            > .rs-checkbox-checker {
              > label {
                > .rs-check-tree-node-label-content {
                  margin-left: 45px;
                }

                > .rs-checkbox-wrapper {
                  > .rs-checkbox-inner {
                    &:before {
                      margin-left: 15px;
                    }

                    &:after {
                      margin-left: 20px;
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
