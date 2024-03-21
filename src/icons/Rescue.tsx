import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Rescue({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <clipPath>
          <path d="m0 0h20v20h-20z" />
        </clipPath>
        <clipPath>
          <path d="m0 0h20v20h-20z" />
        </clipPath>
        <g clipPath="url(#b)">
          <path d="m0 0h20v20h-20z" fill="transparent" />
          <g clipPath="url(#a)">
            <path
              d="m10 1a9 9 0 1 0 9 9 9 9 0 0 0 -9-9m6.7 7h-2.122a5.014 5.014 0 0 0 -2.578-2.578v-2.122a7.022 7.022 0 0 1 4.7 4.7m-6.7 5a3 3 0 1 1 3-3 3 3 0 0 1 -3 3m-2-9.7v2.122a5.014 5.014 0 0 0 -2.578 2.578h-2.122a7.022 7.022 0 0 1 4.7-4.7m-4.7 8.7h2.122a5.014 5.014 0 0 0 2.578 2.578v2.122a7.024 7.024 0 0 1 -4.7-4.7m8.7 4.7v-2.122a5.014 5.014 0 0 0 2.578-2.578h2.122a7.024 7.024 0 0 1 -4.7 4.7"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
