import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function MeasureAngle({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <g transform="translate(200 -82)">
          <g>
            <path
              d="M-183.361,98a14.79,14.79,0,0,0-.559-2.434l-1.9.618A12.726,12.726,0,0,1-185.394,98H-196V87.514a12.554,12.554,0,0,1,2.139.507l.649-1.893A14.771,14.771,0,0,0-196,85.471V84h-2v16h16V98Z"
              fill="currentColor"
            />
            <path
              d="M-186.509,94.491l1.795-.883a14.792,14.792,0,0,0-2.029-3.081l-1.52,1.3A12.726,12.726,0,0,1-186.509,94.491Z"
              fill="currentColor"
            />
            <path
              d="M-188.223,89.024a14.915,14.915,0,0,0-3.048-2.073l-.911,1.781a12.857,12.857,0,0,1,2.638,1.794Z"
              fill="currentColor"
            />
          </g>
          <rect fill="none" height="20" transform="translate(-200 82)" width="20" />
        </g>
      </svg>
    </IconBox>
  )
}
