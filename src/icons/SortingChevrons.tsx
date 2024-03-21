import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SortingChevrons({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M-184.5-110.5-190-105l-5.5-5.5"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          transform="translate(200 123)"
        />
        <path
          d="M-195.5-115.5l5.5-5.5,5.5,5.5"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="2"
          transform="translate(200 123)"
        />
        <rect fill="none" height="20" width="20" />
        <path d="M-200-123h20v20h-20Z" fill="none" transform="translate(200 123)" />
      </svg>
    </IconBox>
  )
}
