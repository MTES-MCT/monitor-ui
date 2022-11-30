import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Minus({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Minus" transform="translate(80 -82)">
          <g
            data-name="Rectangle 6131"
            fill="none"
            id="Rectangle_6131"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(-77 93) rotate(-90)"
          >
            <rect height="14" stroke="none" width="2" />
            <rect fill="none" height="12" x="1" y="1" />
          </g>
          <rect
            data-name="Rectangle 6132"
            fill="none"
            height="20"
            id="Rectangle_6132"
            transform="translate(-80 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
