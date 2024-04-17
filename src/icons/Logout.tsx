import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Logout({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g>
          <g>
            <path d="M4,4h8V2H2V18H12V16H4Z" fill="currentColor" />
            <path d="M18,10,14,6V9H6v2h8v3Z" fill="currentColor" />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
