import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Check({ color, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Check" transform="translate(40 -82)">
          <g data-name="Tracé 1379" fill="none" id="Tracé_1379" strokeMiterlimit="10">
            <path
              d="M-23.99,86.7l-7.778,7.778-4.243-4.243-1.414,1.414,4.243,4.243,1.414,1.414,9.192-9.192Z"
              stroke="none"
            />
            <path
              d="M -23.98955917358398 86.69669342041016 L -22.57537841796875 88.11093139648438 L -31.76775932312012 97.30330657958984 L -37.42462158203125 91.64644622802734 L -36.01044082641602 90.23220825195313 L -31.76775932312012 94.47487640380859 L -23.98955917358398 86.69669342041016 Z"
              fill="currentColor"
              stroke="none"
            />
          </g>
          <rect
            data-name="Rectangle 6133"
            fill="none"
            height="20"
            id="Rectangle_6133"
            transform="translate(-40 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
