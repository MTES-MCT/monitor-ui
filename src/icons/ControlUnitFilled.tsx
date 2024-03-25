import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function ControlUnitFilled({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="18.25" viewBox="0 0 14 18.25" width="14" {...nativeProps}>
        <g transform="translate(77 204.25)">
          <rect fill="currentColor" height="12" transform="translate(-64 -188) rotate(90)" width="2" />
          <path
            d="M-67.7-201h-4.6a2,2,0,0,0-1.977,1.675L-76-189h12l-1.721-10.325A2,2,0,0,0-67.7-201Z"
            fill="currentColor"
          />
          <rect fill="currentColor" height="2.25" transform="translate(-70.75 -204.25)" width="1.5" />
          <rect fill="currentColor" height="2.25" transform="translate(-64.061 -203) rotate(45)" width="1.5" />
          <rect fill="currentColor" height="2.25" transform="translate(-77 -201.939) rotate(-45)" width="1.5" />
        </g>
      </svg>
    </IconBox>
  )
}
