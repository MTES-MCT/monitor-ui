import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Drapeau({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="#000091" height="12" transform="translate(1 4)" width="6" />
        <rect fill="#e1000f" height="12" transform="translate(13 4)" width="6" />
        <rect fill="#fff" height="12" transform="translate(7 4)" width="6" />
        <rect fill="none" height="20" width="20" />
        <path d="M19,4V16H1V4H19m1-1H0V17H20V3Z" fill="#e5e5eb" />
      </svg>
    </IconBox>
  )
}
