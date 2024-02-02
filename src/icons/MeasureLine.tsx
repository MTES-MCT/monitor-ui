import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function MeasureLine({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(280 -82)">
          <path
            d="M-260,87h-20V97h20Zm-1.818,8.333h-16.363V88.667h1.818V92h1.818V88.667h1.818V92h1.818V88.667h1.819V92h1.818V88.667h1.818V92h1.819V88.667h1.818Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(-280 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
