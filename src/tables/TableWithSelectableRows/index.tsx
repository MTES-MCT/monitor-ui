import styled, { css } from 'styled-components'

import { RowCheckbox } from './RowCheckbox'
import { SimpleTable } from '../SimpleTable'

const Table = styled(SimpleTable.Table)<{
  $withRowCheckbox?: boolean
}>`
  border-collapse: separate;
  border-spacing: 0 5px;
  table-layout: fixed;

  ${p =>
    !!p.$withRowCheckbox &&
    css`
      > thead > tr > th:first-child {
        padding: 0 0 0 8px;

        > .rs-checkbox {
          > .rs-checkbox-checker {
            > label {
              > .rs-checkbox-wrapper {
                left: -8px;
              }
            }
          }
        }
      }

      > tbody > tr > td:first-child {
        padding: 0 0 0 8px;
      }
    `}
`

const Head = styled(SimpleTable.Head)`
  > tr {
    > th {
      border-bottom: 1px solid ${p => p.theme.color.lightGray};
      border-right: none;
      border-top: 1px solid ${p => p.theme.color.lightGray};

      &:first-child {
        border-left: 1px solid ${p => p.theme.color.lightGray};
      }

      &:last-child {
        border-right: 1px solid ${p => p.theme.color.lightGray};
      }
    }
  }
`

const Th = styled(SimpleTable.Th)`
  background-color: ${p => p.theme.color.white};
  line-height: 22px;
  padding: 9px 16px;
`

const SortContainer = styled(SimpleTable.SortContainer)`
  gap: 8px;
  justify-content: start;
`

const BodyTr = styled(SimpleTable.BodyTr)<{
  $isHighlighted?: boolean
}>`
  > td {
    border-bottom: 1px solid ${p => (p.$isHighlighted ? p.theme.color.blueGray : p.theme.color.lightGray)};
    border-right: none;
    border-top: 1px solid ${p => (p.$isHighlighted ? p.theme.color.blueGray : p.theme.color.lightGray)};
    ${p =>
      !!p.$isHighlighted &&
      `box-shadow: 0 -1px 0 ${p.theme.color.blueGray} inset, 0 1px 0 ${p.theme.color.blueGray} inset;`}

    &:first-child {
      border-left: 1px solid ${p => (p.$isHighlighted ? p.theme.color.blueGray : p.theme.color.lightGray)};
      ${p =>
        !!p.$isHighlighted &&
        `box-shadow: 0 -1px 0 ${p.theme.color.blueGray} inset, 0 1px 0 ${p.theme.color.blueGray} inset, 1px 0 0 ${p.theme.color.blueGray} inset;`}
    }

    &:last-child {
      border-right: 1px solid ${p => (p.$isHighlighted ? p.theme.color.blueGray : p.theme.color.lightGray)};
      ${p =>
        !!p.$isHighlighted &&
        `box-shadow: 0 -1px 0 ${p.theme.color.blueGray} inset, 0 1px 0 ${p.theme.color.blueGray} inset, -1px 0 0 ${p.theme.color.blueGray} inset;`}
      overflow: visible;
    }
  }
`

const Td = styled(SimpleTable.Td)<{
  $hasRightBorder?: boolean
}>`
  background-color: ${p => p.theme.color.cultured};
  ${p => !!p.$hasRightBorder && `border-right: 1px solid ${p.theme.color.lightGray} !important;`}
  padding: 9px 16px;
`

export const TableWithSelectableRows = {
  BodyTr,
  CellLoader: SimpleTable.CellLoader,
  Head,
  RowCheckbox,
  SortContainer,
  Table,
  Td,
  Th
}
