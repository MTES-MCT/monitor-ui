import classnames from 'classnames'
import { type FunctionComponent, type HTMLAttributes, useMemo } from 'react'
import styled from 'styled-components'

import { Accent, TagBullet } from '../../constants'
import { DotFilled } from '../../icons'
import { THEME } from '../../theme'

import type { IconProps } from '../../types'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  Icon?: FunctionComponent<IconProps> | undefined
  accent?: Accent | undefined
  backgroundColor?: string | undefined
  borderColor?: string | undefined
  /* @deprecated Replaced by `withBullet` prop. Will be removed in `v11.0.0`. */
  bullet?: TagBullet | undefined
  /* @deprecated Replaced by `iconColor` prop. Will be removed in `v11.0.0`. */
  bulletColor?: string | undefined
  iconColor?: string | undefined
  isLight?: boolean | undefined
  withBullet?: boolean | undefined
}
export function Tag({
  accent,
  backgroundColor,
  borderColor,
  bullet,
  bulletColor,
  children,
  className,
  color,
  Icon,
  iconColor,
  isLight = false,
  withBullet = false,
  ...nativeProps
}: TagProps) {
  // TODO remove all bullet and bulletColor related code
  const withDot = useMemo(() => (bullet === TagBullet.DISK || withBullet) && !Icon, [bullet, Icon, withBullet])

  const commonChildren = useMemo(() => {
    const defaultColor = color || THEME.color.gunMetal

    const cutomIconColor =
      bulletColor ||
      iconColor ||
      (accent
        ? {
            [Accent.PRIMARY]: THEME.color.gunMetal,
            [Accent.SECONDARY]: THEME.color.gunMetal,
            [Accent.TERTIARY]: THEME.color.white
          }[accent]
        : defaultColor)

    return (
      <>
        {Icon && <Icon color={cutomIconColor} size={16} />}
        {withDot && <DotFilled color={cutomIconColor} size={20} />}

        {children}
      </>
    )
  }, [accent, bulletColor, color, children, Icon, withDot, iconColor])

  const commonProps = useMemo(
    () => ({
      $isLight: isLight,
      $withBullet: withDot,
      children: commonChildren,
      className: classnames('Element-Tag', className),
      ...nativeProps
    }),
    [className, commonChildren, isLight, nativeProps, withDot]
  )

  switch (accent) {
    case Accent.PRIMARY:
      return <PrimaryTag {...commonProps} />

    case Accent.SECONDARY:
      return <SecondaryTag {...commonProps} />

    case Accent.TERTIARY:
      return <TertiaryTag {...commonProps} />

    default:
      return <Box $backgroundColor={backgroundColor} $borderColor={borderColor} $color={color} {...commonProps} />
  }
}

const Box = styled.span<{
  $backgroundColor?: string | undefined
  $borderColor?: string | undefined
  $color?: string | undefined
  $isLight: boolean
  $withBullet?: boolean | undefined
}>`
  align-items: ${p => (p.$withBullet ? 'flex-start' : 'end')};
  align-self: flex-start;
  background-color: ${p => {
    if (p.$backgroundColor) {
      return p.$backgroundColor
    }

    return p.$isLight ? p.theme.color.white : 'transparent'
  }};
  border: ${p => (p.$borderColor ? `1px solid ${p.$borderColor}` : 'none')};
  border-radius: 25px;
  color: ${p => (p.$color ? p.$color : p.theme.color.gunMetal)};
  display: inline-flex;
  font-size: 13px;
  padding: ${p => (p.$withBullet ? '0px 6px 0px 0px' : '1px 8px 3px 8px')};

  /* Bullet components are a span */
  > span {
    height: 16px;
    margin-right: 4px;
    width: 16px;
  }

  /* SVG Icon components are wrapped within a <div /> */
  > div {
    margin-right: ${p => (p.$withBullet ? '0px' : '4px')};
  }
`

export const PrimaryTag = styled(Box)<{
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  color: ${p => p.theme.color.gunMetal};
`

// TODO Fix this color.
export const SecondaryTag = styled(Box)<{
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.goldenPoppy : p.theme.color.goldenPoppy)};
  color: ${p => p.theme.color.gunMetal};
`

export const TertiaryTag = styled(Box)<{
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.charcoal : p.theme.color.charcoal)};
  color: ${p => p.theme.color.white};
`
