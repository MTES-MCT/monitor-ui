import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function FocusVessel({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M8.666,14.994a.138.138,0,0,1-.054-.034.142.142,0,0,1-.04-.081l-.4-3.05-3.05-.4a.139.139,0,0,1-.114-.094.137.137,0,0,1,.033-.144L9.3,6.934A.139.139,0,0,1,9.351,6.9l5.463-1.893a.14.14,0,0,1,.178.178L13.1,10.649a.139.139,0,0,1-.033.053L8.809,14.959a.141.141,0,0,1-.1.041A.161.161,0,0,1,8.666,14.994Z"
          fill="currentColor"
        />
        <rect fill="none" height="20" width="20" />
        <g>
          <path d="M1,1V6H3V3H6V1Z" fill="currentColor" />
          <path d="M14,1V3h3V6h2V1Z" fill="currentColor" />
          <path d="M17,17H14v2h5V14H17Z" fill="currentColor" />
          <path d="M3,14H1v5H6V17H3Z" fill="currentColor" />
        </g>
      </svg>
    </IconBox>
  )
}
