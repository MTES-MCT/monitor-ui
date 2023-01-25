import styled from 'styled-components'

import { Label } from './Label'

import type { HTMLAttributes } from 'react'

export type LegendProps = HTMLAttributes<HTMLLegendElement> & {
  isDisabled?: boolean | undefined
  isHidden?: boolean | undefined
}
export function Legend({ isDisabled = false, isHidden = false, ...nativeProps }: LegendProps) {
  return <StyledLabel as="legend" isDisabled={isDisabled} isHidden={isHidden} {...nativeProps} />
}

const StyledLabel = styled(Label)`
  padding: 0;
`
