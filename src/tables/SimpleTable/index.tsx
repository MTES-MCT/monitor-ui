import classnames from 'classnames'
import styled from 'styled-components'

import { CellLoader } from './CellLoader'
import { Td } from './Td'

import type { TableHTMLAttributes } from 'react'

const Table = styled.table.attrs<TableHTMLAttributes<HTMLTableElement>>(props => ({
  className: classnames('Table-SimpleTable', props.className)
}))`
  border-collapse: separate;
  overflow: auto;
  table-layout: auto;
`

const Head = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;

  > th:first-child {
    border-left: 1px solid ${p => p.theme.color.lightGray};
  }
`

const Th = styled.th<{
  $width?: number | undefined
}>`
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
  ${p => !!p.$width && `width: ${p.$width}px;`}
  white-space: nowrap;
`

const SortContainer = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  justify-content: space-between;

  &.cursor-pointer {
    cursor: pointer;
  }
`

const BodyTr = styled.tr`
  &:hover {
    > td {
      background-color: ${p => p.theme.color.blueYonder25};
    }
  }
  > td:first-child {
    border-left: 1px solid ${p => p.theme.color.lightGray};
  }
`

export const SimpleTable = {
  BodyTr,
  CellLoader,
  Head,
  SortContainer,
  Table,
  Td,
  Th
}
