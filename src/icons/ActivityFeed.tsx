import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types'

export function ActivityFeed({ color, size, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(40 -41)">
          <g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-22 44) rotate(90)"
            >
              <rect height="11" stroke="none" width="2" />
              <rect fill="none" height="9" x="1" y="1" />
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-25 50) rotate(90)"
            >
              <rect height="8" stroke="none" width="2" />
              <rect fill="none" height="6" x="1" y="1" />
            </g>
            <g
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="2"
              transform="translate(-23 56) rotate(90)"
            >
              <rect height="10" stroke="none" width="2" />
              <rect fill="none" height="8" x="1" y="1" />
            </g>
            <g fill="none" strokeMiterlimit="10">
              <path
                d="M-34,51a1.994,1.994,0,0,0-1-1.723V46.723A1.994,1.994,0,0,0-34,45a2,2,0,0,0-2-2,2,2,0,0,0-2,2,1.994,1.994,0,0,0,1,1.723v2.554A1.994,1.994,0,0,0-38,51a1.994,1.994,0,0,0,1,1.723v2.554A1.994,1.994,0,0,0-38,57a2,2,0,0,0,2,2,2,2,0,0,0,2-2,1.994,1.994,0,0,0-1-1.723V52.723A1.994,1.994,0,0,0-34,51Z"
                stroke="none"
              />
              <path
                d="M -36 43 C -34.89500045776367 43 -34 43.89500045776367 -34 45 C -34 45.73799896240234 -34.40499877929688 46.37599945068359 -35 46.72299957275391 L -35 49.27700042724609 C -34.40499877929688 49.62400054931641 -34 50.26200103759766 -34 51 C -34 51.73799896240234 -34.40499877929688 52.37599945068359 -35 52.72299957275391 L -35 55.27700042724609 C -34.40499877929688 55.62400054931641 -34 56.26200103759766 -34 57 C -34 58.10499954223633 -34.89500045776367 59 -36 59 C -37.10499954223633 59 -38 58.10499954223633 -38 57 C -38 56.26200103759766 -37.59500122070313 55.62400054931641 -37 55.27700042724609 L -37 52.72299957275391 C -37.59500122070313 52.37599945068359 -38 51.73799896240234 -38 51 C -38 50.26200103759766 -37.59500122070313 49.62400054931641 -37 49.27700042724609 L -37 46.72299957275391 C -37.59500122070313 46.37599945068359 -38 45.73799896240234 -38 45 C -38 43.89500045776367 -37.10499954223633 43 -36 43 Z"
                fill="currentColor"
                stroke="none"
              />
            </g>
          </g>
          <rect fill="none" height="20" transform="translate(-40 41)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
