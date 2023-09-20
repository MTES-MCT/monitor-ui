import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function EditUnbordered({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g>
          <path
            d="M10.713,5.983,14.02,9.288,6.3,17H3V13.7l7.716-7.718Zm1.1-1.1,1.653-1.653a.779.779,0,0,1,1.1,0l2.2,2.2a.779.779,0,0,1,0,1.1L15.121,8.185Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
