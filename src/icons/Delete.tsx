import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Delete({ color, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Delete" transform="translate(-23.798 -14.096)">
          <g data-name="Groupe 4114" id="Groupe_4114">
            <rect
              data-name="Rectangle 6078"
              fill="currentColor"
              height="6"
              id="Rectangle_6078"
              transform="translate(31.548 22.096)"
              width="1.5"
            />
            <rect
              data-name="Rectangle 6079"
              fill="currentColor"
              height="6"
              id="Rectangle_6079"
              transform="translate(34.548 22.096)"
              width="1.5"
            />
            <path
              d="M41.8,17.6h-4V16.1h-8v1.5h-4v2h1.5V31.1a1,1,0,0,0,1,1h11a1,1,0,0,0,1-1V19.6h1.5ZM38.3,30.1h-9V19.6h9Z"
              data-name="Tracé 1340"
              fill="currentColor"
              id="Tracé_1340"
            />
          </g>
          <rect
            data-name="Rectangle 6080"
            fill="none"
            height="20"
            id="Rectangle_6080"
            transform="translate(23.798 14.096)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
