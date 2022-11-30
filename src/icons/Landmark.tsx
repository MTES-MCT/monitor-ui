import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Landmark({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Landmark" transform="translate(120 -82)">
          <rect
            data-name="Rectangle 6167"
            fill="currentColor"
            height="15"
            id="Rectangle_6167"
            transform="translate(-114 99) rotate(180)"
            width="2"
          />
          <path d="M-113,84V94l12-5Z" data-name="Tracé 1422" fill="currentColor" id="Tracé_1422" />
          <rect
            data-name="Rectangle 6168"
            fill="none"
            height="20"
            id="Rectangle_6168"
            transform="translate(-120 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
