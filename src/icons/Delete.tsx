import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Delete({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-23.798 -14.096)">
          <g>
            <rect fill="currentColor" height="6" transform="translate(31.548 22.096)" width="1.5" />
            <rect fill="currentColor" height="6" transform="translate(34.548 22.096)" width="1.5" />
            <path
              d="M41.8,17.6h-4V16.1h-8v1.5h-4v2h1.5V31.1a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1V19.6h1.5ZM38.3,30.1h-9V19.6h9Z"
              fill="currentColor"
            />
          </g>
          <rect fill="none" height="20" transform="translate(23.798 14.096)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
