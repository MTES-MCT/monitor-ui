import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SelectRectangle({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(160 -41)">
          <g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-152 44) rotate(-90)"
            >
              <rect height="4" stroke="none" width="2" />
              <rect fill="none" height="2" x="1" y="1" />
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-152 60) rotate(-90)"
            >
              <rect height="4" stroke="none" width="2" />
              <rect fill="none" height="2" x="1" y="1" />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-159 49)">
              <rect height="4" stroke="none" width="2" />
              <rect fill="none" height="2" x="1" y="1" />
            </g>
            <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" transform="translate(-143 49)">
              <rect height="4" stroke="none" width="2" />
              <rect fill="none" height="2" x="1" y="1" />
            </g>
            <g>
              <g fill="none" strokeMiterlimit="10">
                <path d="M-159,42v5h2V44h3V42Z" stroke="none" />
                <path
                  d="M -159 42 L -154 42 L -154 44 L -157 44 L -157 47 L -159 47 L -159 42 Z"
                  fill="currentColor"
                  stroke="none"
                />
              </g>
              <g fill="none" strokeMiterlimit="10">
                <path d="M-146,42v2h3v3h2V42Z" stroke="none" />
                <path
                  d="M -146 42 L -141 42 L -141 47 L -143 47 L -143 44 L -146 44 L -146 42 Z"
                  fill="currentColor"
                  stroke="none"
                />
              </g>
            </g>
            <g>
              <g fill="none" strokeMiterlimit="10">
                <path d="M-157,55h-2v5h5V58h-3Z" stroke="none" />
                <path
                  d="M -159 55 L -157 55 L -157 58 L -154 58 L -154 60 L -159 60 L -159 55 Z"
                  fill="currentColor"
                  stroke="none"
                />
              </g>
              <g fill="none" strokeMiterlimit="10">
                <path d="M-143,55v3h-3v2h5V55Z" stroke="none" />
                <path
                  d="M -143 55 L -141 55 L -141 60 L -146 60 L -146 58 L -143 58 L -143 55 Z"
                  fill="currentColor"
                  stroke="none"
                />
              </g>
            </g>
          </g>
          <rect fill="none" height="20" transform="translate(-160 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
