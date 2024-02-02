import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Phone({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <clipPath>
          <path d="m0 0h20v20h-20z" />
        </clipPath>
        <clipPath>
          <path d="m0 0h20v20h-20z" />
        </clipPath>
        <g clipPath="url(#b)">
          <path d="m0 0h20v20h-20z" fill="transparent" />
          <g clipPath="url(#a)">
            <path
              d="m13.719 12.5 3.54.984a1.02 1.02 0 0 1 .735 1.1 3.526 3.526 0 0 1 -.987 2.257c-2.147 2.141-6.286 1.428-10.773-3.067s-5.223-8.662-3.076-10.784a3.647 3.647 0 0 1 2.263-.984 1.052 1.052 0 0 1 1.1.733l.986 3.53a1.034 1.034 0 0 1 -.345 1.081l-1.1.868a.719.719 0 0 0 -.155.964 18 18 0 0 0 2.263 2.662 20.743 20.743 0 0 0 2.667 2.256.709.709 0 0 0 .967-.154l.871-1.1a.926.926 0 0 1 1.044-.347"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
