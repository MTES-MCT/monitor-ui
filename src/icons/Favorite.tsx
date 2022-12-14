import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Favorite({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $size={size} color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-300 -208)">
          <path
            d="M370,5.015l1.763,3.568,3.936.571-2.848,2.773.673,3.919L370,13.995l-3.524,1.851.673-3.919L364.3,9.154l3.936-.571L370,5.015M370,.5l-3.09,6.254-6.91,1,5,4.869L363.82,19.5,370,16.254l6.18,3.246L375,12.626l5-4.869-6.91-1L370,.5Z"
            fill="currentColor"
            transform="translate(-60 208)"
          />
          <rect fill="none" height="20" transform="translate(300 208)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
