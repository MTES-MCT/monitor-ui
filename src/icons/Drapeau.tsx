import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Drapeau({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" id="Drapeau" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect
          data-name="Rectangle 6296"
          fill="#000091"
          height="12"
          id="Rectangle_6296"
          transform="translate(1 4)"
          width="6"
        />
        <rect
          data-name="Rectangle 6297"
          fill="#e1000f"
          height="12"
          id="Rectangle_6297"
          transform="translate(13 4)"
          width="6"
        />
        <rect
          data-name="Rectangle 6298"
          fill="#fff"
          height="12"
          id="Rectangle_6298"
          transform="translate(7 4)"
          width="6"
        />
        <rect data-name="Rectangle 6299" fill="none" height="20" id="Rectangle_6299" width="20" />
        <path d="M19,4V16H1V4H19m1-1H0V17H20V3Z" data-name="Tracé 1463" fill="#e5e5eb" id="Tracé_1463" />
      </svg>
    </IconBox>
  )
}
