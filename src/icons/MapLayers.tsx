import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function MapLayers({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg data-name="Map layers" height="20" id="Map_layers" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect data-name="Rectangle 6180" fill="none" height="20" id="Rectangle_6180" width="20" />
        <g data-name="Groupe 4214" id="Groupe_4214">
          <path
            d="M10,2.332,16.113,6,10,9.668,3.887,6,10,2.332M10,0,0,6l10,6L20,6,10,0Z"
            data-name="Tracé 1445"
            fill="currentColor"
            id="Tracé_1445"
          />
          <path
            d="M1.913,8.815,0,10l10,6,10-6L18.056,8.834,10,13.668Z"
            data-name="Tracé 1446"
            fill="currentColor"
            id="Tracé_1446"
          />
          <path
            d="M1.913,12.815,0,14l10,6,10-6-1.944-1.166L10,17.668Z"
            data-name="Tracé 1447"
            fill="currentColor"
            id="Tracé_1447"
          />
        </g>
      </svg>
    </IconBox>
  )
}
