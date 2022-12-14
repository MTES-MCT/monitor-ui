import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function MeasureCircle({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(160 -82)">
          <path
            d="M-150,83a9,9,0,0,0-9,9,9,9,0,0,0,9,9,9,9,0,0,0,9-9A9,9,0,0,0-150,83Zm0,16a7.008,7.008,0,0,1-7-7,7.008,7.008,0,0,1,7-7,6.953,6.953,0,0,1,4.184,1.4l-1.43,1.43A4.964,4.964,0,0,0-150,87a5,5,0,0,0-5,5,5,5,0,0,0,5,5,5,5,0,0,0,5-5,4.964,4.964,0,0,0-.832-2.754l1.43-1.43A6.953,6.953,0,0,1-143,92,7.008,7.008,0,0,1-150,99Zm3-7a3,3,0,0,1-3,3,3,3,0,0,1-3-3,3,3,0,0,1,3-3,2.965,2.965,0,0,1,1.285.3l-1.992,1.992,1.414,1.414,1.992-1.992A2.965,2.965,0,0,1-147,92Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(-160 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
