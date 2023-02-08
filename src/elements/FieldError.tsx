import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  isDisabled?: boolean | undefined
}
// TODO This is bad to use `!important` in CSS. Let's rework this quick fix later on.
export const FieldError = styled.p<{
  isDisabled?: boolean | undefined
}>`
  color: ${p => p.theme.color.maximumRed} !important;
  display: ${p => (p.isDisabled ? 'none' : 'block')} !important;
  font-size: 13px !important;
  font-weight: 700 !important;
  line-height: 1.3846 !important;
  margin-top: 4px !important;
`
