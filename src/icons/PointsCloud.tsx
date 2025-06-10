import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function PointsCloud({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M8 7.5C8 8.88071 6.88071 10 5.5 10C4.11929 10 3 8.88071 3 7.5C3 6.11929 4.11929 5 5.5 5C6.88071 5 8 6.11929 8 7.5Z"
          fill="black"
        />
        <path
          d="M12 4.5C12 5.32843 11.3284 6 10.5 6C9.67157 6 9 5.32843 9 4.5C9 3.67157 9.67157 3 10.5 3C11.3284 3 12 3.67157 12 4.5Z"
          fill="black"
        />
        <path
          d="M9 15C9 16.1046 8.10457 17 7 17C5.89543 17 5 16.1046 5 15C5 13.8954 5.89543 13 7 13C8.10457 13 9 13.8954 9 15Z"
          fill="black"
        />
        <path
          d="M17 11.5C17 13.433 15.433 15 13.5 15C11.567 15 10 13.433 10 11.5C10 9.567 11.567 8 13.5 8C15.433 8 17 9.567 17 11.5Z"
          fill="black"
        />
      </svg>
    </IconBox>
  )
}
