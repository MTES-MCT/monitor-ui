import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Summary({ color, size, ...nativeProps }: IconProps) {
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
        <g id="Summary" transform="translate(-200)">
          <path d="M216,4V16H204V4h12M202,2V18h16V2Z" data-name="Tracé 1345" fill="currentColor" id="Tracé_1345" />
          <g
            data-name="Rectangle 6085"
            fill="none"
            id="Rectangle_6085"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(206 6)"
          >
            <rect height="1.5" id="fill" stroke="none" width="8" />
            <path clipPath="url(#clip)" d="M0,0.5h8M7,0v1.5M8,1h-8M1,1.5v-1.5" fill="none" />
          </g>
          <g
            data-name="Rectangle 6086"
            fill="none"
            id="Rectangle_6086"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(206 9.25)"
          >
            <rect height="1.5" id="fill-2" stroke="none" width="8" />
            <path clipPath="url(#clip-2)" d="M0,0.5h8M7,0v1.5M8,1h-8M1,1.5v-1.5" fill="none" />
          </g>
          <g
            data-name="Rectangle 6087"
            fill="none"
            id="Rectangle_6087"
            stroke="currentColor"
            strokeMiterlimit="10"
            strokeWidth="2"
            transform="translate(206 12.5)"
          >
            <rect height="1.5" id="fill-3" stroke="none" width="8" />
            <path clipPath="url(#clip-3)" d="M0,0.5h8M7,0v1.5M8,1h-8M1,1.5v-1.5" fill="none" />
          </g>
          <rect
            data-name="Rectangle 6088"
            fill="none"
            height="20"
            id="Rectangle_6088"
            transform="translate(200)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
