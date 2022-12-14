import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Archive({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-120)">
          <path d="M138,2H122V8h1V18h14V8h1ZM124,4h12V6H124Zm11,12H125V8h10Z" fill="currentColor" />
          <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(128 10)">
            <rect height="2" stroke="none" width="4" />
            <rect fill="none" width="2" x="1" y="1" />
          </g>
          <rect fill="none" height="20" transform="translate(120)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
