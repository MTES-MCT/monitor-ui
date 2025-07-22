import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Contact({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="currentColor" height="24" viewBox="0 -960 960 960" width="24" {...nativeProps}>
        <path d="m320-400h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71zm160-160q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5zm-400 480v-720q0-33 23.5-56.5t56.5-23.5h640q33 0 56.5 23.5t23.5 56.5v480q0 33-23.5 56.5t-56.5 23.5h-560zm126-240h594v-480h-640v525zm-46 0v-480z" />
      </svg>
    </IconBox>
  )
}
