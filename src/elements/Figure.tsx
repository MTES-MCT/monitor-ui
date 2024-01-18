import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type FigureProps = HTMLAttributes<HTMLSpanElement>

/**
 * <Figure /> uses the Open Sans font to render fixed-width digits.
 */
export const Figure = styled.span`
  font-family: 'Open Sans', monospace;
`
