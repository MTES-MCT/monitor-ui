import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Control({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <defs>
          <clipPath id="clip">
            <use />
          </clipPath>
          <clipPath id="clip-2">
            <use />
          </clipPath>
          <clipPath id="clip-3">
            <use />
          </clipPath>
        </defs>
        <g id="Control" transform="translate(120 -41)">
          <g data-name="Groupe 4144" id="Groupe_4144">
            <g
              data-name="Rectangle 6111"
              fill="none"
              id="Rectangle_6111"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-104 58) rotate(90)"
            >
              <rect height="12" stroke="none" width="2" />
              <rect fill="none" height="10" x="1" y="1" />
            </g>
            <path
              d="M-107.694,47l1.333,8h-7.277l1.336-8Zm0-2h-4.6a2,2,0,0,0-1.977,1.675L-116,57h12l-1.721-10.325A2,2,0,0,0-107.7,45Z"
              data-name="Tracé 1369"
              fill="currentColor"
              id="Tracé_1369"
            />
            <g
              data-name="Rectangle 6112"
              fill="none"
              id="Rectangle_6112"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-110.75 41.75)"
            >
              <rect height="2.25" id="fill" stroke="none" width="1.5" />
              <path clipPath="url(#clip)" d="M0,1h1.5M1,0v2.25M1.5,1.25h-1.5M0.5,2.25v-2.25" fill="none" />
            </g>
            <g
              data-name="Rectangle 6113"
              fill="none"
              id="Rectangle_6113"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-104.061 43) rotate(45)"
            >
              <rect height="2.25" id="fill-2" stroke="none" width="1.5" />
              <path clipPath="url(#clip-2)" d="M0,1h1.5M1,0v2.25M1.5,1.25h-1.5M0.5,2.25v-2.25" fill="none" />
            </g>
            <g
              data-name="Rectangle 6114"
              fill="none"
              id="Rectangle_6114"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-117 44.061) rotate(-45)"
            >
              <rect height="2.25" id="fill-3" stroke="none" width="1.5" />
              <path clipPath="url(#clip-3)" d="M0,1h1.5M1,0v2.25M1.5,1.25h-1.5M0.5,2.25v-2.25" fill="none" />
            </g>
          </g>
          <rect
            data-name="Rectangle 6115"
            fill="none"
            height="20"
            id="Rectangle_6115"
            transform="translate(-120 41)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
