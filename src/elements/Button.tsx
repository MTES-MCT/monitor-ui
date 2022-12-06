import { useMemo } from 'react'
import styled from 'styled-components'

import { Accent, Size } from '../contants'

import type { IconProps } from '../types'
import type { ButtonHTMLAttributes, FunctionComponent } from 'react'

const ICON_SIZE: Record<Size, number> = {
  [Size.LARGE]: 1.25,
  [Size.NORMAL]: 1.25,
  [Size.SMALL]: 0.75
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: FunctionComponent<IconProps>
  accent?: Accent
  isFullWidth?: boolean
  size?: Size
}
export function Button({
  accent = Accent.PRIMARY,
  children,
  Icon,
  isFullWidth = false,
  size = Size.NORMAL,
  type = 'button',
  ...nativeProps
}: ButtonProps) {
  const commonChildren = useMemo(
    () => (
      <>
        {Icon && <Icon size={ICON_SIZE[size]} />}
        {children}
      </>
    ),
    [children, Icon, size]
  )
  const commonProps = useMemo(
    () => ({
      as: StyledButton,
      children: commonChildren,
      isFullWidth,
      size,
      type,
      ...nativeProps
    }),
    [commonChildren, isFullWidth, nativeProps, size, type]
  )

  switch (accent) {
    case Accent.SECONDARY:
      return <SecondaryButton {...commonProps} />

    case Accent.TERTIARY:
      return <TertiaryButton {...commonProps} />

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
  [Size.LARGE]: '6px 12px',
  [Size.NORMAL]: '6px 12px',
  [Size.SMALL]: '5px 8px 4px'
}
const StyledButton = styled.button<{
  isFullWidth: boolean
  size: Size
}>`
  align-items: center;
  display: flex;
  font-size: ${p => FONT_SIZE[p.size]};
  justify-content: center;
  padding: ${p => PADDING[p.size]};
  white-space: nowrap;
  width: ${p => (p.isFullWidth ? '100%' : 'auto')};

  /* SVG Icon Components are wrapped within a <div /> */
  > div {
    margin-right: 5px;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${p => p.theme.color.charcoal};
  border: 1px solid ${p => p.theme.color.charcoal};
  color: ${p => p.theme.color.gainsboro};

  :hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder['100']};
    border: 1px solid ${p => p.theme.color.blueYonder['100']};
    color: ${p => p.theme.color.white};
  }

  :active,
  &._active {
    background-color: ${p => p.theme.color.blueGray['100']};
    border: 1px solid ${p => p.theme.color.blueGray['100']};
    color: ${p => p.theme.color.white};
  }

  :disabled,
  &._disabled {
    background-color: ${p => p.theme.color.lightGray};
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.cultured};
  }
`

export const SecondaryButton = styled.button`
  background-color: ${p => p.theme.color.white};
  border: 1px solid ${p => p.theme.color.charcoal};
  color: ${p => p.theme.color.charcoal};

  :hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder['25']};
    border: 1px solid ${p => p.theme.color.blueYonder['100']};
    color: ${p => p.theme.color.blueYonder['100']};
  }

  :active,
  &._active {
    background-color: ${p => p.theme.color.blueGray['25']};
    border: 1px solid ${p => p.theme.color.blueGray['100']};
    color: ${p => p.theme.color.blueGray['100']};
  }

  :disabled,
  &._disabled {
    background-color: ${p => p.theme.color.white};
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
  }
`

export const TertiaryButton = styled.button`
  background-color: ${p => p.theme.color.white};
  border: 1px solid ${p => p.theme.color.white};
  color: ${p => p.theme.color.charcoal};

  :hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder['25']};
    border: 1px solid ${p => p.theme.color.blueYonder['25']};
    color: ${p => p.theme.color.blueYonder['100']};
  }

  :active,
  &._active {
    background-color: ${p => p.theme.color.blueGray['25']};
    border: 1px solid ${p => p.theme.color.blueGray['100']};
    color: ${p => p.theme.color.blueGray['100']};
  }

  :disabled,
  &._disabled {
    background-color: ${p => p.theme.color.white};
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
  }
`
