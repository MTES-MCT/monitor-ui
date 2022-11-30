import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Edit({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Edit" transform="translate(-80)">
          <path
            d="M86,11.5V14h2.5l7.372-7.372-2.5-2.5ZM97.805,4.7a.664.664,0,0,0,0-.94l-1.56-1.56a.664.664,0,0,0-.94,0l-1.219,1.22,2.5,2.5Z"
            data-name="Tracé 1341"
            fill="currentColor"
            id="Tracé_1341"
          />
          <path d="M95,9v7H84V5h7V3H82V18H97V9Z" data-name="Tracé 1342" fill="currentColor" id="Tracé_1342" />
          <rect
            data-name="Rectangle 6081"
            fill="none"
            height="20"
            id="Rectangle_6081"
            transform="translate(80)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
