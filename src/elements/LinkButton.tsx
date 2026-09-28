import { Size } from '@constants'
import { THEME } from '@theme'
import { type IconProps } from '@types_/definitions'
import classnames from 'classnames'
import { type ButtonHTMLAttributes, type FunctionComponent, type ReactNode } from 'react'
import styled from 'styled-components'

type BaseLinkButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode
}

type LargeLinkButtonProps = BaseLinkButtonProps & {
  Icon: FunctionComponent<IconProps>
  size: Size.LARGE
}

type RegularLinkButtonProps = BaseLinkButtonProps & {
  Icon?: FunctionComponent<IconProps> | undefined
  size?: Exclude<Size, Size.LARGE> | undefined
}

export type LinkButtonProps = LargeLinkButtonProps | RegularLinkButtonProps
export function LinkButton({ children, className, Icon, size = Size.NORMAL, ...props }: Readonly<LinkButtonProps>) {
  const controlledClassName = classnames('Element-LinkButton', className)

  return (
    <StyledLinkButton $isDisabled={props.disabled} $size={size} className={controlledClassName} {...props}>
      <>
        {Icon && (
          <Icon
            color={THEME.color.charcoal}
            size={ICON_SIZE[size]}
            title={typeof children === 'string' ? children : ''}
          />
        )}

        {size !== Size.LARGE && children}
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
  [Size.LARGE]: 40,
  [Size.NORMAL]: 20,
  [Size.SMALL]: 16
}

const StyledLinkButton = styled.button<{
  $isDisabled: boolean | undefined
  $size: Size
}>`
  align-items: center;
  background: transparent;
  color: ${p => p.theme.color.slateGray};
  cursor: ${p => (p.$isDisabled ? 'none' : 'pointer')};
  display: flex;
  flex-direction: row;
  font-size: ${p => FONT_SIZE[p.$size]};
  gap: 0.25rem;
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
