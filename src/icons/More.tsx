import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function More({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(240 -41)">
          <g>
            <circle cx="2" cy="2" fill="currentColor" r="2" transform="translate(-232 49)" />
            <circle cx="2" cy="2" fill="currentColor" r="2" transform="translate(-239 49)" />
            <circle cx="2" cy="2" fill="currentColor" r="2" transform="translate(-225 49)" />
          </g>
          <rect fill="none" height="20" transform="translate(-240 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
