import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Landmark({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <defs>
          <clipPath>
            <rect fill="none" height="20" width="20" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip-path)">
          <path
            d="M10,1A6,6,0,0,0,4,7a6.108,6.108,0,0,0,.091,1.01c.007.038.011.078.018.116a5.968,5.968,0,0,0,.252.908c.016.045.032.091.05.135a6.061,6.061,0,0,0,.4.836l.06.1a5.934,5.934,0,0,0,.56.781c0,.007.011.012.016.018a6.01,6.01,0,0,0,2.518,1.737l.009,0a6,6,0,0,0,4.05,0l.009,0A6.01,6.01,0,0,0,14.552,10.9c.005-.006.011-.011.016-.018a5.934,5.934,0,0,0,.56-.781l.06-.1a6.061,6.061,0,0,0,.4-.836c.018-.044.034-.09.05-.135a5.968,5.968,0,0,0,.252-.908c.007-.038.011-.078.018-.116A6.108,6.108,0,0,0,16,7a6,6,0,0,0-6-6"
            fill="currentColor"
          />
          <path
            d="M10,14.084A7.4,7.4,0,0,1,8.941,14v3.942L10,19l1.059-1.058V14A7.4,7.4,0,0,1,10,14.084"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
