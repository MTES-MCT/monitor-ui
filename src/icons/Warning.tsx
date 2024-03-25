import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Warning({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M18,18H2l-.883-1.471,8-15h1.766l8,15ZM3.667,16H16.333L10,4.125Z" fill="currentColor" />
        <rect fill="currentColor" height="4.011" transform="translate(9 7.989)" width="2" />
        <rect fill="currentColor" height="2" transform="translate(9 13)" width="2" />
        <path d="M0,0H20V20H0Z" fill="none" />
      </svg>
    </IconBox>
  )
}
