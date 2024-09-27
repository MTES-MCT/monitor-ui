import { Level } from '@constants'
import { THEME } from '@theme'
import { AttentionFilled, Check, Info } from 'icons'

import type { IconProps } from '@types_/definitions'
import type { FunctionComponent } from 'react'

// TODO Check default icon color with Adeline.
export const DEFAULT_ICON_COLOR: Record<Level, string> = {
  [Level.ERROR]: THEME.color.maximumRed,
  [Level.INFO]: THEME.color.blueGray,
  [Level.SUCCESS]: THEME.color.mediumSeaGreen,
  [Level.WARNING]: THEME.color.goldenPoppy
}

// TODO Check default icons with Adeline.
export const DEFAUT_ICON: Record<Level, FunctionComponent<IconProps>> = {
  [Level.ERROR]: AttentionFilled,
  [Level.INFO]: Info,
  [Level.SUCCESS]: Check,
  [Level.WARNING]: AttentionFilled
}
