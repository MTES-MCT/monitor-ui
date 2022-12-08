import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Duplicate({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" id="Duplicate" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M6,2V5H3V18H14V15h3V2Zm6,14H5V7h7Zm3-3H14V5H8V4h7Z"
          data-name="Tracé 1373"
          fill="currentColor"
          id="Tracé_1373"
        />
        <rect data-name="Rectangle 6119" fill="none" height="20" id="Rectangle_6119" width="20" />
      </svg>
    </IconBox>
  )
}
