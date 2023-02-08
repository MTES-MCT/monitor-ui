import styled from 'styled-components'

import { Label } from './Label'

import type { HTMLAttributes } from 'react'

export type LegendProps = HTMLAttributes<HTMLLegendElement> & {
  disabled?: boolean | undefined
  isHidden?: boolean | undefined
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export function Legend({ disabled = false, isHidden = false, ...nativeProps }: LegendProps) {
  return <StyledLabel as="legend" disabled={disabled} isHidden={isHidden} {...nativeProps} />
}

const StyledLabel = styled(Label)`
  padding: 0;
`
