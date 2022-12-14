import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Unlock({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <g>
          <path d="M0,0H20V20H0Z" fill="none" />
          <g>
            <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" transform="translate(8.5 11.5)" />
            <path
              d="M14.471,7V5.456a4.471,4.471,0,0,0-8.942,0H7.765a2.235,2.235,0,1,1,4.47,0V7H3V19H17V7ZM15,17H5V9H15Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
