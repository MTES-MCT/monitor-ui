import classNames from 'classnames'
import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>
export const Field = styled.div.attrs<FieldProps>(props => ({
  className: classNames('Element-Field', props.className)
}))`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`
