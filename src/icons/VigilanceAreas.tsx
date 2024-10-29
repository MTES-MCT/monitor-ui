import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function VigilanceAreas({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g
          fill="none"
          stroke="currentColor"
          strokeDasharray="2.835 2.835 2.835 2.835"
          strokeMiterlimit="10"
          strokeWidth="2"
        >
          <circle cx="10" cy="10" r="10" stroke="none" />
          <circle cx="10" cy="10" fill="none" r="9" />
        </g>
        <rect fill="none" height="20" width="20" />
        <g transform="translate(139 -127)">
          <path
            d="M-129,133a6.451,6.451,0,0,0-6,4,6.451,6.451,0,0,0,6,4,6.451,6.451,0,0,0,6-4A6.451,6.451,0,0,0-129,133Zm0,6.667A2.667,2.667,0,0,1-131.667,137,2.667,2.667,0,0,1-129,134.333,2.667,2.667,0,0,1-126.333,137,2.667,2.667,0,0,1-129,139.667Z"
            fill="currentColor"
          />
          <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" transform="translate(-130.5 135.5)" />
        </g>
        <path d="M-139,127h20v20h-20Z" fill="none" transform="translate(139 -127)" />
      </svg>
    </IconBox>
  )
}
