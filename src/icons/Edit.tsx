import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Edit({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-80)">
          <path
            d="M86,11.5V14h2.5l7.372-7.372-2.5-2.5ZM97.805,4.7a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.219,1.22,2.5,2.5Z"
            fill="currentColor"
          />
          <path d="M95,9v7H84V5h7V3H82V18H97V9Z" fill="currentColor" />
          <rect fill="none" height="20" transform="translate(80)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
