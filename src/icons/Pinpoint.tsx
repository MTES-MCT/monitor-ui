import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Pinpoint({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-160)">
          <path d="M164,8c0,5,6,10,6,10" fill="currentColor" />
          <path
            d="M170,2a5.961,5.961,0,0,0-5.944,6.777c.016.135.038.27.062.4l.011.055C164.964,13.792,170,18,170,18s5.036-4.208,5.871-8.763l.011-.055c.024-.135.046-.27.062-.4A5.961,5.961,0,0,0,170,2Zm0,9a3,3,0,1,1,3-3A3,3,0,0,1,170,11Z"
            fill="currentColor"
          />
          <rect fill="none" height="20" transform="translate(160)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
