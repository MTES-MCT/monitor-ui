import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function Close({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color} size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Close" transform="translate(160 -82)">
          <g data-name="Tracé 1377" fill="none" id="Tracé_1377" strokeMiterlimit="10">
            <path
              d="M-142,85.415-143.415,84-150,90.585-156.585,84-158,85.415-151.415,92-158,98.585l1.415,1.415L-150,93.415l6.585,6.585L-142,98.585-148.585,92Z"
              stroke="none"
            />
            <path
              d="M -156.5853271484375 84 L -150 90.5853271484375 L -143.4146728515625 84 L -142 85.4146728515625 L -148.5853271484375 92 L -142 98.5853271484375 L -143.4146728515625 100 L -150 93.4146728515625 L -156.5853271484375 100 L -158 98.5853271484375 L -151.4146728515625 92 L -158 85.4146728515625 L -156.5853271484375 84 Z"
              fill="currentColor"
              stroke="none"
            />
          </g>
          <rect
            data-name="Rectangle 6129"
            fill="none"
            height="20"
            id="Rectangle_6129"
            transform="translate(-160 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
