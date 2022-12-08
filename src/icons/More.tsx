import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function More({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="More" transform="translate(240 -41)">
          <g data-name="Groupe 4169" id="Groupe_4169">
            <circle
              cx="2"
              cy="2"
              data-name="Ellipse 215"
              fill="currentColor"
              id="Ellipse_215"
              r="2"
              transform="translate(-232 49)"
            />
            <circle
              cx="2"
              cy="2"
              data-name="Ellipse 743"
              fill="currentColor"
              id="Ellipse_743"
              r="2"
              transform="translate(-239 49)"
            />
            <circle
              cx="2"
              cy="2"
              data-name="Ellipse 744"
              fill="currentColor"
              id="Ellipse_744"
              r="2"
              transform="translate(-225 49)"
            />
          </g>
          <rect
            data-name="Rectangle 6139"
            fill="none"
            height="20"
            id="Rectangle_6139"
            transform="translate(-240 41)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
