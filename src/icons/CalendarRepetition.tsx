import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function CalendarRepetition({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <defs>
          <clipPath>
            <rect fill="none" height="20" width="20" />
          </clipPath>
        </defs>
        <path d="M12,0V2H5V0H3V2H0V18H9V16H2V8H15V9h2V2H14V0Z" fill="currentColor" transform="translate(0)" />
        <g transform="translate(0)">
          <g clipPath="url(#clip-path)">
            <path
              d="M18.5,10.5v.971A4.918,4.918,0,0,0,15,10a5,5,0,1,0,4.745,6.5H17.583a3,3,0,1,1-.366-3.5H16v1.5h4v-4Z"
              fill="currentColor"
            />
            <rect fill="#fff" height="2" transform="translate(2 4)" width="13" />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
