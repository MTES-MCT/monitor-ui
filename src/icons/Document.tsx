import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Document({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <rect fill="none" height="20" width="20" />
        <path d="M0,0H20V20H0Z" fill="none" />
        <path d="M3,18H17V8L11,2H3Zm12-2H5V4H9v6h6Zm-.828-8H11V4.828Z" fill="currentColor" />
      </svg>
    </IconBox>
  )
}
