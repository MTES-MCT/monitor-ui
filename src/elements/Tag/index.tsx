import { FunctionComponent, HTMLAttributes, useMemo } from 'react'
import styled from 'styled-components'

import { Accent } from '../../constants'
import { MonitorUiError } from '../../libs/MonitorUiError'
import { THEME } from '../../theme'
import { TagBullet } from './constants'
import { Disk } from './Disk'

import type { IconProps } from '../../types'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  Icon?: FunctionComponent<IconProps>
  accent?: Accent
  bullet?: TagBullet
  color?: string
  isLight?: boolean
}
export function Tag({ accent, bullet, children, color, Icon, isLight = false, ...nativeProps }: TagProps) {
  if (accent === Accent.LINK) {
    throw new MonitorUiError("You can't use `Accent.LINK` as an accent in <Tag />.", '<Tag />')
  }

  const commonChildren = useMemo(() => {
    const defaultColor = color || THEME.color.gunMetal
    const bulletColor = accent
      ? {
          [Accent.PRIMARY]: THEME.color.gunMetal,
          [Accent.SECONDARY]: THEME.color.gunMetal,
          [Accent.TERTIARY]: THEME.color.white
        }[accent]
      : defaultColor

    return (
      <>
        {Icon && <Icon size={1} />}
        {bullet === TagBullet.DISK && <Disk $color={bulletColor} />}

        {children}
      </>
    )
  }, [accent, bullet, color, children, Icon])
  const commonProps = useMemo(
    () => ({
      $isLight: isLight,
      children: commonChildren,
      ...nativeProps
    }),
    [commonChildren, isLight, nativeProps]
  )

  switch (accent) {
    case Accent.PRIMARY:
      return <PrimaryTag {...commonProps} />

    case Accent.SECONDARY:
      return <SecondaryTag {...commonProps} />

    case Accent.TERTIARY:
      return <TertiaryTag {...commonProps} />

    default:
      return <Box $color={color} {...commonProps} />
  }
}

const Box = styled.span<{
  $color?: string
  $isLight: boolean
}>`
  align-items: center;
  background-color: ${p => (p.$isLight ? p.theme.color.white : 'transparent')};
  border-radius: 11px;
  color: ${p => (p.$color ? p.$color : p.theme.color.gunMetal)};
  display: inline-flex;
  font-size: 13px;
  line-height: 1.3846;
  padding: 1px 8px 3px 8px;

  /* Bullet components are a span */
  > span {
    height: 16px;
    margin-right: 4px;
    width: 16px;
  }

  /* SVG Icon components are wrapped within a <div /> */
  > div {
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
  background-color: ${p => (p.$isLight ? '#f6d012' : '#f6d012')};
  color: ${p => p.theme.color.gunMetal};
`

export const TertiaryTag = styled(Box)<{
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.charcoal : p.theme.color.charcoal)};
  color: ${p => p.theme.color.white};
`
