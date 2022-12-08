import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function FocusZones({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" id="Focus_zones" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g data-name="Groupe 4194" id="Groupe_4194">
          <path
            d="M10,5.333A7.524,7.524,0,0,0,3,10a7.583,7.583,0,0,0,14,0A7.524,7.524,0,0,0,10,5.333Zm0,7.778A3.111,3.111,0,1,1,13.111,10,3.111,3.111,0,0,1,10,13.111Z"
            data-name="Tracé 1433"
            fill="currentColor"
            id="Tracé_1433"
          />
          <circle
            cx="1.75"
            cy="1.75"
            data-name="Ellipse 758"
            fill="currentColor"
            id="Ellipse_758"
            r="1.75"
            transform="translate(8.25 8.25)"
          />
        </g>
        <rect data-name="Rectangle 6175" fill="none" height="20" id="Rectangle_6175" width="20" />
        <g data-name="Groupe 4195" id="Groupe_4195">
          <path d="M1,1V6H3V3H6V1Z" data-name="Tracé 1434" fill="currentColor" id="Tracé_1434" />
          <path d="M14,1V3h3V6h2V1Z" data-name="Tracé 1435" fill="currentColor" id="Tracé_1435" />
          <path d="M17,17H14v2h5V14H17Z" data-name="Tracé 1436" fill="currentColor" id="Tracé_1436" />
          <path d="M3,14H1v5H6V17H3Z" data-name="Tracé 1437" fill="currentColor" id="Tracé_1437" />
        </g>
      </svg>
    </IconBox>
  )
}
