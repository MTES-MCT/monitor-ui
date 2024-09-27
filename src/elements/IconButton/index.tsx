import { Accent, Size } from '@constants'
import { type IconProps } from '@types_/definitions'
import { stopMouseEventPropagation } from '@utils/stopMouseEventPropagation'
import classnames from 'classnames'
import { useMemo, type MouseEvent, type ButtonHTMLAttributes, type FunctionComponent, useCallback } from 'react'
import styled from 'styled-components'

import { BaseIconButton, type BaseIconButtonProps } from './BaseIconButton'
import { getPrimaryButtonCss, getSecondaryButtonCss } from '../Button/styles'

const ICON_SIZE_IN_PX: Record<Size, number> = {
  [Size.LARGE]: 26,
  [Size.NORMAL]: 20,
  [Size.SMALL]: 14
}

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  Icon: FunctionComponent<IconProps>
  accent?: Accent | undefined
  badgeBackgroundColor?: string | undefined
  badgeColor?: string | undefined
  badgeNumber?: number | undefined
  color?: string | undefined
  /** In pixels, override `size` prop default values. */
  iconSize?: number | undefined
  /** Remove button border and padding. */
  isCompact?: boolean | undefined
  size?: Size | undefined
  style?: React.CSSProperties | undefined
  /** Prevent onClick event propagation. */
  withUnpropagatedClick?: boolean | undefined
}
export function IconButton({
  accent = Accent.PRIMARY,
  badgeBackgroundColor,
  badgeColor,
  badgeNumber,
  className,
  color,
  Icon,
  iconSize,
  isCompact,
  onClick,
  size = Size.NORMAL,
  style,
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

  const buttonProps: BaseIconButtonProps = useMemo(
    () => ({
      $isCompact: isCompact,
      $size: size,
      children: commonChildren,
      className:
        badgeNumber === undefined ? classnames('Element-IconButton', className) : classnames('Element-IconButton'),
      onClick: handleClick,
      style: badgeNumber === undefined ? style : undefined,
      type,
      ...nativeProps
    }),
    [badgeNumber, className, commonChildren, handleClick, isCompact, nativeProps, size, type, style]
  )

  switch (accent) {
    case Accent.SECONDARY:
      return (
        <>
          {badgeNumber === undefined ? (
            <SecondaryButton {...buttonProps} />
          ) : (
            <Wrapper className={className} style={style}>
              <BadgeNumber $backgroundColor={badgeBackgroundColor} $color={badgeColor} $size={size}>
                {badgeNumber}
              </BadgeNumber>
              <SecondaryButton {...buttonProps} />
            </Wrapper>
          )}
        </>
      )

    case Accent.TERTIARY:
      return (
        <>
          {badgeNumber === undefined ? (
            <TertiaryButton {...buttonProps} />
          ) : (
            <Wrapper className={className} style={style}>
              <BadgeNumber $backgroundColor={badgeBackgroundColor} $color={badgeColor} $size={size}>
                {badgeNumber}
              </BadgeNumber>
              <TertiaryButton {...buttonProps} />
            </Wrapper>
          )}
        </>
      )

    default:
      return (
        <>
          {badgeNumber === undefined ? (
            <PrimaryButton {...buttonProps} />
          ) : (
            <Wrapper className={className} style={style}>
              <BadgeNumber $backgroundColor={badgeBackgroundColor} $color={badgeColor} $size={size}>
                {badgeNumber}
              </BadgeNumber>
              <PrimaryButton {...buttonProps} />
            </Wrapper>
          )}
        </>
      )
  }
}

const Wrapper = styled.div`
  position: relative;
`

const LEFT_MARGIN: Record<Size, number> = {
  [Size.LARGE]: 35,
  [Size.NORMAL]: 25,
  [Size.SMALL]: 15
}

const BadgeNumber = styled.div<{
  $backgroundColor: string | undefined
  $color: string | undefined
  $size: Size
}>`
  display: inline-block;
  position: absolute;
  height: 15px;
  padding: 0 4px;
  text-align: center;
  border-radius: 10px;
  top: -5px;
  line-height: 14px;
  left: ${p => (p.$size ? LEFT_MARGIN[p.$size] : 25)}px;
  background: ${p => (p.$backgroundColor ? p.$backgroundColor : p.theme.color.maximumRed)};
  color: ${p => (p.$color ? p.$color : p.theme.color.white)};
  font-size: 12px;
  letter-spacing: 0px;
  font-weight: 700;
`

const PrimaryButton = styled(BaseIconButton)(getPrimaryButtonCss)

const SecondaryButton = styled(BaseIconButton)(getSecondaryButtonCss)

const TertiaryButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: ${p => p.theme.color.charcoal};

  &:hover,
  &._hover {
    background-color: transparent;
    border-color: transparent;
    color: ${p => p.theme.color.blueYonder};
  }

  &:active,
  &._active {
    background-color: transparent;
    border-color: transparent;
    color: ${p => p.theme.color.blueGray};
  }

  &:disabled,
  &._disabled {
    background-color: transparent;
    border-color: transparent;
    color: ${p => p.theme.color.lightGray};
  }
`
