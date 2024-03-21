import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function FilterBis({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g>
          <rect fill="none" height="20" width="20" />
        </g>
        <g>
          <path
            d="M18,3.5H8.789a2.5,2.5,0,0,0-4.578,0H2v2H4.211a2.5,2.5,0,0,0,4.578,0H18ZM6.5,5.5a1,1,0,1,1,1-1A1,1,0,0,1,6.5,5.5Z"
            fill="currentColor"
          />
          <path
            d="M18,9H15.789a2.5,2.5,0,0,0-4.578,0H2v2h9.211a2.5,2.5,0,0,0,4.578,0H18Zm-4.5,2a1,1,0,1,1,1-1A1,1,0,0,1,13.5,11Z"
            fill="currentColor"
          />
          <path
            d="M18,14.5H8.789a2.5,2.5,0,0,0-4.578,0H2v2H4.211a2.5,2.5,0,0,0,4.578,0H18Zm-11.5,2a1,1,0,1,1,1-1A1,1,0,0,1,6.5,16.5Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
