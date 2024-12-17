import { Accent } from '@constants'
import classnames from 'classnames'
import { type HTMLAttributes, useCallback } from 'react'
import styled from 'styled-components'

import { Close } from '../icons'

import type { Promisable } from 'type-fest'

export type SingleTagProps = HTMLAttributes<HTMLDivElement> & {
  accent?: Accent | undefined
  children: string
  onDelete: () => Promisable<void>
}
export function SingleTag({ accent = Accent.PRIMARY, children, className, onDelete, ...nativeProps }: SingleTagProps) {
  // TODO Remove `Component-SingleTag` in a next major/breaking version.
  const controlledClassName = classnames('Component-SingleTag', 'Element-SingleTag', className)

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete()
    }
  }, [onDelete])

  switch (accent) {
    case Accent.SECONDARY:
      return (
        <Box className={controlledClassName} {...nativeProps}>
          <SecondaryText>{children}</SecondaryText>
          <SecondaryIconButton onClick={handleDelete}>
            <Close size={10} />
          </SecondaryIconButton>
        </Box>
      )

    case Accent.PRIMARY:
    default:
      return (
        <Box className={controlledClassName} {...nativeProps}>
          <PrimaryText>{children}</PrimaryText>
          <PrimaryIconButton onClick={handleDelete}>
            <Close size={10} />
          </PrimaryIconButton>
        </Box>
      )
  }
}

const Box = styled.div`
  align-items: center;
  display: inline-flex;
  max-width: 100%;
`

const BaseIconButton = styled.button`
  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 18px;
  margin-left: 1px;
  padding: 8px;
`

const PrimaryText = styled.span`
  background-color: ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.gunMetal};
  font-size: 13px;
  line-height: 1.3846;
  padding: 2px 8px 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PrimaryIconButton = styled(BaseIconButton)`
  background-color: ${p => p.theme.color.lightGray};
  border-color: ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.charcoal};

  &:hover,
  &._hover {
    background-color: ${p => p.theme.color.lightGray};
    border-color: ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.blueYonder};
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.lightGray};
    border-color: ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.blueGray};
  }

  &:disabled,
  &._disabled {
    background-color: ${p => p.theme.color.lightGray};
    border-color: ${p => p.theme.color.lightGray};
    color: ${p => p.theme.color.lightGray};
  }
`

const SecondaryText = styled(PrimaryText)`
  background-color: ${p => p.theme.color.blueYonder};
  color: ${p => p.theme.color.white};
`

const SecondaryIconButton = styled(BaseIconButton)`
  background-color: ${p => p.theme.color.blueYonder};
  border-color: ${p => p.theme.color.blueYonder};
  color: ${p => p.theme.color.white};

  &:hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder};
    border-color: ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder25};
  }

  &:active,
  &._active {
    background-color: ${p => p.theme.color.blueYonder};
    border-color: ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder25};
  }

  &:disabled,
  &._disabled {
    background-color: ${p => p.theme.color.blueYonder};
    border-color: ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder25};
  }
`
