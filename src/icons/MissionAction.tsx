import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function MissionAction({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="24.798" viewBox="0 0 20.289 24.798" width="20.289" {...nativeProps}>
        <path
          d="M18.781,2.254h3.382a1.127,1.127,0,0,1,1.127,1.127V23.671A1.127,1.127,0,0,1,22.162,24.8H4.127A1.127,1.127,0,0,1,3,23.671V3.382A1.127,1.127,0,0,1,4.127,2.254H7.509V0H9.763V2.254h6.763V0h2.254ZM7.509,9.017v2.254H18.781V9.017Zm0,4.509v2.254H18.781V13.526Z"
          fill="currentColor"
          transform="translate(-3)"
        />
      </svg>
    </IconBox>
  )
}
