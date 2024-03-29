import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SortingArrows({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(-40)">
          <g>
            <g fill="none" strokeMiterlimit="10">
              <path d="M57.536,11.636,55,14.172V2H53V14.172l-2.536-2.536L49.05,13.05,54,18l4.95-4.95Z" stroke="none" />
              <path
                d="M 54 18 L 49.05022811889648 13.05023002624512 L 50.46448135375977 11.6360502243042 L 53 14.17156982421875 L 53 2 L 55 2 L 55 14.17156982421875 L 57.53551864624023 11.6360502243042 L 58.94977188110352 13.05023002624512 L 54 18 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
            <g fill="none" strokeMiterlimit="10">
              <path d="M50.95,6.95,46,2,41.05,6.95l1.414,1.414L45,5.828V18h2V5.828l2.536,2.536Z" stroke="none" />
              <path
                d="M 46 2 L 50.94977188110352 6.949709892272949 L 49.53551864624023 8.363949775695801 L 47 5.828370094299316 L 47 18 L 45 18 L 45 5.828370094299316 L 42.46448135375977 8.363949775695801 L 41.05022811889648 6.949709892272949 L 46 2 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
          </g>
          <rect fill="none" height="20" transform="translate(40)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
