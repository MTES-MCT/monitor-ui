import classnames from 'classnames'
import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type TagGroupProps = HTMLAttributes<HTMLDivElement>
export const TagGroup = styled.div.attrs<TagGroupProps, TagGroupProps>(props => ({
  className: classnames('Element-TagGroup', props.className)
}))`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
