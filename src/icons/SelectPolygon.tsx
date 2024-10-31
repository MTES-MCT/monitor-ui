import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function SelectPolygon({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <rect fill="none" height="20" width="20" />
        <g transform="translate(-0.1 -0.081)">
          <g>
            <path d="M13.989,5.345,12.036,2.576l-3.354.479L8.4,1.075,12.964.424l2.66,3.767Z" fill="currentColor" />
            <path d="M3,7H1V2.133l4.818-.688L6.1,3.425,3,3.867Z" fill="currentColor" />
            <path d="M5.237,16.554,1,14.646V10H3v3.354l3.058,1.376Z" fill="currentColor" />
            <path d="M12.312,19.737l-4.37-1.967.82-1.824,2.925,1.316,1.948-2.548,1.588,1.215Z" fill="currentColor" />
            <path d="M16.864,13.785,15.276,12.57l1.982-2.594L15.376,7.31l1.635-1.154,2.73,3.868Z" fill="currentColor" />
          </g>
        </g>
      </svg>
    </IconBox>
  )
}
