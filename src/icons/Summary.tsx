import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Summary({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <defs>
          <clipPath>
            <use />
          </clipPath>
        </defs>
        <g>
          <rect fill="none" height="20" width="20" />
        </g>
        <g>
          <rect fill="currentColor" height="1.5" transform="translate(6 6)" width="8" />
          <rect fill="currentColor" height="1.5" transform="translate(6 9.25)" width="8" />
          <rect fill="currentColor" height="1.5" transform="translate(6 12.5)" width="8" />
          <path d="M16.5,3.5v13H3.5V3.5h13M18,2H2V18H18V2Z" fill="currentColor" />
        </g>
      </svg>
    </IconBox>
  )
}
