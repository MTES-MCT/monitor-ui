import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Subscription({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <g>
          <circle cx="2" cy="2" fill="currentColor" r="2" transform="translate(3 13)" />
          <path
            d="M3,8v2.573A6.43,6.43,0,0,1,9.427,17H12A9,9,0,0,0,3.006,8ZM3,3V5.546A11.455,11.455,0,0,1,14.454,17H17A14.005,14.005,0,0,0,3,3Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
