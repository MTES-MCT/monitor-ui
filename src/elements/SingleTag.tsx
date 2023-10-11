import classnames from 'classnames'
import { type HTMLAttributes, useCallback } from 'react'
import styled from 'styled-components'

import { IconButton } from './IconButton'
import { Accent } from '../constants'
import { Close } from '../icons'

import type { Promisable } from 'type-fest'

export type SingleTagProps = HTMLAttributes<HTMLDivElement> & {
  accent?: Accent | undefined
  children: string
  onDelete: () => Promisable<void>
}
export function SingleTag({ accent = Accent.PRIMARY, children, className, onDelete, ...nativeProps }: SingleTagProps) {
  const controlledClassName = classnames('Component-SingleTag', className)

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
          <SecondaryIconButton accent={Accent.TERTIARY} Icon={Close} iconSize={10} onClick={handleDelete} />
        </Box>
      )

    default:
      return (
        <Box className={controlledClassName} {...nativeProps}>
          <PrimaryText>{children}</PrimaryText>
          <PrimaryIconButton accent={Accent.TERTIARY} Icon={Close} iconSize={10} onClick={handleDelete} />
        </Box>
      )
  }
}

const Box = styled.div`
  align-items: center;
  display: inline-flex;
  max-width: 100%;
`

const PrimaryText = styled.span`
  background-color: ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.gunMetal};
  font-size: 13px;
  line-height: 1.3846;
  padding: 3px 8px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PrimaryIconButton = styled(IconButton)`
  background-color: ${p => p.theme.color.lightGray};
  margin-left: 1px;
  padding: 7px;

  :hover,
  &._hover {
    background-color: ${p => p.theme.color.lightGray};
  }

  :active,
  &._active {
    background-color: ${p => p.theme.color.lightGray};
  }

  :disabled,
  &._disabled {
    background-color: ${p => p.theme.color.lightGray};
  }
`

const SecondaryText = styled(PrimaryText)`
  background-color: ${p => p.theme.color.blueYonder};
  color: ${p => p.theme.color.white};
`

const SecondaryIconButton = styled(PrimaryIconButton)`
  background-color: ${p => p.theme.color.blueYonder};
  color: ${p => p.theme.color.white};

  :hover,
  &._hover {
    background-color: ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder25};
  }

  :active,
  &._active {
    background-color: ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder25};
  }

  :disabled,
  &._disabled {
    background-color: ${p => p.theme.color.blueYonder};
    color: ${p => p.theme.color.blueYonder25};
  }
`
