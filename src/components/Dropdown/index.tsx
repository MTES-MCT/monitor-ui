import classnames from 'classnames'
import { useMemo } from 'react'
import { Dropdown as RsuiteDropdown } from 'rsuite'
import styled from 'styled-components'

import { Item } from './Item'
import { Accent } from '../../constants'

import type { DropdownItemProps } from './Item'
import type { IconProps } from '../../types/definitions'
import type { FunctionComponent } from 'react'
import type { DropdownProps as RsuiteDropdownProps } from 'rsuite'

export type DropdownProps = Omit<RsuiteDropdownProps, 'as' | 'icon'> & {
  Icon?: FunctionComponent<IconProps>
  accent?: Accent | undefined
}
function RawDropdown({ accent, className, Icon, ...originalProps }: DropdownProps) {
  const controlledClassName = classnames('Component-Dropdow', className)
  const icon = useMemo(() => (Icon ? <Icon size={20} /> : undefined), [Icon])
  const hasIcon = useMemo(() => Boolean(Icon), [Icon])

  switch (accent) {
    case Accent.SECONDARY:
      return <SecondaryDropdown $hasIcon={hasIcon} className={controlledClassName} icon={icon} {...originalProps} />

    default:
      return <PrimaryDropdown $hasIcon={hasIcon} className={controlledClassName} icon={icon} {...originalProps} />
  }
}

// TODO We need to split into multiple styled components as done in `<Button />`.
const PrimaryDropdown = styled(RsuiteDropdown as any)<{
  $hasIcon: boolean
}>`
  .rs-btn {
    align-items: center;
    background-color: ${p => p.theme.color.charcoal};
    border: solid 1px ${p => p.theme.color.charcoal};
    border-radius: 0px;
    color: ${p => p.theme.color.gainsboro};
    display: flex;
    font-size: 13px;
    padding: ${p => (p.$hasIcon ? '4px' : '5px')} 12px ${p => (p.$hasIcon ? '5px' : '7px')};

    :hover {
      background-color: ${p => p.theme.color.blueYonder};
      border: 1px solid ${p => p.theme.color.blueYonder};
      color: ${p => p.theme.color.white};
    }

    :active {
      background-color: ${p => p.theme.color.blueGray};
      border: 1px solid ${p => p.theme.color.blueGray};
      color: ${p => p.theme.color.white};
    }

    :disabled {
      background-color: ${p => p.theme.color.lightGray};
      border: 1px solid ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.cultured};
    }

    /* SVG Icon Components are wrapped within a <div /> */
    > div {
      margin: 1px 8px 0 0;
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

const SecondaryDropdown = styled(RsuiteDropdown as any)<{
  $hasIcon: boolean
}>`
  .rs-btn {
    align-items: center;
    display: flex;
    padding: ${p => (p.$hasIcon ? '0px ' : '5px 12px 7px')};

    :hover,
    :active {
      background-color: transparent;
      border: none;
      color: ${p => p.theme.color.blueYonder};
    }

    > svg {
      display: none;
    }
  }

  > .rs-dropdown-menu {
    background-color: transparent;
    border-radius: 0;
    padding: 0;
  }
`

RawDropdown.displayName = 'Dropdown'

export const Dropdown: FunctionComponent<DropdownProps> & {
  Item: FunctionComponent<DropdownItemProps>
} = Object.assign(RawDropdown, {
  Item
})

export { type DropdownItemProps }
