import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Minus({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="currentColor" height="14" transform="translate(3 11) rotate(-90)" width="2" />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
