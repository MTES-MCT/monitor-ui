import { type FunctionComponent, type HTMLAttributes, type ReactNode } from 'react'
import styled from 'styled-components'

import { DEFAUT_ICON, DEFAULT_ICON_COLOR } from './constants'
import { getStyledCssFromLevel } from './utils'
import { Level } from '../../constants'

import type { IconProps } from '@types_/definitions'

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  Icon?: FunctionComponent<IconProps> | undefined
  children: ReactNode | string
  iconColor?: Level | undefined
  level?: Level | undefined
}
export function Message({ children, Icon, iconColor, level = Level.INFO, ...nativeProps }: MessageProps) {
  const ControlledIcon = Icon ?? DEFAUT_ICON[level]
  const controlledIconColor = iconColor ?? DEFAULT_ICON_COLOR[level]

  return (
    <Box $level={level} {...nativeProps}>
      <ControlledIcon color={controlledIconColor} />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Box>
  )
}

const ChildrenContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Box = styled.span<{
  $backgroundColor?: string | undefined
  $color?: string | undefined
  $level: Level
}>`
  ${getStyledCssFromLevel()}

  border-width: 1px;
  border-radius: 2px;
  display: flex;
  font-size: 13px;
  padding: 16px;
`
