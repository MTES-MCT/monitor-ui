import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Plus({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Plus" transform="translate(120 -82)">
          <path d="M-102,91h-7V84h-2v7h-7v2h7v7h2V93h7Z" data-name="Tracé 1378" fill="currentColor" id="Tracé_1378" />
          <rect
            data-name="Rectangle 6130"
            fill="none"
            height="20"
            id="Rectangle_6130"
            transform="translate(-120 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
