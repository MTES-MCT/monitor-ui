import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Search({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(200 -41)">
          <g fill="none" strokeMiterlimit="10">
            <path
              d="M-181.262,58.262l-5.111-5.111A6.958,6.958,0,0,0-185,49a7,7,0,0,0-7-7,7,7,0,0,0-7,7,7,7,0,0,0,7,7,6.958,6.958,0,0,0,4.151-1.373l5.111,5.111ZM-197,49a5.006,5.006,0,0,1,5-5,5.006,5.006,0,0,1,5,5,5.006,5.006,0,0,1-5,5A5.006,5.006,0,0,1-197,49Z"
              stroke="none"
            />
            <path
              d="M -182.7380065917969 59.73799896240234 L -187.8489990234375 54.62699890136719 C -189.0110015869141 55.48600006103516 -190.4440002441406 56 -192 56 C -195.8659973144531 56 -199 52.86600112915039 -199 49 C -199 45.13399887084961 -195.8659973144531 42 -192 42 C -188.1340026855469 42 -185 45.13399887084961 -185 49 C -185 50.55599975585938 -185.5140075683594 51.98899841308594 -186.3730010986328 53.1510009765625 L -181.2619934082031 58.26200103759766 L -182.7380065917969 59.73799896240234 Z M -192 44 C -194.7570037841797 44 -197 46.24300003051758 -197 49 C -197 51.75699996948242 -194.7570037841797 54 -192 54 C -189.2429962158203 54 -187 51.75699996948242 -187 49 C -187 46.24300003051758 -189.2429962158203 44 -192 44 Z"
              fill="currentColor"
              stroke="none"
            />
          </g>
          <rect fill="none" height="20" transform="translate(-200 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}