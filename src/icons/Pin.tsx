import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Pin({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-240)">
          <path
            d="M250.94,2l-1.412,1.412.706.707L246.7,7.65h-2.824l-1.412,1.413,3.518,3.52-3.985,4L243.413,18l3.985-4,3.54,3.542,1.413-1.412V13.3l3.531-3.531.706.706L258,9.064Zm0,9.888v2.825l-5.648-5.651h2.824l3.531-3.531,2.824,2.825Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(240)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
