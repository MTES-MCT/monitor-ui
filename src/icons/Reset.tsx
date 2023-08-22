import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Reset({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <g>
          <path
            d="M17.37,15.155A8.992,8.992,0,0,0,4.124,3.192l1,1.793,0,.01A6.993,6.993,0,0,1,17,10H14.495l1.75,3.142-.012.028.017-.019.92,1.653.2.361Z"
            fill="currentColor"
          />
          <path
            d="M14.888,15A6.994,6.994,0,0,1,3,10H5.505L3.756,6.856l.01-.023-.015.014-.373-.67L2.634,4.838h0l0-.006v.011A8.992,8.992,0,0,0,15.877,16.806l-1-1.792Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </IconBox>
  )
}
