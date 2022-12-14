import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function MapLayers({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g>
          <path d="M10,2.332,16.113,6,10,9.668,3.887,6,10,2.332M10,0,0,6l10,6L20,6,10,0Z" fill="currentColor" />
          <path d="M1.913,8.815,0,10l10,6,10-6L18.056,8.834,10,13.668Z" fill="currentColor" />
          <path d="M1.913,12.815,0,14l10,6,10-6-1.944-1.166L10,17.668Z" fill="currentColor" />
        </g>
      </svg>
    </IconBox>
  )
}
