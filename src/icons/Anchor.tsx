import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Anchor({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <path
          d="M14.6,12.7l1.395,1.4A7.258,7.258,0,0,1,11,17.128V10h3V8H11V6.816a3,3,0,1,0-2,0V8H6v2H9v7.087A7.2,7.2,0,0,1,4.2,14.1L5.6,12.7,2,10v2.7C2,16.192,6.428,19,10.1,19s8.1-2.808,8.1-6.3V10ZM10,3A1,1,0,1,1,9,4,1,1,0,0,1,10,3Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
