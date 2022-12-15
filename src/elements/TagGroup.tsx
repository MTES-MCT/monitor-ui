import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type TagGroupProps = HTMLAttributes<HTMLDivElement>
export const TagGroup = styled.div`
  display: flex;

  > span:not(:first-child) {
    margin-left: 8px;
  }
`
