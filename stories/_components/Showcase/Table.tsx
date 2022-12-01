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
      padding: 0 1.75rem 0 1.75rem;
      text-align: left;
    }
  }
  > tbody > tr {
    > th {
      border-right: solid 1px ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.slateGray};
      font-weight: 400;
      padding: 0.75rem 1.75rem 0 0;
      text-align: left;
    }
    > td {
      padding: 0.75rem 1.75rem 0 1.75rem;
    }
  }
`
