import styled from 'styled-components'

import { Button } from './Button'

import type { ReactNode } from 'react'

export type SideMenuProps = {
  children: ReactNode
}
export function Menu({ children }: SideMenuProps) {
  return <Wrapper role="menu">{children}</Wrapper>
}

const Wrapper = styled.div`
  background-color: ${p => p.theme.color.charcoal};
  box-sizing: border-box;
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 64px;
  padding: 64px 0 0;

  * {
    box-sizing: border-box;
  }
`

Menu.displayName = 'SideMenu'

export const SideMenu = Object.assign(Menu, {
  Button
})
