import styled from 'styled-components'

import { RowCheckbox } from './RowCheckbox'
import { SimpleTable } from '../SimpleTable'

export { RowCheckbox }

const Table = styled(SimpleTable.Table)`
  border-collapse: separate;
  border-spacing: 0 5px;
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
const Th = styled(SimpleTable.Th)`
  background-color: ${p => p.theme.color.white};
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  border-right: none;
`

const BodyTr = styled(SimpleTable.BodyTr)`
  td:last-child {
    border-right: 1px solid ${p => p.theme.color.lightGray};
  }
`

const Td = styled(SimpleTable.Td)`
  background-color: ${p => p.theme.color.cultured};
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-right: none;
  padding: 4px 10px;
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
