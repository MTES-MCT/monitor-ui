import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Display({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(0 -40)">
          <g>
            <path
              d="M10,44a9.674,9.674,0,0,0-9,6,9.674,9.674,0,0,0,9,6,9.674,9.674,0,0,0,9-6A9.674,9.674,0,0,0,10,44Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,10,54Z"
              fill="currentColor"
            />
            <circle cx="2.25" cy="2.25" fill="currentColor" r="2.25" transform="translate(7.75 47.75)" />
          </g>
          <rect fill="none" height="20" transform="translate(0 40)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
