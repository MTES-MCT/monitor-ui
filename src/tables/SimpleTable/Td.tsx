import styled from 'styled-components'

import { CellLoader } from './CellLoader'

import type { TdHTMLAttributes } from 'react'

type TdProps = TdHTMLAttributes<HTMLTableCellElement> & {
  $isCenter?: boolean | undefined
  $isLoading?: boolean | undefined
}
export const Td = styled.td.attrs<TdProps, TdProps>(props => ({
  children: props.$isLoading ? <CellLoader /> : props.children
}))`
  border-bottom: 1px solid ${p => p.theme.color.lightGray};
  border-right: 1px solid ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.gunMetal};
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
  overflow: hidden;
  padding: 9px 10px;
  text-align: ${p => (p.$isCenter ? 'center' : 'left')};
  text-overflow: ellipsis;
  white-space: nowrap;

  /**
    Dirty hack to prevent 'display: inline-flex;' from breaking row height.
    This may be fixable by internal alignment cleanup in <Tag /> component.
  */
  > .Element-Tag {
    vertical-align: bottom;
  }
`
