import { getCheckPickerInputCss } from '@fields/shared/StyledRsuitePickerBox'
import styled from 'styled-components'

import type { CommonPickerFieldStyleProps } from '@fields/shared/types'

interface RsuiteCheckTreePickerBoxProps extends CommonPickerFieldStyleProps {
  $isSelect?: boolean
  $isThreeLevels?: boolean
}

export const RsuiteCheckTreePickerBox = styled.div<RsuiteCheckTreePickerBoxProps>`
  position: relative;
  user-select: none;
  width: 100%;

  * {
    ${p => p.$isReadOnly && `cursor: default !important;`}
  }

  mark {
    background-color: ${p => p.theme.color.goldenPoppy25};
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

    .rs-check-tree {
      .rs-search-box {
        padding: 8px;

        .rs-input-group {
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
    }

    .rs-check-tree-view {
      padding: 2px 0;

      .rs-check-tree-node-children
        .rs-check-tree-node-children
        .rs-check-tree-group:has([role='treeitem'][aria-level='3']) {
        ${p => p.$isSelect && 'padding-left: 39px;'}
      }

      .rs-check-tree-node {
        ${p => p.$isSelect && `&:has(.rs-checkbox-checked) { background-color: ${p.theme.color.blueYonder25}; }`}

        &:hover {
          background-color: ${p => p.theme.color.blueYonder25};
        }
      }

      .rs-check-tree-node-focus {
        background-color: ${p => p.theme.color.blueYonder25} !important;
      }

      .rs-tree-node-toggle {
        width: 22px;
        ${p => p.$isSelect && 'padding-left: 4px;'}
      }

      .rs-tree-node-toggle-placeholder {
        width: 12px;
      }

      .rs-check-tree-node:has([aria-level='3']) .rs-tree-node-toggle-placeholder {
        ${p => p.$isSelect && 'width: 0;'}
      }

      [role='treeitem'] {
        .rs-check-item {
          color: ${p => p.theme.color.gunMetal};
          line-height: 1;

          .rs-checkbox-checker {
            > label {
              padding: 2px;
            }
          }

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
                ${p => p.$isSelect && 'display: none;'}
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
            > label {
              font-size: 13px !important;

              > .rs-checkbox-label {
                color: ${p => p.theme.color.gunMetal};
              }

              > .rs-checkbox-control {
                height: auto;
                left: 0;

                > .rs-checkbox-inner {
                  &:before {
                    background-color: ${p => p.theme.color.gainsboro};
                    border: solid 2px ${p => p.theme.color.lightGray};
                    border-radius: 0;
                  }

                  &:after {
                    margin-left: 5px;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: ${p => p.theme.color.blueYonder25} !important;
            color: ${p => p.theme.color.blueYonder};

            > .rs-checkbox-checker {
              > label {
                color: ${p => p.theme.color.blueYonder};

                > .rs-checkbox-control {
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

                > .rs-checkbox-control {
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

                  > .rs-checkbox-control {
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
          width: 90%;

          > .rs-check-item {
            > .rs-checkbox-checker {
              > label {
                .rs-checkbox-label {
                  width: 100%;
                  padding-left: ${p => p.$isSelect ? 14 : 20}px;
                }
              }
            }
          }
        }

        &[aria-level='2'] {
          margin-left: 8px;
          width: 90%;

          > .rs-check-item {
            > .rs-checkbox-checker {
              > label {
                .rs-checkbox-label {
                  width: 100%;
                  padding-left: ${p => p.$isSelect ? 8 : 20}px;
                  ${p => p.$isThreeLevels && 'font-weight: 600;'}
                }

                > .rs-checkbox-control {
                  ${p => p.$isSelect && 'display: none;'}
                }
              }
            }
          }
        }

        &[aria-level='3'] {
          ${p => (p.$isSelect ? 'margin-left: 0;' : 'margin-left: 16px;')}
          width: ${p => (p.$isSelect ? '100%' : '90%')};

          > .rs-check-item {
            > .rs-checkbox-checker {
              > label {
                .rs-checkbox-label {
                  width: 100%;
                  ${p => (p.$isSelect ? 'padding-left: 0;' : 'padding-left: 20px;')}
                }

                > .rs-checkbox-control {
                  ${p => p.$isSelect && 'display: none;'}
                }
              }
            }
          }
        }
      }
    }
  }
`
