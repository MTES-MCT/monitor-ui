import styled from 'styled-components'

import type { LabelHTMLAttributes } from 'react'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>
export const Label = styled.label`
  color: ${p => p.theme.color.slateGray};
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`
