import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SortSelectedUp({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g transform="translate(0)">
          <path d="M4.5,7.5,10,2l5.5,5.5" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" />
          <line
            fill="none"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(9.999 2)"
            y2="17"
          />
        </g>
      </svg>
    </IconBox>
  )
}
