import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Control({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="26" viewBox="0 0 26 26" width="26" {...nativeProps}>
        <path
          d="M441.447,139.234v26h26v-26Zm12.248,4h1.5v2h-1.5Zm-6.778,3.45,1.06-1.06,1.414,1.414-1.06,1.06Zm13.528,14.554h-12v-2h12Zm0-3h-12v0h0l2.143-9.823c0-.012.011-.021.015-.033a1.442,1.442,0,0,1,.549-.818,1.563,1.563,0,0,1,1.008-.33h4.571a1.568,1.568,0,0,1,1.007.33,1.456,1.456,0,0,1,.549.815c0,.013.012.023.016.036l2.142,9.823h0Zm.121-10.14-1.061-1.06,1.414-1.414,1.061,1.06Z"
          fill="#e0e0e0"
          transform="translate(-441.447 -139.234)"
        />
        <path
          d="M458.955,157.038l-1.825-8.367a.4.4,0,0,0-.4-.237H452.16a.4.4,0,0,0-.4.237l-1.825,8.367h9.02"
          fill="#e0e0e0"
          transform="translate(-441.447 -139.234)"
        />
      </svg>
    </IconBox>
  )
}
