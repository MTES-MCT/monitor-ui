import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { PrimaryButton, SecondaryButton } from './Button'
import { Accent, Size } from '../constants'
import { stopMouseEventPropagation } from '../utils/stopMouseEventPropagation'

import type { IconProps } from '../types'
import type { ButtonHTMLAttributes, FunctionComponent, MouseEvent } from 'react'

const ICON_SIZE_IN_PX: Record<Size, number> = {
  [Size.LARGE]: 26,
  [Size.NORMAL]: 20,
  [Size.SMALL]: 14
}

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  Icon: FunctionComponent<IconProps>
  accent?: Accent | undefined
  color?: string | undefined
  /** In pixels, override `size` prop default values */
  iconSize?: number | undefined
  size?: Size | undefined
}
export function IconButton({
  accent = Accent.PRIMARY,
  color,
  Icon,
  iconSize,
  onClick,
  size = Size.NORMAL,
  type = 'button',
  ...nativeProps
}: IconButtonProps) {
  const children = useMemo(
    () => <Icon color={color} size={iconSize || ICON_SIZE_IN_PX[size]} />,
    [color, Icon, iconSize, size]
  )
  const commonProps = useMemo(
    () => ({
      children,
      size,
      type,
      ...nativeProps
    }),
    [children, nativeProps, size, type]
  )

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      stopMouseEventPropagation(event)

      if (onClick) {
        onClick(event)
      }
    },
    [onClick]
  )

  switch (accent) {
    case Accent.SECONDARY:
      return <SecondaryButton as={StyledButton} onClick={handleClick} {...commonProps} />

    case Accent.TERTIARY:
      return <TertiaryButton as={StyledButton} onClick={handleClick} {...commonProps} />

    default:
      return <PrimaryButton as={StyledButton} onClick={handleClick} {...commonProps} />
  }
}

const PADDING: Record<Size, string> = {
  [Size.LARGE]: '7px',
  [Size.NORMAL]: '5px',
  [Size.SMALL]: '3px'
}

const StyledButton = styled.button<{
  size: Size
}>`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${p => PADDING[p.size]};
`

const TertiaryButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  color: ${p => p.theme.color.charcoal};

  :hover,
  &._hover {
    background-color: transparent;
    border: 1px solid transparent;
    color: ${p => p.theme.color.blueYonder['100']};
  }

  :active,
  &._active {
    background-color: transparent;
    border: 1px solid transparent;
    color: ${p => p.theme.color.blueGray['100']};
  }

  :disabled,
  &._disabled {
    background-color: transparent;
    border: 1px solid transparent;
    color: ${p => p.theme.color.lightGray};
  }
`
