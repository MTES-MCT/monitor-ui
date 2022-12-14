import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function List({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(160 -41)">
          <g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-142 45) rotate(90)"
            >
              <rect height="12" stroke="none" width="2" />
              <rect fill="none" height="10" x="1" y="1" />
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-142 50) rotate(90)"
            >
              <rect height="12" stroke="none" width="2" />
              <rect fill="none" height="10" x="1" y="1" />
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-142 55) rotate(90)"
            >
              <rect height="12" stroke="none" width="2" />
              <rect fill="none" height="10" x="1" y="1" />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-158 44.5)">
              <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
              <circle cx="1.5" cy="1.5" fill="none" r="0.5" />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-158 49.5)">
              <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
              <circle cx="1.5" cy="1.5" fill="none" r="0.5" />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-158 54.5)">
              <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
              <circle cx="1.5" cy="1.5" fill="none" r="0.5" />
            </g>
          </g>
          <rect fill="none" height="20" transform="translate(-160 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
