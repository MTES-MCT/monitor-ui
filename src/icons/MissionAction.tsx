import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function MissionAction({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M214,2V0h-2V2h-4V0h-2V2h-3V18h14V2Zm1,14H205V4h10Z" fill="currentColor" transform="translate(-200)" />
        <rect fill="currentColor" height="1.5" transform="translate(7 6.5)" width="6" />
        <rect fill="currentColor" height="1.5" transform="translate(7 9.5)" width="6" />
        <path d="M200,0h20V20H200Z" fill="none" transform="translate(-200)" />
        <path d="M200,0h20V20H200Z" fill="none" transform="translate(-200)" />
      </svg>
    </IconBox>
  )
}
