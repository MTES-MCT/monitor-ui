import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Plus({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(120 -82)">
          <path d="M-102,91h-7V84h-2v7h-7v2h7v7h2V93h7Z" fill="currentColor" />
          <rect fill="none" height="20" transform="translate(-120 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
