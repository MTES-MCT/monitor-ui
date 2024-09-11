import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Bullseye({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <circle cx="2" cy="2" fill="currentColor" r="2" transform="translate(8 8)" />
        <path
          d="M10,16a6,6,0,1,1,6-6A6.006,6.006,0,0,1,10,16ZM10,6a4,4,0,1,0,4,4A4,4,0,0,0,10,6Z"
          fill="currentColor"
        />
        <path
          d="M10,20A10,10,0,1,1,20,10,10.011,10.011,0,0,1,10,20ZM10,2a8,8,0,1,0,8,8A8.009,8.009,0,0,0,10,2Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
