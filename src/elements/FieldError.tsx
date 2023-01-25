import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  isDisabled?: boolean | undefined
}
export const FieldError = styled.p<{
  isDisabled?: boolean | undefined
}>`
  color: ${p => p.theme.color.maximumRed};
  display: ${p => (p.isDisabled ? 'none' : 'block')};
  font-size: 13px;
  font-weight: 700;
  line-height: 1.3846;
  margin-top: 4px;
`
