import { Label } from './Label'

import type { HTMLAttributes } from 'react'

export type LegendProps = HTMLAttributes<HTMLLegendElement> & {
  isHidden?: boolean
}
export function Legend({ isHidden = false, ...nativeProps }: LegendProps) {
  return <Label as="legend" isHidden={isHidden} {...nativeProps} />
}
