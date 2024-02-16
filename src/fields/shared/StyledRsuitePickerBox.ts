import styled from 'styled-components'

export const StyledRsuitePickerBox = styled.div<{
  $hasError: boolean
  $isLight: boolean
}>`
  position: relative;
  user-select: none;
  width: 100%;

  > .rs-picker-toggle-wrapper {
    border: 0;
    width: 100%;

    > [role='combobox'] {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.lightGray)} !important;
      font-size: 13px;
      height: 32px;
      line-height: 1.3846;
      padding: 5px 40px 0 8px !important;

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
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.3846;
          }

          > .rs-picker-caret-icon {
            cursor: pointer;
            height: 18px;
            top: 5.5px;
          }

          > .rs-picker-clean {
            top: 4.5px;
          }
        }
      }
    }
  }

  > .rs-picker-popup {
    border: solid 1px ${p => p.theme.color.gainsboro};
    border-radius: 0;
    /* margin-top: 6px; */
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
          font-size: 13px;
          line-height: 1;
          overflow: hidden;
          padding: 8px 8px 11px 8px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        > .rs-check-item {
          > .rs-checkbox-checker {
            min-height: auto;

            > label {
              line-height: 1;
              overflow: hidden;
              padding: 8px 8px 11px 36px;
              text-overflow: ellipsis;
              white-space: nowrap;

              > .rs-checkbox-wrapper {
                height: auto;
                left: 8px;
                top: 8px !important;
              }
            }
          }
        }
      }
    }
  }
`
