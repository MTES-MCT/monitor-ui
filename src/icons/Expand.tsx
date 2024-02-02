import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Expand({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20.076" viewBox="0 0 20.068 20.076" width="20.068" {...nativeProps}>
        <path
          d="M12114.779,15768.074v-1.512h5.719l-6.488-6.49,1.061-1.061,6.5,6.482v-5.713h1.5v8.293Zm-10.271-17.5v5.719H12103v-8.3h8.293v1.512h-5.719l6.488,6.49-1.068,1.066Z"
          fill="currentColor"
          transform="translate(-12103.002 -15747.998)"
        />
      </svg>
    </IconBox>
  )
}
