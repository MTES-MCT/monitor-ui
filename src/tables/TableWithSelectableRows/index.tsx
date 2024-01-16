import styled from 'styled-components'

import { RowCheckbox } from './RowCheckbox'
import { SimpleTable } from '../SimpleTable'

export { RowCheckbox }

const Table = styled(SimpleTable.Table)`
  border-collapse: separate;
  border-spacing: 0 5px;
  table-layout: fixed;
`
const Head = styled(SimpleTable.Head)`
  th:last-child {
    border-right: 1px solid ${p => p.theme.color.lightGray};
  }
`

const SortContainer = styled(SimpleTable.SortContainer)`
  justify-content: start;
  gap: 8px;
`
const Th = styled(SimpleTable.Th)<{ $width: number }>`
  background-color: ${p => p.theme.color.white};
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  border-right: none;
  padding: 2px 16px;
  width: ${p => p.$width}px;
`

const BodyTr = styled(SimpleTable.BodyTr)<{ $isHighlighted?: boolean }>`
  td:first-child {
    border-left: ${p =>
      p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
  }
  td:last-child {
    border-right: ${p =>
      p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
    overflow: visible;
  }
`

const Td = styled(SimpleTable.Td)<{ $hasRightBorder: boolean; $isHighlighted?: boolean; $width: number }>`
  background-color: ${p => p.theme.color.cultured};
  border-top: ${p =>
    p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
  border-bottom: ${p =>
    p.$isHighlighted ? `2px solid ${p.theme.color.blueGray}` : `1px solid ${p.theme.color.lightGray}`};
  border-right: none;
  padding: 4px 16px;
  border-right: ${p => (p.$hasRightBorder ? `1px solid ${p.theme.color.lightGray}` : '')};
  width: ${p => p.$width}px;
`

export const TableWithSelectableRows = {
  BodyTr,
  Head,
  RowCheckbox,
  SortContainer,
  Table,
  Td,
  Th
}
