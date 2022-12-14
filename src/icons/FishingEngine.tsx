import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function FishingEngine({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(0 -41)">
          <path
            d="M11,53h2v1a3,3,0,0,1-6,0V47.789a2.5,2.5,0,1,0-2,0V54a5,5,0,0,0,10,0V48ZM6,46.5a1,1,0,1,1,1-1A1,1,0,0,1,6,46.5Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(0 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
