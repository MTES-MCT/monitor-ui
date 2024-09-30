import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function ExternalLink({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <path d="M16,11v5H4V4H9V2H2V18H18V11Z" fill="currentColor" />
        <path d="M18,2H11V4h3.586L9.793,8.793l1.414,1.414L16,5.414V9h2V2Z" fill="currentColor" />
      </svg>
    </IconBox>
  )
}
