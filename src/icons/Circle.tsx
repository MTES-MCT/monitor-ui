import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Circle({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-480 -481)">
          <g transform="translate(720 399)">
            <path
              d="M-230,83a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-230,83Zm0,16a7,7,0,0,1-7-7,7,7,0,0,1,7-7,7,7,0,0,1,7,7A7,7,0,0,1-230,99Z"
              fill="currentColor"
            />
          </g>
          <rect fill="none" height="20" transform="translate(480 481)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
