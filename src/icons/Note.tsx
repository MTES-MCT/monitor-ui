import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Note({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" id="Note" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M2,2V18H12l6-6V2ZM4,16V4H16v6H10v6Zm8-.828V12h3.172Z"
          data-name="Tracé 1466"
          fill="#707785"
          id="Tracé_1466"
        />
        <rect data-name="Rectangle 6312" fill="none" height="20" id="Rectangle_6312" width="20" />
      </svg>
    </IconBox>
  )
}
