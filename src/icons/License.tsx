import { IconBox } from '../elements/IconBox'

import type { IconProps } from '../types/definitions'

export function License({ color, size, title, ...nativeProps }: IconProps) {
  return (
    <IconBox $color={color} $size={size} title={title}>
      <svg fill="currentColor" height="24" viewBox="0 -960 960 960" width="24" {...nativeProps}>
        <path d="m480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35zm-240 400v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70zm-160 161 160-41 160 41v-124q-35 20-75.5 31.5t-84.5 11.5q-44 0-84.5-11.5t-75.5-31.5z" />
      </svg>
    </IconBox>
  )
}
