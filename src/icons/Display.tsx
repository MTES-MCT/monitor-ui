import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Display({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Display" transform="translate(0 -40)">
          <g data-name="Groupe 4124" id="Groupe_4124">
            <path
              d="M10,44a9.674,9.674,0,0,0-9,6,9.674,9.674,0,0,0,9,6,9.674,9.674,0,0,0,9-6A9.674,9.674,0,0,0,10,44Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,10,54Z"
              data-name="Tracé 1349"
              fill="currentColor"
              id="Tracé_1349"
            />
            <circle
              cx="2.25"
              cy="2.25"
              data-name="Ellipse 752"
              fill="currentColor"
              id="Ellipse_752"
              r="2.25"
              transform="translate(7.75 47.75)"
            />
          </g>
          <rect
            data-name="Rectangle 6093"
            fill="none"
            height="20"
            id="Rectangle_6093"
            transform="translate(0 40)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
