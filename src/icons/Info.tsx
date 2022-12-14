import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Info({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(240 -82)">
          <g>
            <g fill="none" strokeMiterlimit="10">
              <path
                d="M-230,83a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-230,83Zm0,16a7,7,0,0,1-7-7,7,7,0,0,1,7-7,7,7,0,0,1,7,7A7,7,0,0,1-230,99Z"
                stroke="none"
              />
              <path
                d="M -230 83 C -225.0290069580078 83 -221 87.02899932861328 -221 92 C -221 96.97100067138672 -225.0290069580078 101 -230 101 C -234.9709930419922 101 -239 96.97100067138672 -239 92 C -239 87.02899932861328 -234.9709930419922 83 -230 83 Z M -230 99 C -226.1340026855469 99 -223 95.86599731445313 -223 92 C -223 88.13400268554688 -226.1340026855469 85 -230 85 C -233.8659973144531 85 -237 88.13400268554688 -237 92 C -237 95.86599731445313 -233.8659973144531 99 -230 99 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-231 91)">
              <rect height="5" stroke="none" width="2" />
              <rect fill="none" height="3" x="1" y="1" />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-231 88)">
              <rect height="2" stroke="none" width="2" />
              <rect fill="none" x="1" y="1" />
            </g>
          </g>
          <rect fill="none" height="20" transform="translate(-240 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
