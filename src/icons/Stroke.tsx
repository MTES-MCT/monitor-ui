import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Stroke({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g opacity="0.25" transform="translate(-670.5 2008.5)">
          <g>
            <rect fill="#606060" height="1" transform="translate(672.156 -1990.836) rotate(-45)" width="21.92" />
          </g>
          <g>
            <rect fill="#606060" height="1" transform="translate(676.729 -1990.832) rotate(-45)" width="16.163" />
          </g>
          <g>
            <rect fill="#606060" height="1" transform="translate(681.298 -1990.837) rotate(-45)" width="9.698" />
          </g>
          <g>
            <rect fill="#606060" height="1" transform="translate(685.871 -1990.833) rotate(-45)" width="3.233" />
          </g>
          <g>
            <rect fill="#606060" height="1" transform="translate(672.153 -1995.41) rotate(-45)" width="16.163" />
          </g>
          <g>
            <rect fill="#606060" height="1" transform="translate(672.156 -1999.977) rotate(-45)" width="9.698" />
          </g>
          <g>
            <rect fill="#606060" height="1" transform="translate(672.154 -2004.552) rotate(-45)" width="3.233" />
          </g>
        </g>
        <g transform="translate(-1519 -807)">
          <g>
            <path d="M1538,808h-18v18h18V808Zm-16,16V810h14v14Z" fill="currentColor" />
          </g>
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
