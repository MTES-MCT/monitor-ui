import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  table-layout: auto;
  overflow: auto;
  border-collapse: separate;
`
const Head = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;

  th:first-child {
    border-left: 1px solid ${p => p.theme.color.lightGray};
  }
`

const SortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  &.cursor-pointer {
    cursor: pointer;
  }
`
const Th = styled.th`
  background-color: ${p => p.theme.color.gainsboro};
  border-top: 1px solid ${p => p.theme.color.lightGray};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  border-right: 1px solid ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.slateGray};
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const BodyTr = styled.tr`
  :hover {
    > td {
      background-color: ${p => p.theme.color.blueYonder25};
    }
  }
  td:first-child {
    border-left: 1px solid ${p => p.theme.color.lightGray};
  }
`

const Td = styled.td<{ $isCenter?: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: ${p => p.theme.color.gunMetal};
  text-align: ${p => (p.$isCenter ? 'center' : 'left')};
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  border-right: 1px solid ${p => p.theme.color.lightGray};
  overflow: hidden;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const SimpleTable = {
  BodyTr,
  Head,
  SortContainer,
  Table,
  Td,
  Th
}
