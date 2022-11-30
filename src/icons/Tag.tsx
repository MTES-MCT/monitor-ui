import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Tag({ color, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Tag" transform="translate(-160)">
          <path
            d="M173.063,6l3.334,4-3.334,4H164V6h9.063M174,4H162V16h12l5-6-5-6Z"
            data-name="Tracé 1344"
            fill="currentColor"
            id="Tracé_1344"
          />
          <g
            data-name="Ellipse 751"
            fill="none"
            id="Ellipse_751"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(170.5 8.5)"
          >
            <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
            <circle cx="1.5" cy="1.5" fill="none" r="0.5" />
          </g>
          <rect
            data-name="Rectangle 6084"
            fill="none"
            height="20"
            id="Rectangle_6084"
            transform="translate(160)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
