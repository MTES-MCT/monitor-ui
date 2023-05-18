import classnames from 'classnames'
import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldProps = HTMLAttributes<HTMLDivElement>
export const Field = styled.div.attrs<FieldProps, FieldProps>(props => ({
  className: classnames('Element-Field', props.className)
}))`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`
