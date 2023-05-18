import classnames from 'classnames'
import { type HTMLAttributes, useCallback } from 'react'
import styled from 'styled-components'

import { Accent } from '../constants'
import { IconButton } from '../elements/IconButton'
import { Close } from '../icons'

import type { Promisable } from 'type-fest'

export type SingleTagProps = HTMLAttributes<HTMLDivElement> & {
  children: string
  onDelete: () => Promisable<void>
}
export function SingleTag({ children, className, onDelete, ...nativeProps }: SingleTagProps) {
  const controlledClassName = classnames('Component-SingleTag', className)

  const handleDelete = useCallback(() => {
    if (onDelete) {
      onDelete()
    }
  }, [onDelete])

  return (
    <Box className={controlledClassName} {...nativeProps}>
      <Text>{children}</Text>
      <StyledIconButton accent={Accent.TERTIARY} Icon={Close} iconSize={10} onClick={handleDelete} />
    </Box>
  )
}

const Box = styled.div`
  align-items: center;
  display: inline-flex;
`

const Text = styled.span`
  background-color: ${p => p.theme.color.lightGray};
  color: ${p => p.theme.color.gunMetal};
  font-size: 13px;
  line-height: 1.3846;
  padding: 3px 8px 5px;
`

const StyledIconButton = styled(IconButton)`
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
