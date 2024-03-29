import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function ShowXml({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-120)">
          <path
            d="M136.646,2H123.354A3.354,3.354,0,0,0,120,5.354v9.292A3.354,3.354,0,0,0,123.354,18h13.292A3.354,3.354,0,0,0,140,14.646V5.354A3.354,3.354,0,0,0,136.646,2ZM125.607,12.863l-1.269-1.98-1.274,1.98h-1.386l1.957-2.988-1.774-2.738h1.352l1.148,1.84,1.125-1.84h1.34l-1.781,2.781L127,12.863Zm7.5,0h-1.074V8.355L130.9,12.863h-1.113l-1.133-4.508v4.508H127.58V7.137h1.731l1.039,3.906,1.027-3.906h1.734Zm5.211,0h-4.031V7.184h1.156V11.9h2.875Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(120)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
