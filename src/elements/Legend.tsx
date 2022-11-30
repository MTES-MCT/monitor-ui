import styled from 'styled-components'

import { Label } from './Label'

import type { HTMLAttributes } from 'react'

export type LegendProps = HTMLAttributes<HTMLLegendElement> & {
  isHidden?: boolean
}
export function Legend({ isHidden = false, ...nativeProps }: LegendProps) {
  return <StyledLabel as="legend" isHidden={isHidden} {...nativeProps} />
}

const StyledLabel = styled(Label)`
  padding: 0;
`
