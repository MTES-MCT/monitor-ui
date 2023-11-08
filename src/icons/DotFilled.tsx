import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function DotFilled({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(1 1)">
          <path d="M9,2a7,7,0,1,0,7,7A7,7,0,0,0,9,2Z" fill="currentColor" transform="translate(0 0)" />
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
