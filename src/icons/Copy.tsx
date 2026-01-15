import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Copy({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M2.5 15.4167V13.75H4.16667V15.4167H2.5ZM2.5 12.5V10.8333H4.16667V12.5H2.5ZM2.5 9.58334V7.91667H4.16667V9.58334H2.5ZM5.41667 18.3333V16.6667H7.08333V18.3333H5.41667ZM5.83333 15V1.66667H16.6667V15H5.83333ZM7.5 13.3333H15V3.33334H7.5V13.3333ZM8.33333 18.3333V16.6667H10V18.3333H8.33333ZM2.5 18.3333V16.6667H4.16667V18.3333H2.5ZM11.25 18.3333V16.6667H12.9167V18.3333H11.25ZM2.5 6.66667V5.00001H4.16667V6.66667H2.5Z"
          fill="currentColor"
        />
      </svg>
    </IconBox>
  )
}
