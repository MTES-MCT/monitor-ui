import classnames from 'classnames'
import { useCallback, useMemo, type MouseEvent, type ButtonHTMLAttributes, type FunctionComponent } from 'react'
import styled from 'styled-components'

import { Accent, Size } from '../constants'
import { type IconProps } from '../types/definitions'
import { stopMouseEventPropagation } from '../utils/stopMouseEventPropagation'

const ICON_SIZE: Record<Size, number> = {
  [Size.LARGE]: 20,
  [Size.NORMAL]: 20,
  [Size.SMALL]: 12
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  Icon?: FunctionComponent<IconProps> | undefined
  accent?: Accent | undefined
  children?: string | undefined
  isFullWidth?: boolean | undefined
  size?: Size | undefined
  /** Prevent onClick event propagation. */
  withUnpropagatedClick?: boolean | undefined
}
export function Button({
  accent = Accent.PRIMARY,
  children,
  className,
  Icon,
  isFullWidth = false,
  onClick,
  size = Size.NORMAL,
  type = 'button',
  withUnpropagatedClick = false,
  ...nativeProps
}: ButtonProps) {
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
    () => (
      <>
        {Icon && <Icon size={ICON_SIZE[size]} />}
        {children && <ButtonLabel>{children}</ButtonLabel>}
      </>
    ),
    [children, Icon, size]
  )

  const commonProps = useMemo(
    () => ({
      as: StyledButton,
      children: commonChildren,
      className: classnames('Element-Button', className),
      isFullWidth,
      onClick: handleClick,
      size,
      type,
      ...nativeProps
    }),
    [className, commonChildren, handleClick, isFullWidth, nativeProps, size, type]
  )

  switch (accent) {
    case Accent.SECONDARY:
      return <SecondaryButton {...commonProps} />

    case Accent.TERTIARY:
      return <TertiaryButton {...commonProps} />

    case Accent.WARNING:
      return <WarningButton {...commonProps} />
    case Accent.ERROR:
      return <ErrorButton {...commonProps} />
    default:
      return <PrimaryButton {...commonProps} />
  }
}

const FONT_SIZE: Record<Size, string> = {
  [Size.LARGE]: '13px',
  [Size.NORMAL]: '13px',
  [Size.SMALL]: '11px'
}
const PADDING: Record<Size, string> = {
  [Size.LARGE]: '12px',
  [Size.NORMAL]: '6px 12px',
  [Size.SMALL]: '5px 8px 4px'
}
const StyledButton = styled.button<{
  $isFullWidth: boolean
  $size: Size
}>`
  align-items: center;
  display: inline-flex;
  font-size: ${p => FONT_SIZE[p.$size]};
  justify-content: center;
  max-width: 100%;
  padding: ${p => PADDING[p.$size]};
  width: ${p => (p.$isFullWidth ? '100%' : 'auto')};

  > .Element-IconBox {
    margin-right: 5px;
  }
`

const ButtonLabel = styled.span`
  line-height: 1.3846;
  margin-top: -3px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const PrimaryButton = styled.button`
  background-color: ${p => p.theme.color.charcoal};
  border: 1px solid ${p => p.theme.color.charcoal};
  color: ${p => p.theme.color.gainsboro};

  &:hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder};
    border: 1px solid ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.white};
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.blueGray};
    border: 1px solid ${p => p.theme.color.blueGray};
    color: ${p => p.theme.color.white};
  }

  &:disabled,
  &._disabled {
    background-color: ${p => p.theme.color.lightGray};
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.cultured};
  }
`

export const SecondaryButton = styled.button`
  background-color: transparent;
  border: 1px solid ${p => p.theme.color.charcoal};
  color: ${p => p.theme.color.charcoal};

  &:hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder25};
    border: 1px solid ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder};
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.blueGray25};
    border: 1px solid ${p => p.theme.color.blueGray};
    color: ${p => p.theme.color.blueGray};
  }

  &:disabled,
  &._disabled {
    background-color: transparent;
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
  }
`

export const TertiaryButton = styled.button`
  background-color: ${p => p.theme.color.white};
  border: 1px solid ${p => p.theme.color.white};
  color: ${p => p.theme.color.charcoal};

  &:hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder25};
    border: 1px solid ${p => p.theme.color.blueYonder25};
    color: ${p => p.theme.color.blueYonder};
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.blueGray25};
    border: 1px solid ${p => p.theme.color.blueGray};
    color: ${p => p.theme.color.blueGray};
  }

  &:disabled,
  &._disabled {
    background-color: ${p => p.theme.color.white};
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
  }
`
export const WarningButton = styled.button`
  background-color: transparent;
  border: 1px solid ${p => p.theme.color.goldenPoppy};
  color: ${p => p.theme.color.charcoal};

  &:hover,
  &._hover {
    /* 26 is for opacity = 15% */
    background-color: ${p => p.theme.color.goldenPoppy}26;
    border: 1px solid ${p => p.theme.color.goldenPoppy};
    color: ${p => p.theme.color.charcoal};
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.goldenPoppy};
    border: 1px solid ${p => p.theme.color.goldenPoppy};
    color: ${p => p.theme.color.charcoal};
  }

  &:disabled,
  &._disabled {
    background-color: transparent;
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
  }
`
export const ErrorButton = styled.button`
  background-color: transparent;
  border: 1px solid ${p => p.theme.color.maximumRed};
  color: ${p => p.theme.color.charcoal};
  > * {
    color: ${p => p.theme.color.maximumRed};
  }

  &:hover,
  &._hover {
    /* 26 is for opacity = 15% */
    background-color: ${p => p.theme.color.maximumRed}26;
    border: 1px solid ${p => p.theme.color.maximumRed};
    > * {
      color: ${p => p.theme.color.maximumRed};
    }
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.maximumRed};
    border: 1px solid ${p => p.theme.color.maximumRed};
    color: ${p => p.theme.color.white};
    > * {
      color: ${p => p.theme.color.white};
    }
  }

  &:disabled,
  &._disabled {
    background-color: transparent;
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
    > * {
      color: ${p => p.theme.color.lightGray};
    }
  }
`
