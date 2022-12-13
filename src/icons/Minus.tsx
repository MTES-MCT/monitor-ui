import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Minus({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" id="Minus" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect
          data-name="Rectangle 6131"
          fill="#707785"
          height="14"
          id="Rectangle_6131"
          transform="translate(3 11) rotate(-90)"
          width="2"
        />
        <rect data-name="Rectangle 6132" fill="none" height="20" id="Rectangle_6132" width="20" />
      </svg>
    </IconBox>
  )
}
