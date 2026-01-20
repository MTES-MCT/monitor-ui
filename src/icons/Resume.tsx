import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Resume({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="26" viewBox="0 0 26 26" width="26" {...nativeProps}>
        <path
          d="M-1599,3217h-26v-26h26v26Zm-20-8.75v1.5h7v-1.5Zm0-5v1.5h14v-1.5Zm0-5v1.5h14v-1.5Z"
          fill="#e0e0e0"
          transform="translate(1625 -3191)"
        />
      </svg>
    </IconBox>
  )
}
