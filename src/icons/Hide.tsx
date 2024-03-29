import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function Hide({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg height="20" viewBox="0 0 20 20" width="20" {...nativeProps}>
        <path
          d="M15.635,5.779l2.143-2.143L16.364,2.222l-2.55,2.55A9.786,9.786,0,0,0,10,4a9.674,9.674,0,0,0-9,6,9.532,9.532,0,0,0,3.365,4.22L2.222,16.364l1.414,1.414,2.55-2.55A9.786,9.786,0,0,0,10,16a9.674,9.674,0,0,0,9-6A9.541,9.541,0,0,0,15.635,5.779ZM6,10a4,4,0,0,1,4-4,3.96,3.96,0,0,1,2.02.566L10.71,7.875A2.225,2.225,0,0,0,10,7.75,2.25,2.25,0,0,0,7.75,10a2.225,2.225,0,0,0,.125.71L6.566,12.02A3.96,3.96,0,0,1,6,10Zm4,4a3.96,3.96,0,0,1-2.02-.566l1.31-1.309a2.225,2.225,0,0,0,.71.125A2.25,2.25,0,0,0,12.25,10a2.225,2.225,0,0,0-.125-.71l1.309-1.31A3.96,3.96,0,0,1,14,10,4,4,0,0,1,10,14Z"
          fill="currentColor"
        />
        <rect fill="none" height="20" width="20" />
      </svg>
    </IconBox>
  )
}
