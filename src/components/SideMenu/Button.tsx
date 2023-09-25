import styled from 'styled-components'

import { IconButton, type IconButtonProps } from '../../elements/IconButton'

import type { IconProps } from '../../types'
import type { FunctionComponent } from 'react'

type SideMenuButtonProps = IconButtonProps & {
  Icon: FunctionComponent<IconProps>
  isActive: boolean
  title: string
}

export function Button({ Icon, isActive, title, ...originalProps }: SideMenuButtonProps) {
  return <MenuButton $isActive={isActive} Icon={Icon} iconSize={26} role="menuitem" title={title} {...originalProps} />
}

const MenuButton = styled(IconButton)<{
  $isActive?: boolean
}>`
  animation: none;
  background: ${p => (p.$isActive ? p.theme.color.blueGray : 'none')};
  border: 0;
  border-bottom: solid 0.5px ${p => p.theme.color.slateGray};
  color: ${p => (p.$isActive ? p.theme.color.white : p.theme.color.gainsboro)};
  padding: 18px;
  height: 64px;

  :hover,
  :focus {
    background: ${p => (p.$isActive ? p.theme.color.blueGray : 'rgba(255, 255, 255, 0.125)')};
    border: 0;
    border: none;
    color: ${p => p.theme.color.white};
  }

  :first-child {
    border-top: solid 0.5px ${p => p.theme.color.slateGray};

    :hover {
      border: none;
    }
  }
`
