import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function FocusZones({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g>
          <path
            d="M10,5.333A7.524,7.524,0,0,0,3,10a7.583,7.583,0,0,0,14,0A7.524,7.524,0,0,0,10,5.333Zm0,7.778A3.111,3.111,0,1,1,13.111,10,3.111,3.111,0,0,1,10,13.111Z"
            fill="currentColor"
          />
          <circle cx="1.75" cy="1.75" fill="currentColor" r="1.75" transform="translate(8.25 8.25)" />
        </g>
        <rect fill="none" height="20" width="20" />
        <g>
          <path d="M1,1V6H3V3H6V1Z" fill="currentColor" />
          <path d="M14,1V3h3V6h2V1Z" fill="currentColor" />
          <path d="M17,17H14v2h5V14H17Z" fill="currentColor" />
          <path d="M3,14H1v5H6V17H3Z" fill="currentColor" />
        </g>
      </svg>
    </IconBox>
  )
}
