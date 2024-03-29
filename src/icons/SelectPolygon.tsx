import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SelectPolygon({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(120 -41)">
          <g>
            <path d="M-114.675,45.646l-1.875-.7,1.113-2.994h3.2v2h-1.8Z" fill="currentColor" />
            <rect fill="currentColor" height="2" transform="translate(-117.788 48.28) rotate(-69.601)" width="2.539" />
            <path d="M-116.974,54.383l-2.266-2.192,1.1-2.956,1.875.7-.643,1.731,1.326,1.284Z" fill="currentColor" />
            <rect
              fill="currentColor"
              height="2.664"
              transform="matrix(0.695, -0.719, 0.719, 0.695, -116.207, 55.124)"
              width="2"
            />
            <path d="M-111.067,60.1l-2.459-2.379,1.391-1.437,1.135,1.1,1.185-1.041,1.32,1.5Z" fill="currentColor" />
            <path d="M-107.521,56.983l-1.318-1.5,1.4-1.174,1.559-.7.822,1.822-1.423.643Z" fill="currentColor" />
            <path d="M-103.869,54.893l-.82-1.824,1.57-.707-.3-1.7,1.971-.346.565,3.229Z" fill="currentColor" />
            <rect
              fill="currentColor"
              height="2.862"
              transform="translate(-104.11 46.717) rotate(-9.96)"
              width="2.001"
            />
            <path d="M-104.308,45.589l-.287-1.635h-1.66v-2h3.34l.578,3.289Z" fill="currentColor" />
            <rect fill="currentColor" height="2" transform="translate(-110.911 41.954)" width="3.326" />
          </g>
          <rect fill="none" height="20" transform="translate(-120 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
