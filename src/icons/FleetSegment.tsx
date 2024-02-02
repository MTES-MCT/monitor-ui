import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function FleetSegment({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g>
          <path
            d="M15.883,9.69V5a2,2,0,0,0-2-2H12V1H8V3H6.112a2,2,0,0,0-2,2V9.69L2,10.253l1.5,5.234h.1A4.641,4.641,0,0,0,6.8,14a4.267,4.267,0,0,0,6.4,0,4.641,4.641,0,0,0,3.2,1.487h.1L18,10.253ZM6.112,5h7.771V9.126L10,8,6.112,9.126Z"
            fill="currentColor"
          />
          <path
            d="M16.4,17a4.917,4.917,0,0,1-3.2-1.32,4.633,4.633,0,0,1-6.4,0A4.917,4.917,0,0,1,3.6,17H2v2H3.6a5.963,5.963,0,0,0,3.2-.99,5.776,5.776,0,0,0,6.4,0,5.879,5.879,0,0,0,3.2.99H18V17Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
