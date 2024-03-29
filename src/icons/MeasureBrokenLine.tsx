import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function MeasureBrokenLine({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(240 -82)">
          <path
            d="M-222.5,87a2,2,0,0,0-2,2,1.978,1.978,0,0,0,.192.842L-227,93.071a1.974,1.974,0,0,0-.5-.071,1.974,1.974,0,0,0-.5.071l-2.691-3.229A1.978,1.978,0,0,0-230.5,89a2,2,0,0,0-2-2,2,2,0,0,0-2,2,1.978,1.978,0,0,0,.192.842L-237,93.071a1.974,1.974,0,0,0-.5-.071,2,2,0,0,0-2,2,2,2,0,0,0,2,2,2,2,0,0,0,2-2,1.978,1.978,0,0,0-.192-.842L-233,90.929a1.974,1.974,0,0,0,.5.071,1.974,1.974,0,0,0,.5-.071l2.691,3.229A1.978,1.978,0,0,0-229.5,95a2,2,0,0,0,2,2,2,2,0,0,0,2-2,1.978,1.978,0,0,0-.192-.842L-223,90.929a1.974,1.974,0,0,0,.5.071,2,2,0,0,0,2-2A2,2,0,0,0-222.5,87Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(-240 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
