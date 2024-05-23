import styled from 'styled-components'

import { RowCheckbox } from './RowCheckbox'
import { SimpleTable } from '../SimpleTable'

const Table = styled(SimpleTable.Table)`
  border-collapse: separate;
  border-spacing: 0 5px;
  table-layout: fixed;
`

const Head = styled(SimpleTable.Head)`
  > th:last-child {
    border-right: 1px solid ${p => p.theme.color.lightGray};
  }
`

const Th = styled(SimpleTable.Th)`
  background-color: ${p => p.theme.color.white};
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  border-right: none;
  padding: 2px 16px;
`

const SortContainer = styled(SimpleTable.SortContainer)`
  gap: 8px;
  justify-content: start;
`

const BodyTr = styled(SimpleTable.BodyTr)<{ $isHighlighted?: boolean }>`
  > td:first-child {
    border-left: ${p =>
      p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
  }
  > td:last-child {
    border-right: ${p =>
      p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
    overflow: visible;
  }
`

const Td = styled(SimpleTable.Td)<{
  $hasRightBorder: boolean
  $isHighlighted?: boolean
  // TODO This should be removed, a table column width should only be set via its `th` width.
  /** @deprecated Will be removed in the next major version. Use `Td.$width` instead to set columns width. */
  $width?: number | undefined
}>`
  background-color: ${p => p.theme.color.cultured};
  border-bottom: ${p =>
    p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
  border-right: none;
  border-right: ${p => (p.$hasRightBorder ? `1px solid ${p.theme.color.lightGray}` : '')};
  border-top: ${p =>
    p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
  padding: 4px 16px;
  width: ${p => p.$width}px;
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
