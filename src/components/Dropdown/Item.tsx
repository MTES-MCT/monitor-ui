import { useMemo } from 'react'
import { Dropdown as RsuiteDropdown } from 'rsuite'
import styled from 'styled-components'

import { Accent } from '../../constants'

import type { IconProps } from '../../types'
import type { FunctionComponent } from 'react'
import type { DropdownMenuItemProps as RsuiteDropdownMenuItemProps } from 'rsuite'

export type DropdownItemProps = Omit<RsuiteDropdownMenuItemProps, 'as' | 'icon'> & {
  Icon?: FunctionComponent<IconProps>
  accent?: Accent | undefined
}
export function Item({ accent, Icon, ...originalProps }: DropdownItemProps) {
  const icon = useMemo(() => (Icon ? <Icon size={20} /> : undefined), [Icon])
  const hasIcon = useMemo(() => Boolean(Icon), [Icon])

  switch (accent) {
    case Accent.SECONDARY:
      return <SecondaryDropdownItem $hasIcon={hasIcon} icon={icon} {...originalProps} />

    default:
      return <PrimaryDropdownItem $hasIcon={hasIcon} icon={icon} {...originalProps} />
  }
}

// TODO We need to split that into multiple styled components as done in `<Button />`.
const SecondaryDropdownItem = styled(RsuiteDropdown.Item as any)<{
  $hasIcon: boolean
}>`
  background-color: ${p => p.theme.color.cultured};
  border: 1px solid ${p => p.theme.color.lightGray};
  padding: 4px;
  width: 30px;
  height: 30px;
  :hover {
    background-color: ${p => p.theme.color.cultured};
    border: 1px solid ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.blueYonder};
  }
  &:not(:last-child) {
    margin-bottom: 1px;
  }
`
const PrimaryDropdownItem = styled(RsuiteDropdown.Item as any)<{
  $hasIcon: boolean
}>`
  align-items: center;
  display: flex;
  font-size: 13px;
  line-height: 1;
  padding: ${p => (p.$hasIcon ? '7px' : '11px')} 12px ${p => (p.$hasIcon ? '9px' : '14px')};

  &:not(:last-child) {
    border-bottom: 1px solid var(--lightGray);
  }
  /* SVG Icon Components are wrapped within a <div />  */
  > div {
    margin-top: 1px;
  }
`
