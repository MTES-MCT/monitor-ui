import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Confirm({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Confirm" transform="translate(-40)">
          <path
            d="M50,1a9,9,0,1,0,9,9A9,9,0,0,0,50,1Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,50,17Z"
            data-name="Tracé 1361"
            fill="currentColor"
            id="Tracé_1361"
          />
          <path
            d="M53.382,6.529l-4.243,4.243L47.018,8.65,45.6,10.064l2.121,2.121h0L49.139,13.6,54.8,7.943Z"
            data-name="Tracé 1362"
            fill="currentColor"
            id="Tracé_1362"
          />
          <rect
            data-name="Rectangle 6101"
            fill="none"
            height="20"
            id="Rectangle_6101"
            transform="translate(40)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
