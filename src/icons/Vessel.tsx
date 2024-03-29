import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Vessel({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-260 -208)">
          <path
            d="M327.865,17.99a.226.226,0,0,1-.15-.184l-.64-4.879-4.88-.64a.225.225,0,0,1-.129-.382l6.81-6.811a.222.222,0,0,1,.085-.053L337.7,2.013a.224.224,0,0,1,.285.285l-3.028,8.741a.222.222,0,0,1-.053.085l-6.811,6.81a.225.225,0,0,1-.159.066A.244.244,0,0,1,327.865,17.99Z"
            fill="currentColor"
            transform="translate(-60 208)"
          />
          <rect fill="none" height="20" transform="translate(260 208)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
