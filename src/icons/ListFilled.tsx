import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function ListFilled({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="none" height="26" viewBox="0 0 26 26" width="26" {...nativeProps}>
        <g>
          <g>
            <path
              d="M6.5001 6.50005C6.5001 7.577 5.62705 8.45005 4.5501 8.45005C3.47314 8.45005 2.6001 7.577 2.6001 6.50005C2.6001 5.42309 3.47314 4.55005 4.5501 4.55005C5.62705 4.55005 6.5001 5.42309 6.5001 6.50005Z"
              fill="currentColor"
            />
            <path d="M7.8001 5.20005H23.4001V7.80005H7.8001V5.20005Z" fill="currentColor" />
            <path d="M23.4001 14.3H7.8001V11.7H23.4001V14.3Z" fill="currentColor" />
            <path d="M7.8001 20.8H23.4001V18.2H7.8001V20.8Z" fill="currentColor" />
            <path
              d="M4.5501 14.95C5.62705 14.95 6.5001 14.077 6.5001 13C6.5001 11.9231 5.62705 11.05 4.5501 11.05C3.47314 11.05 2.6001 11.9231 2.6001 13C2.6001 14.077 3.47314 14.95 4.5501 14.95Z"
              fill="currentColor"
            />
            <path
              d="M6.5001 19.5C6.5001 20.577 5.62705 21.4501 4.5501 21.4501C3.47314 21.4501 2.6001 20.577 2.6001 19.5C2.6001 18.4231 3.47314 17.55 4.5501 17.55C5.62705 17.55 6.5001 18.4231 6.5001 19.5Z"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
