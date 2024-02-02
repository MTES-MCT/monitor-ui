import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Focus({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(320 -82)">
          <g>
            <g fill="none" strokeMiterlimit="10">
              <path d="M-319,83v7h2V85h5V83Z" stroke="none" />
              <path
                d="M -319 83 L -312 83 L -312 85 L -317 85 L -317 90 L -319 90 L -319 83 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g fill="none" strokeMiterlimit="10">
              <path d="M-317,94h-2v7h7V99h-5Z" stroke="none" />
              <path
                d="M -319 94 L -317 94 L -317 99 L -312 99 L -312 101 L -319 101 L -319 94 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g fill="none" strokeMiterlimit="10">
              <path d="M-308,83v2h5v5h2V83Z" stroke="none" />
              <path
                d="M -308 83 L -301 83 L -301 90 L -303 90 L -303 85 L -308 85 L -308 83 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g fill="none" strokeMiterlimit="10">
              <path d="M-303,99h-5v2h7V94h-2Z" stroke="none" />
              <path
                d="M -301 101 L -308 101 L -308 99 L -303 99 L -303 94 L -301 94 L -301 101 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
          </g>
          <rect fill="none" height="20" transform="translate(-320 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
