import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function FleetSegment({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(280 -82)">
          <path
            d="M-262,92l-2-.5V88a2,2,0,0,0-2-2h-2V84h-4v2h-2a2,2,0,0,0-2,2v3.5l-2,.5,1.5,6H-278v2h1.6a5.963,5.963,0,0,0,3.2-.99,5.776,5.776,0,0,0,6.4,0,5.879,5.879,0,0,0,3.2.99h1.6V98h-1.5Zm-12-4h8v3l-4-1-4,1Zm.8,8.68a5.751,5.751,0,0,1-1.35.875l-1.025-4.1L-270,92.062l5.575,1.393-1.025,4.1a5.751,5.751,0,0,1-1.35-.875A4.633,4.633,0,0,1-273.2,96.68Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(-280 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
