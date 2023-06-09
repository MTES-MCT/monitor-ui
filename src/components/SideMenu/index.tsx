import styled from 'styled-components'

import type { ReactNode } from 'react'

export type SideMenuProps = {
  children: ReactNode
}
export function SideMenu({ children }: SideMenuProps) {
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
