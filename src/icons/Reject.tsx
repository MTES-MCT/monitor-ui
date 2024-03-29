import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Reject({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-80)">
          <path d="M90,1a9,9,0,1,0,9,9A9,9,0,0,0,90,1Zm0,16a7,7,0,1,1,7-7A7,7,0,0,1,90,17Z" fill="currentColor" />
          <path
            d="M94,7.455,92.545,6,90,8.545,87.455,6,86,7.455,88.545,10,86,12.545,87.455,14,90,11.455,92.545,14,94,12.545,91.455,10Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(80)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
