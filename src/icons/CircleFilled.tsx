import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function CircleFilled({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-505 -481)">
          <g transform="translate(506 482)">
            <path d="M11,2a9,9,0,1,0,9,9A9,9,0,0,0,11,2Z" fill="currentColor" transform="translate(-2 -2)" />
          </g>
          <rect fill="none" height="20" transform="translate(505 481)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
