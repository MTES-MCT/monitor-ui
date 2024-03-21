import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Unlink({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g>
          <rect fill="currentColor" height="22" transform="translate(17.071 1.515) rotate(45)" width="2" />
          <g>
            <path d="M3.22,14.659l1.67-1.67A3,3,0,0,1,5,7H9V5H5a4.992,4.992,0,0,0-1.78,9.659Z" fill="currentColor" />
          </g>
          <g>
            <path d="M8.879,9H6v2h.879Z" fill="currentColor" />
            <path d="M10.414,11l2-2H9.586l-2,2Z" fill="currentColor" />
            <path d="M11.121,11H14V9h-.879Z" fill="currentColor" />
          </g>
          <g>
            <path
              d="M16.78,5.341l-1.67,1.67A3,3,0,0,1,15,13H11v2h4a4.992,4.992,0,0,0,1.78-9.659Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
