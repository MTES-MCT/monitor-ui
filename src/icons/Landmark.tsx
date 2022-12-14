import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Landmark({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(120 -82)">
          <rect fill="currentColor" height="15" transform="translate(-114 99) rotate(180)" width="2" />
          <path d="M-113,84V94l12-5Z" fill="currentColor" />
          <rect fill="none" height="20" transform="translate(-120 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
