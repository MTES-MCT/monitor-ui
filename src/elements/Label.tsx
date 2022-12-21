import styled from 'styled-components'

import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  isDisabled?: boolean
  isHidden?: boolean
}
export const Label = styled.label<{
  isDisabled?: boolean
  isHidden?: boolean
}>`
  color: ${p => (p.isDisabled ? p.theme.color.lightGray : p.theme.color.slateGray)};
  display: ${p => (p.isHidden ? 'none' : 'table')};
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 4px;
`
