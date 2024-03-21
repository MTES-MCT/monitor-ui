import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Note({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M2,2V18H12l6-6V2ZM4,16V4H16v6H10v6Zm8-.828V12h3.172Z" fill="currentColor" />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
