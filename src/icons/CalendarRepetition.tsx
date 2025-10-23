import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function CalendarRepetition({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <defs>
          <clipPath>
            <rect fill="currentColor" height="20" transform="translate(0 0)" width="20" />
          </clipPath>
          <clipPath>
            <rect fill="none" height="20" width="20" />
          </clipPath>
        </defs>
        <g transform="translate(0 0)">
          <g clipPath="url(#clip-path)">
            <path
              d="M18.5,10.5v.971A4.917,4.917,0,0,0,15,10a5,5,0,1,0,4.744,6.5H17.582a3,3,0,1,1-.366-3.5H16v1.5h4v-4H18.5Z"
              fill="currentColor"
            />
            <path d="M14,2V0H12V2H5V0H3V2H0V18H9V16H2V8H15V9h2V2Zm1,4H2V4H15Z" fill="currentColor" />
          </g>
        </g>
        <g transform="translate(0 0)">
          <g clipPath="url(#clip-path-2)">
            <rect fill="none" height="2" transform="translate(2 4)" width="13" />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
