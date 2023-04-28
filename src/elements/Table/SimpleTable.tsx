import styled from 'styled-components'

const StyledTable = styled.table`
  width: 100%;
  table-layout: auto;
  overflow: auto;
`
const StyledHead = styled.thead`
  position: sticky;
  top: 0;
`

const StyledSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledTh = styled.th`
  background-color: ${p => p.theme.color.gainsboro};
  border: 1px solid ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.slateGray};
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const StyledBodyTr = styled.tr`
  :hover {
    background-color: ${p => p.theme.color.blueYonder[25]};
  }
  td:first-child,
  td:nth-child(2) {
    width: 180px;
  }

  td:nth-child(3) {
    width: 90px;
  }
  td:nth-child(4),
  td:nth-child(7) {
    max-width: 200px;
  }

  td:nth-child(5),
  td:nth-child(6),
  td:nth-child(8) {
    width: 100px;
  }

  td:nth-child(9) {
    width: 120px;
  }
  td:nth-child(10) {
    width: 60px;
  }
  td:nth-child(11) {
    width: 160px;
    text-align: center;
  }
`

const StyledTd = styled.td`
  font-size: 13px;
  font-weight: 500;
  color: ${p => p.theme.color.gunMetal};
  text-align: left;
  border: 1px solid ${p => p.theme.color.lightGray};
  overflow: hidden;
  padding: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const SimpleTable = {
  StyledBodyTr,
  StyledHead,
  StyledSortContainer,
  StyledTable,
  StyledTd,
  StyledTh
}
