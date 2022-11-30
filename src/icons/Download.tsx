import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Download({ color, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Download" transform="translate(-80)">
          <g data-name="Groupe 4130" id="Groupe_4130">
            <rect
              data-name="Rectangle 6096"
              fill="currentColor"
              height="2"
              id="Rectangle_6096"
              transform="translate(84 16)"
              width="12"
            />
            <path d="M93,9V2H87V9H84l6,6,6-6Z" data-name="Tracé 1356" fill="currentColor" id="Tracé_1356" />
          </g>
          <rect
            data-name="Rectangle 6097"
            fill="none"
            height="20"
            id="Rectangle_6097"
            transform="translate(80)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
