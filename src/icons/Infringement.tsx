import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Infringement({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(40 -41)">
          <path
            d="M-30,42a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-30,42Zm7,9a6.962,6.962,0,0,1-1.4,4.186L-34.186,45.4A6.962,6.962,0,0,1-30,44,7,7,0,0,1-23,51Zm-14,0a6.962,6.962,0,0,1,1.4-4.186l9.787,9.787A6.962,6.962,0,0,1-30,58,7,7,0,0,1-37,51Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(-40 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
