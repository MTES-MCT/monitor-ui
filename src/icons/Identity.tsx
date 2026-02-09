import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Identity({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="26" viewBox="0 0 26 26" width="26" {...nativeProps}>
        <path
          d="M-1599,3217h-26v-26h26v26Zm-13-10c-5.514,0-10,3.14-10,7,.046.021,9.6.021,10.009.021,3.439,0,9.953,0,9.991-.021C-1602,3210.14-1606.486,3207-1612,3207Zm0-10a4.505,4.505,0,0,0-4.5,4.5,4.505,4.505,0,0,0,4.5,4.5,4.505,4.505,0,0,0,4.5-4.5A4.505,4.505,0,0,0-1612,3197Z"
          fill="#e0e0e0"
          transform="translate(1625 -3191)"
        />
      </svg>
    </IconBox>
  )
}
