import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Invalid({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="26" viewBox="0 0 26 26" width="26" {...nativeProps}>
        <g transform="translate(-1514 -535)">
          <g transform="translate(18 112)">
            <g>
              <circle cx="13" cy="13" fill="currentColor" r="13" transform="translate(1496 423)" />
            </g>
          </g>
          <g transform="translate(1517 538)">
            <path
              d="M100,8.546,97.454,6,93,10.454,88.546,6,86,8.546,90.454,13,86,17.454,88.546,20,93,15.546,97.454,20,100,17.454,95.546,13Z"
              fill="#f7f7fa"
              transform="translate(-83 -3)"
            />
            <rect fill="none" height="20" width="20" />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
