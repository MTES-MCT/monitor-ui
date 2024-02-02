import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Archive({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M138,2H122V8h1V18h14V8h1ZM124,4h12V6H124Zm11,12H125V8h10Z"
          fill="currentColor"
          transform="translate(-120)"
        />
        <rect fill="currentColor" height="2" transform="translate(8 10)" width="4" />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
