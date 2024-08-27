import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function ListLines({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(160 -41)">
          <rect fill="currentColor" height="12" transform="translate(-142 45) rotate(90)" width="2" />
          <rect fill="currentColor" height="12" transform="translate(-142 50) rotate(90)" width="2" />
          <rect fill="currentColor" height="12" transform="translate(-142 55) rotate(90)" width="2" />
          <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" transform="translate(-158 44.5)" />
          <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" transform="translate(-158 49.5)" />
          <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" transform="translate(-158 54.5)" />
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
