import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function DoubleChevron({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g>
          <g fill="none" strokeMiterlimit="10">
            <path d="M16.585,3.085,10,9.671,3.415,3.085,2,4.5l6.585,6.585L10,12.5l1.415-1.415L18,4.5Z" stroke="none" />
            <path
              d="M 3.414670944213867 3.085323333740234 L 10 9.670653343200684 L 16.58533096313477 3.085323333740234 L 18 4.500003814697266 L 10 12.50000381469727 L 2 4.500003814697266 L 3.414670944213867 3.085323333740234 Z"
              fill="currentColor"
              stroke="none"
            />
          </g>
          <g fill="none" strokeMiterlimit="10">
            <path d="M16.585,8.085,10,14.671,3.415,8.085,2,9.5l6.585,6.585L10,17.5l1.415-1.415L18,9.5Z" stroke="none" />
            <path
              d="M 3.414670944213867 8.085323333740234 L 10 14.67065334320068 L 16.58533096313477 8.085323333740234 L 18 9.500003814697266 L 10 17.50000381469727 L 2 9.500003814697266 L 3.414670944213867 8.085323333740234 Z"
              fill="currentColor"
              stroke="none"
            />
          </g>
        </g>
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
