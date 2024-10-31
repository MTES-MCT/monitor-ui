import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SelectRectangle({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(160 -41)">
          <rect fill="currentColor" height="4" transform="translate(-152 44) rotate(-90)" width="2" />
          <rect fill="currentColor" height="4" transform="translate(-152 60) rotate(-90)" width="2" />
          <rect fill="currentColor" height="4" transform="translate(-159 49)" width="2" />
          <rect fill="currentColor" height="4" transform="translate(-143 49)" width="2" />
          <g>
            <path d="M-159,42v5h2V44h3V42Z" fill="currentColor" />
            <path d="M-146,42v2h3v3h2V42Z" fill="currentColor" />
          </g>
          <g>
            <path d="M-157,55h-2v5h5V58h-3Z" fill="currentColor" />
            <path d="M-143,55v3h-3v2h5V55Z" fill="currentColor" />
          </g>
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
