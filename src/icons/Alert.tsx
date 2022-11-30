import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Alert({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Alert" transform="translate(-220 -208)">
          <path
            d="M295,13V8a5,5,0,0,0-4-4.9V1h-2V3.1A5,5,0,0,0,285,8v5l-2,2v2h4.5a2.5,2.5,0,0,0,5,0H297V15Zm-5,5a1,1,0,0,1-1-1h2A1,1,0,0,1,290,18Zm1.486-3H285l2-2V8a3,3,0,0,1,6,0v5l2,2Z"
            data-name="Tracé 1348"
            fill="currentColor"
            id="Tracé_1348"
            transform="translate(-60 208)"
          />
          <rect
            data-name="Rectangle 6090"
            fill="none"
            height="20"
            id="Rectangle_6090"
            transform="translate(220 208)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
