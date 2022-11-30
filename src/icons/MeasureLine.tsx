import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function MeasureLine({ color, ...nativeProps }: IconProps) {
  return (
    <IconBox color={color}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g id="Measure_line" transform="translate(280 -82)">
          <path
            d="M-260,87h-20V97h20Zm-1.818,8.333h-16.363V88.667h1.818V92h1.818V88.667h1.818V92h1.818V88.667h1.819V92h1.818V88.667h1.818V92h1.819V88.667h1.818Z"
            data-name="Tracé 231"
            fill="currentColor"
            id="Tracé_231"
          />
          <rect
            data-name="Rectangle 6163"
            fill="none"
            height="20"
            id="Rectangle_6163"
            transform="translate(-280 82)"
            width="20"
          />
        </g>
      </svg>
    </IconBox>
  )
}
