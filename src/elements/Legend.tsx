import styled from 'styled-components'

import { Label } from './Label'

import type { HTMLAttributes } from 'react'

export type LegendProps = HTMLAttributes<HTMLLegendElement> & {
  disabled?: boolean | undefined
  hasError?: boolean | undefined
  isHidden?: boolean | undefined
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export function Legend({ disabled = false, hasError = false, isHidden = false, ...nativeProps }: LegendProps) {
  return <StyledLabel as="legend" disabled={disabled} hasError={hasError} isHidden={isHidden} {...nativeProps} />
}

const StyledLabel = styled(Label)`
  padding: 0;
`
