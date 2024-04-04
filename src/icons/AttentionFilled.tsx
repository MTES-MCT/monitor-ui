import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function AttentionFilled({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(200 -82)">
          <path d="M-190,83a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-190,83Z" fill="currentColor" />
          <rect fill="#fff" height="5" transform="translate(-189 93) rotate(180)" width="2" />
          <rect fill="#fff" height="2" transform="translate(-189 96) rotate(180)" width="2" />
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
