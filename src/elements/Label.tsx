import styled from 'styled-components'

import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  isHidden: boolean
}
export const Label = styled.label<{
  isHidden?: boolean
}>`
  color: ${p => p.theme.color.slateGray};
  display: ${p => (p.isHidden ? 'none' : 'table')};
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 8px;
`
