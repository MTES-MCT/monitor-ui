import { useMemo } from 'react'
import styled from 'styled-components'

import { Accent, Size } from '../constants'
import { PrimaryButton, SecondaryButton } from './Button'

import type { IconProps } from '../types'
import type { ButtonHTMLAttributes, FunctionComponent } from 'react'

const ICON_SIZE: Record<Size, number> = {
  [Size.LARGE]: 1.625,
  [Size.NORMAL]: 1.25,
  [Size.SMALL]: 0.875
}

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  Icon: FunctionComponent<IconProps>
  accent?: Accent
  color?: string
  size?: Size
}
export function IconButton({
  accent = Accent.PRIMARY,
  color,
  Icon,
  size = Size.NORMAL,
  type = 'button',
  ...nativeProps
}: IconButtonProps) {
  const children = useMemo(() => <Icon color={color} size={ICON_SIZE[size]} />, [color, Icon, size])
  const commonProps = useMemo(
    () => ({
      children,
      size,
      type,
      ...nativeProps
    }),
    [children, nativeProps, size, type]
  )

  switch (accent) {
    case Accent.SECONDARY:
      return <SecondaryButton as={StyledButton} {...commonProps} />

    case Accent.TERTIARY:
      return <TertiaryButton as={StyledButton} {...commonProps} />

    default:
      return <PrimaryButton as={StyledButton} {...commonProps} />
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
