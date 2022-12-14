import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function FilledArrow({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(320 -41)">
          <path d="M-313,43V59l8-8Z" fill="currentColor" />
          <rect fill="none" height="20" transform="translate(-320 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
