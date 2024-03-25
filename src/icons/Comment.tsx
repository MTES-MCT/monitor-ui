import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Comment({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <clipPath>
          <path d="m0 0h20v20h-20z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path d="m0 0h20v20h-20z" fill="transparent" />
          <path
            d="m6.455 19.41-4.455 3.59v-18.974a1.013 1.013 0 0 1 1-1.026h18a1.013 1.013 0 0 1 1 1.026v14.359a1.013 1.013 0 0 1 -1 1.026zm.545-9.231v2.051h2v-2.051zm4 0v2.051h2v-2.051zm4 0v2.051h2v-2.051z"
            fill="currentColor"
            transform="translate(-2 -3)"
          />
        </g>
      </svg>
    </IconBox>
  )
}
