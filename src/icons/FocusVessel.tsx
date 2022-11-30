import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function FocusVessel({ color, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color}>
      <svg height="20" id="Focus_vessel" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M8.666,14.994a.138.138,0,0,1-.054-.034.142.142,0,0,1-.04-.081l-.4-3.05-3.05-.4a.139.139,0,0,1-.114-.094.137.137,0,0,1,.033-.144L9.3,6.934A.139.139,0,0,1,9.351,6.9l5.463-1.893a.14.14,0,0,1,.178.178L13.1,10.649a.139.139,0,0,1-.033.053L8.809,14.959a.141.141,0,0,1-.1.041A.161.161,0,0,1,8.666,14.994Z"
          data-name="Union 12"
          fill="currentColor"
          id="Union_12"
        />
        <rect data-name="Rectangle 6176" fill="none" height="20" id="Rectangle_6176" width="20" />
        <g data-name="Groupe 4196" id="Groupe_4196">
          <path d="M1,1V6H3V3H6V1Z" data-name="Tracé 1438" fill="currentColor" id="Tracé_1438" />
          <path d="M14,1V3h3V6h2V1Z" data-name="Tracé 1439" fill="currentColor" id="Tracé_1439" />
          <path d="M17,17H14v2h5V14H17Z" data-name="Tracé 1440" fill="currentColor" id="Tracé_1440" />
          <path d="M3,14H1v5H6V17H3Z" data-name="Tracé 1441" fill="currentColor" id="Tracé_1441" />
        </g>
      </svg>
    </IconBox>
  )
}
