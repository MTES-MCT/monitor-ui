import styled from 'styled-components'

export const Table = styled.table`
  font-size: 13px;

  > thead > tr {
    > td {
      border-right: solid 1px ${p => p.theme.color.lightGray};
    }
    > th {
      color: ${p => p.theme.color.gunMetal};
      font-weight: 500;
      padding: 0 28px 0 28px;
      text-align: left;
    }
  }
  > tbody > tr {
    > th {
      border-right: solid 1px ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.slateGray};
      font-weight: 400;
      padding: 12px 28px 0 0;
      text-align: left;
    }
    > td {
      padding: 12px 28px 0 28px;
    }
  }
`
