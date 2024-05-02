import classnames from 'classnames'
import { type FunctionComponent, type HTMLAttributes, useMemo } from 'react'
import styled from 'styled-components'

import { Accent } from '../../constants'
import { THEME } from '../../theme'

import type { IconProps } from '../../types/definitions'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  Icon?: FunctionComponent<IconProps> | undefined
  accent?: Accent | undefined
  backgroundColor?: string | undefined
  borderColor?: string | undefined
  color?: string | undefined
  iconColor?: string | undefined
  isLight?: boolean | undefined
  withCircleIcon?: boolean | undefined
}
export function Tag({
  accent,
  backgroundColor,
  borderColor,
  children,
  className,
  color,
  Icon,
  iconColor,
  isLight = false,
  withCircleIcon = false,
  ...nativeProps
}: TagProps) {
  const commonChildren = useMemo(() => {
    const defaultColor = color ?? THEME.color.gunMetal

    const cutomIconColor =
      iconColor ??
      (accent
        ? {
            [Accent.PRIMARY]: THEME.color.gunMetal,
            [Accent.SECONDARY]: THEME.color.gunMetal,
            [Accent.TERTIARY]: THEME.color.white
          }[accent]
        : defaultColor)

    return (
      <>
        {Icon && <Icon color={cutomIconColor} />}

        {children}
      </>
    )
  }, [accent, color, children, Icon, iconColor])

  const commonProps = useMemo(
    () => ({
      $isLight: isLight,
      $withCircleIcon: withCircleIcon,
      children: commonChildren,
      className: classnames('Element-Tag', className),
      ...nativeProps
    }),
    [className, commonChildren, isLight, nativeProps, withCircleIcon]
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
  $withCircleIcon?: boolean | undefined
}>`
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
  height: 22px;
  line-height: normal;
  padding: ${p => (p.$withCircleIcon ? '1px 8px 0px 1px' : '0px 8px')};

  > .Element-IconBox {
    margin-right: 4px;
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
