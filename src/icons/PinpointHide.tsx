import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function PinpointHide({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Pinpoint_hide" transform="translate(-8.128 -10.447)">
          <rect
            data-name="Rectangle 6100"
            fill="none"
            height="20"
            id="Rectangle_6100"
            transform="translate(8.128 10.447)"
            width="20"
          />
          <path
            d="M24.88,13.109l-1.415-1.414L21.6,13.56a5.976,5.976,0,0,0-9.416,5.663c.016.136.038.27.061.405l.012.056a9.7,9.7,0,0,0,.811,2.408l-2.139,2.14,1.414,1.414L14.1,23.893a23.842,23.842,0,0,0,4.032,4.554S23.163,24.239,24,19.684l.011-.056c.024-.135.046-.269.062-.405a5.87,5.87,0,0,0-1.057-4.249Zm-9.752,5.338a2.982,2.982,0,0,1,4.286-2.7l-3.986,3.986A2.969,2.969,0,0,1,15.128,18.447Zm6,0a3,3,0,0,1-3,3,2.965,2.965,0,0,1-1.286-.3l3.986-3.986A2.983,2.983,0,0,1,21.128,18.447Z"
            data-name="Tracé 1360"
            fill="currentColor"
            id="Tracé_1360"
          />
        </g>
      </svg>
    </IconBox>
  )
}
