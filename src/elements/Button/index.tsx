import { Accent, Size } from '@constants'
import { type IconProps } from '@types_/definitions'
import { stopMouseEventPropagation } from '@utils/stopMouseEventPropagation'
import classnames from 'classnames'
import { useCallback, useMemo, type MouseEvent, type ButtonHTMLAttributes, type FunctionComponent } from 'react'
import styled from 'styled-components'

import { BaseButton, type BaseButtonProps } from './BaseButton'
import { getPrimaryButtonCss, getSecondaryButtonCss } from './styles'

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

  const commonProps: BaseButtonProps = useMemo(
    () => ({
      $isFullWidth: isFullWidth,
      $size: size,
      children: commonChildren,
      className: classnames('Element-Button', className),
      onClick: handleClick,
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

const ButtonLabel = styled.span`
  line-height: 1.3846;
  margin-top: -3px;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PrimaryButton = styled(BaseButton)(getPrimaryButtonCss)

const SecondaryButton = styled(BaseButton)(getSecondaryButtonCss)

const TertiaryButton = styled(BaseButton)`
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

const WarningButton = styled(BaseButton)`
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
const ErrorButton = styled(BaseButton)`
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
