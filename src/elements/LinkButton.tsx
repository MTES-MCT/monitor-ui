import { Size } from '@constants'
import { THEME } from '@theme'
import { type IconProps } from '@types_/definitions'
import classnames from 'classnames'
import { type ButtonHTMLAttributes, type FunctionComponent, type ReactNode } from 'react'
import styled from 'styled-components'

export type LinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: FunctionComponent<IconProps> | undefined
  children: string | ReactNode
  size?: Size | undefined
}
export function LinkButton({ children, className, Icon, size = Size.NORMAL, ...props }: Readonly<LinkButtonProps>) {
  const controlledClassName = classnames('Element-LinkButton', className)

  return (
    <StyledLinkButton $size={size} className={controlledClassName} {...props}>
      <>
        {Icon && <Icon color={THEME.color.slateGray} size={ICON_SIZE[size]} />}
        {children}
      </>
    </StyledLinkButton>
  )
}

const FONT_SIZE: Record<Size, string> = {
  [Size.LARGE]: '16px',
  [Size.NORMAL]: '13px',
  [Size.SMALL]: '11px'
}
const ICON_SIZE: Record<Size, number> = {
  [Size.LARGE]: 16,
  [Size.NORMAL]: 13,
  [Size.SMALL]: 11
}

const StyledLinkButton = styled.button<{
  $size: Size
}>`
  align-items: flex-end;
  background: transparent;
  color: ${p => p.theme.color.slateGray};
  cursor: ${p => (p.disabled ? 'none' : 'pointer')};
  display: flex;
  flex-direction: row;
  font-size: ${p => FONT_SIZE[p.$size]};
  gap: 0.4rem;
  text-decoration: underline;

  &:hover,
  &._hover {
    color: ${p => p.theme.color.blueYonder};

    svg {
      color: ${p => p.theme.color.blueYonder};
    }
  }

  &:active,
  &._active {
    color: ${p => p.theme.color.blueGray};

    svg {
      color: ${p => p.theme.color.blueGray};
    }
  }

  &:disabled,
  &._disabled {
    color: ${p => p.theme.color.lightGray};

    svg {
      color: ${p => p.theme.color.lightGray};
    }
  }
`
