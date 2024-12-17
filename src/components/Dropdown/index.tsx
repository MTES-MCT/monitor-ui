import { Accent } from '@constants'
import classnames from 'classnames'
import { useMemo } from 'react'
import { Dropdown as RsuiteDropdown } from 'rsuite'
import styled from 'styled-components'

import { Item } from './Item'

import type { DropdownItemProps } from './Item'
import type { IconProps } from '@types_/definitions'
import type { FunctionComponent } from 'react'
import type { DropdownProps as RsuiteDropdownProps } from 'rsuite'

export type DropdownProps = Omit<RsuiteDropdownProps, 'as' | 'icon'> & {
  Icon?: FunctionComponent<IconProps>
  accent?: Accent | undefined
}
function RawDropdown({ accent, className, Icon, title, ...originalProps }: DropdownProps) {
  const controlledClassName = classnames('Component-Dropdow', className)
  const icon = useMemo(() => (Icon ? <Icon size={20} /> : undefined), [Icon])
  const hasIcon = useMemo(() => Boolean(Icon), [Icon])

  switch (accent) {
    case Accent.TERTIARY:
      return (
        <TertiaryDropdown
          $hasIcon={hasIcon}
          $hasTitle={!!title}
          className={controlledClassName}
          icon={icon}
          title={title}
          {...originalProps}
        />
      )

    case Accent.SECONDARY:
      return (
        <SecondaryDropdown
          $hasIcon={hasIcon}
          $hasTitle={!!title}
          className={controlledClassName}
          icon={icon}
          title={title}
          {...originalProps}
        />
      )

    default:
      return (
        <PrimaryDropdown
          $hasIcon={hasIcon}
          $hasTitle={!!title}
          className={controlledClassName}
          icon={icon}
          title={title}
          {...originalProps}
        />
      )
  }
}

// TODO We need to split into multiple styled components as done in `<Button />`.
const PrimaryDropdown = styled(RsuiteDropdown as any)<{
  $hasIcon: boolean
  $hasTitle: boolean
}>`
  .rs-btn {
    align-items: center;
    background-color: ${p => p.theme.color.charcoal};
    border: solid 1px ${p => p.theme.color.charcoal};
    border-radius: 0px;
    color: ${p => p.theme.color.gainsboro};
    display: flex;
    font-size: 13px;
    padding: 3px ${p => (p.$hasTitle ? 12 : 6)}px ${p => (p.$hasIcon ? '4px' : '5px')};

    &:hover {
      background-color: ${p => p.theme.color.blueYonder};
      border: 1px solid ${p => p.theme.color.blueYonder};
      color: ${p => p.theme.color.white};
    }

    &:active {
      background-color: ${p => p.theme.color.blueGray};
      border: 1px solid ${p => p.theme.color.blueGray};
      color: ${p => p.theme.color.white};
    }

    &:disabled {
      background-color: ${p => p.theme.color.lightGray};
      border: 1px solid ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.cultured};
    }

    > .Element-IconBox {
      margin: 1px ${p => (p.$hasTitle ? 8 : 0)}px 0 0;
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
  $hasTitle: boolean
}>`
  .rs-btn {
    align-items: center;
    display: flex;
    padding: 3px ${p => (p.$hasTitle ? 12 : 6)}px ${p => (p.$hasIcon ? '4px' : '5px')};

    border-radius: 0;
    background-color: transparent;
    border: 1px solid ${p => p.theme.color.charcoal};
    color: ${p => p.theme.color.charcoal};

    &:hover,
    &._hover {
      background-color: ${p => p.theme.color.blueYonder25};
      border: 1px solid ${p => p.theme.color.blueYonder};
      color: ${p => p.theme.color.blueYonder};
    }

    &:active,
    &._active {
      background-color: ${p => p.theme.color.blueGray25};
      border: 1px solid ${p => p.theme.color.blueGray};
      color: ${p => p.theme.color.blueGray};
    }

    &:disabled,
    &._disabled {
      background-color: transparent;
      border: 1px solid ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.lightGray};
    }

    > .Element-IconBox {
      margin: 1px ${p => (p.$hasTitle ? 8 : 0)}px 0 0;
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

const TertiaryDropdown = styled(RsuiteDropdown as any)<{
  $hasIcon: boolean
  $hasTitle: boolean
}>`
  .rs-btn {
    align-items: center;
    display: flex;
    padding: 3px ${p => (p.$hasTitle ? 13 : 7)}px ${p => (p.$hasIcon ? '4px' : '5px')};

    border-radius: 0;
    background-color: transparent;
    border: unset;
    color: ${p => p.theme.color.charcoal};

    &:hover,
    &._hover {
      background-color: ${p => p.theme.color.blueYonder25};
      border: unset;
      color: ${p => p.theme.color.blueYonder};
    }

    &:active,
    &._active {
      background-color: ${p => p.theme.color.blueGray25};
      border: unset;
      color: ${p => p.theme.color.blueGray};
    }

    &:disabled,
    &._disabled {
      background-color: transparent;
      border: unset;
      color: ${p => p.theme.color.lightGray};
    }

    > .Element-IconBox {
      margin: 1px ${p => (p.$hasTitle ? 8 : 0)}px 0 0;
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

export { type DropdownItemProps }
