import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Dot({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g fill="none" transform="translate(1 1)">
          <path d="M9,2a7,7,0,1,0,7,7A7,7,0,0,0,9,2Z" stroke="none" />
          <path
            d="M 9 4 C 6.242989540100098 4 4 6.242989540100098 4 9 C 4 11.75700950622559 6.242989540100098 14 9 14 C 11.75700950622559 14 14 11.75700950622559 14 9 C 14 6.242989540100098 11.75700950622559 4 9 4 M 9 2 C 12.86574935913086 2 16 5.134249687194824 16 9 C 16 12.86574935913086 12.86574935913086 16 9 16 C 5.134249687194824 16 2 12.86574935913086 2 9 C 2 5.134249687194824 5.134249687194824 2 9 2 Z"
            fill="currentColor"
            stroke="none"
          />
        </g>
      </svg>
    </IconBox>
  )
}
