import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Semaphore({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <path d="M0,0H20V20H0Z" fill="none" />
        <path
          d="M18,1H2V5H5L4,19H7V15h3v4h6L15,5h3ZM5,3.5H3v-2H5Zm3,0H6v-2H8Zm3,0H9v-2h2Zm3,0H12v-2h2Zm3,0H15v-2h2Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
