import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Account({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <path
          d="M50,10a4,4,0,1,0-4-4A4,4,0,0,0,50,10Zm0,2c-2.67,0-8,1.34-8,4v2H58V16C58,13.34,52.67,12,50,12Z"
          fill="currentColor"
          transform="translate(-40)"
        />
      </svg>
    </IconBox>
  )
}
