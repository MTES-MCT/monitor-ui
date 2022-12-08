import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function FilledArrow({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Filled_arrow" transform="translate(320 -41)">
          <path d="M-313,43V59l8-8Z" data-name="Tracé 1385" fill="currentColor" id="Tracé_1385" />
          <rect
            data-name="Rectangle 6137"
            fill="none"
            height="20"
            id="Rectangle_6137"
            transform="translate(-320 41)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
