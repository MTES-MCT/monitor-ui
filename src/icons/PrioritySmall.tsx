import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function PrioritySmall({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="none" height="16" viewBox="0 0 16 16" width="16" {...nativeProps}>
        <circle cx="8.00003" cy="7.99988" r="5.25" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.00003" cy="7.99988" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </IconBox>
  )
}
