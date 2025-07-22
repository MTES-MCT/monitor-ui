import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export const chart = ({ color, size, title, ...nativeProps }: IconProps) => (
  <IconBox $color={color} $size={size} title={title}>
    <svg fill="none" height="26" viewBox="0 0 26 26" width="26" {...nativeProps}>
      <g>
        <path
          d="M3.25 13H7.58333V22.75H3.25V13ZM18.4167 8.66667H22.75V22.75H18.4167V8.66667ZM10.8333 2.16667H15.1667V22.75H10.8333V2.16667Z"
          fill="#E5E5EB"
        />
      </g>
    </svg>
  </IconBox>
)
