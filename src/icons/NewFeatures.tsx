import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function NewFeatures({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path d="M0,0H20V20H0Z" fill="none" />
        <path
          d="M19.167,10,17.133,7.683l.284-3.066-3.009-.684-1.575-2.65L10,2.5,7.167,1.283,5.592,3.933l-3.009.675.284,3.067L.833,10l2.034,2.317-.284,3.075,3.009.683,1.575,2.65L10,17.5l2.833,1.217,1.575-2.65,3.009-.684-.284-3.066Zm-3.759,1.758.217,2.325-2.283.517L12.15,16.608,10,15.683l-2.15.925L6.658,14.6l-2.283-.517.217-2.333L3.05,10,4.592,8.233,4.375,5.917l2.283-.509L7.85,3.4,10,4.317l2.15-.925L13.342,5.4l2.283.517-.217,2.325L16.95,10ZM9.167,12.5h1.666v1.667H9.167Zm0-6.667h1.666v5H9.167Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
