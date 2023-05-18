import classnames from 'classnames'
import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  isDisabled?: boolean | undefined
}
export const FieldError = styled.p.attrs<FieldErrorProps, FieldErrorProps>(props => ({
  className: classnames('Element-FieldError', props.className)
}))`
  color: ${p => p.theme.color.maximumRed};
  display: ${p => (p.isDisabled ? 'none' : 'block')};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3846;
  margin: 4px 0 0 0;
`
