import { Level } from '@constants'
import classnames from 'classnames'
import { type FunctionComponent, type HTMLAttributes, type ReactNode } from 'react'
import styled from 'styled-components'

import { DEFAUT_ICON, DEFAULT_ICON_COLOR } from './constants'
import { getStyledCssFromLevel } from './utils'

import type { IconProps } from '@types_/definitions'

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  Icon?: FunctionComponent<IconProps> | undefined
  children: ReactNode | string
  iconColor?: Level | undefined
  level?: Level | undefined
  withoutIcon?: boolean
}
export function Message({
  children,
  className,
  Icon,
  iconColor,
  level = Level.INFO,
  withoutIcon,
  ...nativeProps
}: MessageProps) {
  const controlledClassName = classnames('Component-Message', className)
  const ControlledIcon = Icon ?? DEFAUT_ICON[level]
  const controlledIconColor = iconColor ?? DEFAULT_ICON_COLOR[level]

  return (
    <Box $level={level} className={controlledClassName} {...nativeProps}>
      {!withoutIcon && <ControlledIcon color={controlledIconColor} />}
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

const Box = styled.div<{
  $backgroundColor?: string | undefined
  $color?: string | undefined
  $level: Level
}>`
  ${getStyledCssFromLevel()}

  display: flex;
  font-size: 13px;
  padding: 16px;
`
