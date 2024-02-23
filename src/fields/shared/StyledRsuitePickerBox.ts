import styled from 'styled-components'

export const StyledRsuitePickerBox = styled.div<{
  $hasError: boolean
  $isLight: boolean
}>`
  font-size: 13px;
  position: relative;
  user-select: none;
  width: 100%;

  > .rs-picker-toggle-wrapper {
    border: 0;
    width: 100%;

    > [role='combobox'] {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.lightGray)} !important;
      border-radius: 0;
      font-size: 13px;
      height: 30px;
      line-height: 1.3846;
      padding: 3.5px 40px 0 8px !important;

      &:hover {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder)} !important;
      }

      &:active,
      &:focus,
      &.rs-picker-toggle-active {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray)} !important;
      }

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-value {
            color: ${p => p.theme.color.gunMetal};
            font-weight: 500;
          }

          &.rs-picker-toggle-indicator {
            > .rs-picker-toggle-placeholder {
              font-size: 13px;
              line-height: 1.3846;
            }

            > .rs-picker-caret-icon {
              cursor: pointer;
              height: 18px;
              top: 4px;
            }

            > .rs-picker-clean {
              top: 3.5px;
            }
          }
        }
      }
    }
  }

  > .rs-picker-popup {
    border: solid 1px ${p => p.theme.color.gainsboro};
    border-radius: 0;
    padding: 0;
    width: 100%;

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

    > div[role='listbox'],
    > .rs-picker-cascader-menu-items {
      padding: 0;
      margin: 0;

      /* No caret here to make it compatible with <MultiCascader /> */
      [role='option'],
      [role='treeitem'] {
        > .rs-picker-select-menu-item {
          color: ${p => p.theme.color.gunMetal};
          font-weight: 500;
          line-height: 1;
          overflow: hidden;
          padding: 8px 8px 11px 8px;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover {
            background-color: ${p => p.theme.color.blueYonder25};
            color: ${p => p.theme.color.blueYonder};
          }

          &.rs-picker-select-menu-item-active {
            background-color: transparent;
            font-weight: 700;

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
          > .rs-checkbox-checker {
            min-height: auto;

            > label {
              color: ${p => p.theme.color.gunMetal};
              font-weight: 500;
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
                    background-color: ${p => p.theme.color.gainsboro};
                    border: solid 2px ${p => p.theme.color.lightGray};
                    border-radius: 0;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: ${p => p.theme.color.lightGray};

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

          &.rs-checkbox-checked {
            background-color: transparent;

            > .rs-checkbox-checker {
              > label {
                color: ${p => p.theme.color.gunMetal};
                font-weight: 700;

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

            &:hover {
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
      }
    }
  }
`
