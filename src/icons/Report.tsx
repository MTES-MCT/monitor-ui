import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Report({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <path d="M-143,6.6-155,1V19h2V11.453Z" fill="currentColor" transform="translate(160)" />
      </svg>
    </IconBox>
  )
}
