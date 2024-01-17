import classnames from 'classnames'
import { useMemo, type MouseEvent, type ButtonHTMLAttributes, type FunctionComponent, useCallback } from 'react'
import styled, { css } from 'styled-components'

import { PrimaryButton, SecondaryButton } from './Button'
import { Accent, Size } from '../constants'
import { type IconProps } from '../types'
import { stopMouseEventPropagation } from '../utils/stopMouseEventPropagation'

const ICON_SIZE_IN_PX: Record<Size, number> = {
  [Size.LARGE]: 26,
  [Size.NORMAL]: 20,
  [Size.SMALL]: 14
}

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  Icon: FunctionComponent<IconProps>
  accent?: Accent | undefined
  color?: string | undefined
  /** In pixels, override `size` prop default values. */
  iconSize?: number | undefined
  /** Remove button border and padding. */
  isCompact?: boolean | undefined
  size?: Size | undefined
  /** Prevent onClick event propagation. */
  withUnpropagatedClick?: boolean | undefined
}
export function IconButton({
  accent = Accent.PRIMARY,
  className,
  color,
  Icon,
  iconSize,
  isCompact,
  onClick,
  size = Size.NORMAL,
  type = 'button',
  withUnpropagatedClick = false,
  ...nativeProps
}: IconButtonProps) {
  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (withUnpropagatedClick) {
        stopMouseEventPropagation(event)
      }

      if (onClick) {
        onClick(event)
      }
    },
    [onClick, withUnpropagatedClick]
  )

  const commonChildren = useMemo(
    () => <Icon color={color} size={iconSize ?? ICON_SIZE_IN_PX[size]} />,
    [color, Icon, iconSize, size]
  )

  const commonProps = useMemo(
    () => ({
      children: commonChildren,
      className: classnames('Element-IconButton', className),
      isCompact,
      onClick: handleClick,
      size,
      type,
      ...nativeProps
    }),
    [className, commonChildren, handleClick, isCompact, nativeProps, size, type]
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

// We can't use $-prefixed props here for some reason (maybe because the `as` prop exclude them?).
const StyledButton = styled.button<{
  isCompact: boolean | undefined
  size: Size
}>`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: ${p => (p.isCompact ? 0 : PADDING[p.size])};

  ${p =>
    p.isCompact &&
    css`
      border: 0;

      :hover,
      &._hover {
        border: 0;
      }
      border: 0;

      :active,
      &._active {
        border: 0;
      }
      border: 0;

      :disabled,
      &._disabled {
        border: 0;
      }
    `}
`

const TertiaryButton = styled.button<{
  isCompact: boolean | undefined
}>`
  background-color: transparent;
  border: ${p => (p.isCompact ? 0 : '1px solid transparent')};
  color: ${p => p.theme.color.charcoal};

  :hover,
  &._hover {
    background-color: transparent;
    border: ${p => (p.isCompact ? 0 : '1px solid transparent')};
    color: ${p => p.theme.color.blueYonder};
  }

  :active,
  &._active {
    background-color: transparent;
    border: ${p => (p.isCompact ? 0 : '1px solid transparent')};
    color: ${p => p.theme.color.blueGray};
  }

  :disabled,
  &._disabled {
    background-color: transparent;
    border: ${p => (p.isCompact ? 0 : '1px solid transparent')};
    color: ${p => p.theme.color.lightGray};
  }
`
