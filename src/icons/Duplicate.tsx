import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Duplicate({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M6,2V5H3V18H14V15h3V2Zm6,14H5V7h7Zm3-3H14V5H8V4h7Z" fill="currentColor" />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
