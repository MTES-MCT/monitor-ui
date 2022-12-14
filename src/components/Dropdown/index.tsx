import { useMemo } from 'react'
import { Dropdown as RsuiteDropdown } from 'rsuite'
import styled from 'styled-components'

import { Item } from './Item'

import type { IconProps } from '../../types'
import type { DropdownItemProps } from './Item'
import type { FunctionComponent } from 'react'
import type { DropdownProps as RsuiteDropdownProps } from 'rsuite'

export type DropdownProps = Omit<RsuiteDropdownProps, 'as' | 'icon'> & {
  Icon?: FunctionComponent<IconProps>
}
function RawDropdown({ Icon, ...originalProps }: DropdownProps) {
  const icon = useMemo(() => (Icon ? <Icon size={1.25} /> : undefined), [Icon])
  const hasIcon = useMemo(() => Boolean(Icon), [Icon])

  return <StyledDropdown $hasIcon={hasIcon} icon={icon} {...originalProps} />
}

// TODO We need to split into multiple styled components as done in `<Button />`.
const StyledDropdown = styled(RsuiteDropdown)<{
  $hasIcon: boolean
}>`
  .rs-btn {
    align-items: center;
    background-color: ${p => p.theme.color.charcoal};
    border: solid 1px ${p => p.theme.color.charcoal};
    color: ${p => p.theme.color.gainsboro};
    display: flex;
    font-size: 13px;
    padding: ${p => (p.$hasIcon ? '5px' : '6px')} 12px;

    :hover {
      background-color: ${p => p.theme.color.blueYonder['100']};
      border: 1px solid ${p => p.theme.color.blueYonder['100']};
      color: ${p => p.theme.color.white};
    }

    :active {
      background-color: ${p => p.theme.color.blueGray['100']};
      border: 1px solid ${p => p.theme.color.blueGray['100']};
      color: ${p => p.theme.color.white};
    }

    :disabled {
      background-color: ${p => p.theme.color.lightGray};
      border: 1px solid ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.cultured};
    }

    /* SVG Icon Components are wrapped within a <div /> */
    > div {
      margin-right: 0.5rem;
    }

    > svg {
      display: none;
    }
  }

  > .rs-dropdown-menu {
    border-radius: 0;
    padding: 0;
  }

  svg.rs-dropdown-item-menu-icon {
    vertical-align: middle;
    margin-right: 10px;
  }
`

RawDropdown.displayName = 'Dropdown'

export const Dropdown: FunctionComponent<DropdownProps> & {
  Item: FunctionComponent<DropdownItemProps>
} = Object.assign(RawDropdown, {
  Item
})

export { DropdownItemProps }
