import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Save({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M14.444,2H2V18H18V5.556ZM10,16.222a2.667,2.667,0,1,1,2.667-2.667h0a2.663,2.663,0,0,1-2.659,2.667Zm2.667-8.889H3.778V3.778h8.889Z"
          fill="currentColor"
        />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
