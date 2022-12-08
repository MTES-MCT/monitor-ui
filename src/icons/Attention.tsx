import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Attention({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Attention" transform="translate(200 -82)">
          <g data-name="Groupe 4155" id="Groupe_4155">
            <g data-name="Tracé 1376" fill="none" id="Tracé_1376" strokeMiterlimit="10">
              <path
                d="M-190,83a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-190,83Zm0,16a7,7,0,0,1-7-7,7,7,0,0,1,7-7,7,7,0,0,1,7,7A7,7,0,0,1-190,99Z"
                stroke="none"
              />
              <path
                d="M -190 83 C -185.0290069580078 83 -181 87.02899932861328 -181 92 C -181 96.97100067138672 -185.0290069580078 101 -190 101 C -194.9709930419922 101 -199 96.97100067138672 -199 92 C -199 87.02899932861328 -194.9709930419922 83 -190 83 Z M -190 99 C -186.1340026855469 99 -183 95.86599731445313 -183 92 C -183 88.13400268554688 -186.1340026855469 85 -190 85 C -193.8659973144531 85 -197 88.13400268554688 -197 92 C -197 95.86599731445313 -193.8659973144531 99 -190 99 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g
              data-name="Rectangle 6126"
              fill="none"
              id="Rectangle_6126"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-189 93) rotate(180)"
            >
              <rect height="5" stroke="none" width="2" />
              <rect fill="none" height="3" x="1" y="1" />
            </g>
            <g
              data-name="Rectangle 6127"
              fill="none"
              id="Rectangle_6127"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-189 96) rotate(180)"
            >
              <rect height="2" stroke="none" width="2" />
              <rect fill="none" x="1" y="1" />
            </g>
          </g>
          <rect
            data-name="Rectangle 6128"
            fill="none"
            height="20"
            id="Rectangle_6128"
            transform="translate(-200 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
