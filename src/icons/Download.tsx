import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Download({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-80)">
          <g>
            <rect fill="currentColor" height="2" transform="translate(84 16)" width="12" />
            <path d="M93,9V2H87V9H84l6,6,6-6Z" fill="currentColor" />
          </g>
          <rect fill="none" height="20" transform="translate(80)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
