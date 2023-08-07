import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  table-layout: auto;
  overflow: auto;
  border-collapse: separate;
  border-spacing: 0 5px;
`
const Head = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;

  th:first-child {
    border-left: 1px solid ${p => p.theme.color.lightGray};
  }
  th:last-child {
    border-right: 1px solid ${p => p.theme.color.lightGray};
  }
`

const SortContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 8px;
  align-items: center;
  cursor: default;

  &.cursor-pointer {
    cursor: pointer;
  }
`
const Th = styled.th`
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};

  color: ${p => p.theme.color.slateGray};
  font-size: 13px;
  font-weight: 500;
  padding: 11px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const BodyTr = styled.tr`
  line-height: 1;
  :hover {
    background-color: ${p => p.theme.color.blueYonder[25]};
  }
  td:first-child {
    border-left: 1px solid ${p => p.theme.color.lightGray};
  }
  td:last-child {
    border-right: 1px solid ${p => p.theme.color.lightGray};
  }
`

const Td = styled.td<{ $isCenter: boolean }>`
  background-color: ${p => p.theme.color.cultured};
  font-size: 13px;
  font-weight: 500;
  color: ${p => p.theme.color.gunMetal};
  text-align: ${p => (p.$isCenter ? 'center' : 'left')};
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  overflow: hidden;
  padding: 4px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const TableWithRowSelection = {
  BodyTr,
  Head,
  SortContainer,
  Table,
  Td,
  Th
}
