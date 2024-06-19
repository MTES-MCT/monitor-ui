import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Send({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M10.655,19.643,18,2,.357,9.345l4,4.011L14.429,5.571,6.644,15.644Z" fill="currentColor" />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
