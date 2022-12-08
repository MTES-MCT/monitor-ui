import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Calendar({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Calendar" transform="translate(280 -41)">
          <g data-name="Groupe 4137" id="Groupe_4137">
            <g data-name="Tracé 1365" fill="none" id="Tracé_1365" strokeMiterlimit="10">
              <path d="M-266,44V42h-2v2h-4V42h-2v2h-4V59h16V44Zm2,13h-12V50h12Zm0-9h-12V46h12Z" stroke="none" />
              <path
                d="M -274 42 L -272 42 L -272 44 L -268 44 L -268 42 L -266 42 L -266 44 L -262 44 L -262 59 L -278 59 L -278 44 L -274 44 L -274 42 Z M -264 48 L -264 46 L -276 46 L -276 48 L -264 48 Z M -264 57 L -264 50 L -276 50 L -276 57 L -264 57 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g
              data-name="Rectangle 6103"
              fill="none"
              id="Rectangle_6103"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-274 52)"
            >
              <rect height="3" stroke="none" width="4" />
              <rect fill="none" height="1" width="2" x="1" y="1" />
            </g>
          </g>
          <rect
            data-name="Rectangle 6104"
            fill="none"
            height="20"
            id="Rectangle_6104"
            transform="translate(-280 41)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
