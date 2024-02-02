import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Alert({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <path
          d="M18,14.037l-2.059-1.98V7.82A5.528,5.528,0,0,0,11.5,2.58V0h-3V2.568A5.539,5.539,0,0,0,4.059,7.82v4.237L2,14.037v2.349H6.755c-.007.091-.019.181-.018.273a3.264,3.264,0,1,0,6.526,0c0-.092-.012-.182-.019-.273H18Zm-6.737,2.622a1.263,1.263,0,1,1-2.526,0,1.327,1.327,0,0,1,.027-.269h2.471A1.366,1.366,0,0,1,11.263,16.659Zm.455-2.322-4.124-.006,0,.006H4.61l1.45-1.394V7.82c0-1.863,1.749-3.379,3.981-3.379a3.671,3.671,0,0,1,3.9,3.379v5.123l1.45,1.394Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
