import styled, { css } from 'styled-components'

import type { HTMLAttributes } from 'react'

export type TagGroupProps = HTMLAttributes<HTMLDivElement> & {
  isMultiline: boolean
}
export const TagGroup = styled.div<{
  isMultiline?: boolean
}>`
  align-items: center;
  display: flex;

  ${p =>
    !p.isMultiline &&
    css`
      > span:not(:first-child) {
        margin-left: 8px;
      }
    `}

  ${p =>
    p.isMultiline &&
    css`
      flex-wrap: wrap;

      > span {
        margin: 0 8px 8px 0;
      }
    `}
`
