import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Link({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <g>
          <g>
            <path d="M5,7H9V5H5A5,5,0,0,0,5,15H9V13H5A3,3,0,0,1,5,7Z" fill="currentColor" />
            <path d="M15,13H11v2h4A5,5,0,0,0,15,5H11V7h4a3,3,0,0,1,0,6Z" fill="currentColor" />
            <rect fill="currentColor" height="2" transform="translate(6 9)" width="8" />
          </g>
          <rect fill="none" height="20" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
