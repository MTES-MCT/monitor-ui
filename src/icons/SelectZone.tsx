import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SelectZone({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(80 -41)">
          <g>
            <g>
              <path d="M-74.675,45.646l-1.875-.7,1.113-2.994h3.2v2h-1.8Z" fill="currentColor" />
              <rect fill="currentColor" height="2" transform="translate(-77.788 48.28) rotate(-69.601)" width="2.539" />
              <path d="M-77.377,54.526-79.2,52.089l1.06-2.854,1.875.7-.681,1.833,1.172,1.564Z" fill="currentColor" />
              <path d="M-74.679,58.132l-1.9-2.534,1.6-1.2,1.1,1.47,1.779-.445.486,1.939Z" fill="currentColor" />
              <path d="M-62.532,51.889l-1.66-1.115,1.122-1.67-.63-1.91,1.9-.625.935,2.838Z" fill="currentColor" />
              <path d="M-64.211,45.641l-.556-1.687h-1.776v-2h3.224l1.009,3.062Z" fill="currentColor" />
              <rect fill="currentColor" height="2" transform="translate(-70.975 41.954)" width="3.166" />
            </g>
            <path
              d="M-67.806,56.455l2.689,3.869,2.328-1.612-2.687-3.877,2.71-1.872L-72.02,47.9-70.5,58.35Z"
              fill="currentColor"
            />
          </g>
          <rect fill="none" height="20" transform="translate(-80 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
