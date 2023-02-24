import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Vms({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <g transform="translate(0 0.329)">
          <path d="M12.5,9A2.5,2.5,0,1,0,9,11.289V18h2V11.289A2.5,2.5,0,0,0,12.5,9Z" fill="currentColor" />
          <g>
            <path
              d="M5.5,9A4.472,4.472,0,0,1,7.122,5.57l-1.3-1.547a6.493,6.493,0,0,0,0,9.954l1.3-1.547A4.472,4.472,0,0,1,5.5,9Z"
              fill="currentColor"
            />
            <path
              d="M14.5,9a4.472,4.472,0,0,1-1.622,3.43l1.3,1.547a6.493,6.493,0,0,0,0-9.954l-1.3,1.547A4.472,4.472,0,0,1,14.5,9Z"
              fill="currentColor"
            />
          </g>
          <g>
            <path
              d="M3.574,16.658l1.288-1.535a7.981,7.981,0,0,1,0-12.246L3.574,1.342a9.991,9.991,0,0,0,0,15.316Z"
              fill="currentColor"
            />
            <path
              d="M16.426,1.342,15.138,2.877a7.981,7.981,0,0,1,0,12.246l1.288,1.535a9.991,9.991,0,0,0,0-15.316Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
