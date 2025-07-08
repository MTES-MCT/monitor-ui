import { IconBox } from '@elements/IconBox'

import type { IconProps } from '@types_/definitions'

export function GroupPerson({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="currentColor" height="24" viewBox="0 -960 960 960" width="24" {...nativeProps}>
        <path d="m40-160v-112q0-34 17.5-62.5t46.5-43.5q62-31 126-46.5t130-15.5q66 0 130 15.5t126 46.5q29 15 46.5 43.5t17.5 62.5v112zm720 0v-120q0-44-24.5-84.5t-69.5-69.5q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120zm-400-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81t-41.5-71q14-5 28-6.5t28-1.5q66 0 113 47t47 113zm-640 400h480v-32q0-11-5.5-20t-14.5-14q-54-27-109-40.5t-111-13.5q-56 0-111 13.5t-109 40.5q-9 5-14.5 14t-5.5 20zm240-320q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5z" />
      </svg>
    </IconBox>
  )
}
