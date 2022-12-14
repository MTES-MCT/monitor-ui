import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Summary({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <defs>
          <clipPath>
            <use />
          </clipPath>
          <clipPath>
            <use />
          </clipPath>
          <clipPath>
            <use />
          </clipPath>
        </defs>
        <g transform="translate(-200)">
          <path d="M216,4V16H204V4h12M202,2V18h16V2Z" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(206 6)">
            <rect height="1.5" stroke="none" width="8" />
            <path clipPath="url(#clip)" d="M0,0.5h8M7,0v1.5M8,1h-8M1,1.5v-1.5" fill="none" />
          </g>
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(206 9.25)">
            <rect height="1.5" stroke="none" width="8" />
            <path clipPath="url(#clip-2)" d="M0,0.5h8M7,0v1.5M8,1h-8M1,1.5v-1.5" fill="none" />
          </g>
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(206 12.5)">
            <rect height="1.5" stroke="none" width="8" />
            <path clipPath="url(#clip-3)" d="M0,0.5h8M7,0v1.5M8,1h-8M1,1.5v-1.5" fill="none" />
          </g>
          <rect fill="none" height="20" transform="translate(200)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
