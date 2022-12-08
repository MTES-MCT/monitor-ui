import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Filter({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Filter" transform="translate(-930 -294)">
          <path
            d="M2,2V4l5,7.592V18h6V11.592L18,4h0V2Zm9,9v5H9V11H9L4.394,4H15.606Z"
            data-name="Tracé 1450"
            fill="currentColor"
            id="Tracé_1450"
            transform="translate(930 294)"
          />
          <rect
            data-name="Rectangle 6208"
            fill="none"
            height="20"
            id="Rectangle_6208"
            transform="translate(930 294)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
