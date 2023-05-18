import classnames from 'classnames'
import styled from 'styled-components'

import { Action } from './Action'
import { Body } from './Body'
import { Title } from './Title'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'

import type { HTMLAttributes } from 'react'

export type DialogProps = HTMLAttributes<HTMLDivElement> & {
  isAbsolute?: boolean
}
export function RawDialog({ children, className, isAbsolute = false, ...nativeProps }: DialogProps) {
  const controlledClassName = classnames('Component-Dialog', className)

  return (
    <Box $isAbsolute={isAbsolute} className={controlledClassName} onClick={stopMouseEventPropagation} {...nativeProps}>
      <Overlay $isAbsolute={isAbsolute} />

      <Window $isAbsolute={isAbsolute}>{children}</Window>
    </Box>
  )
}

export const Box = styled.div<{
  $isAbsolute: boolean
}>`
  position: ${p => (p.$isAbsolute ? 'absolute' : 'fixed')};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 9000;
`

const Overlay = styled.div<{
  $isAbsolute: boolean
}>`
  background-color: ${p => p.theme.color.charcoal};
  bottom: 0;
  left: 0;
  opacity: 0.53;
  position: ${p => (p.$isAbsolute ? 'absolute' : 'fixed')};
  right: 0;
  top: 0;
  z-index: 1;
`

const Window = styled.div<{
  $isAbsolute: boolean
}>`
  border-radius: 2px;
  bottom: 100px;
  box-shadow: 4px;
  max-width: 32rem;
  position: ${p => (p.$isAbsolute ? 'absolute' : 'fixed')};
  width: calc(100% - 2 * 8px);
  z-index: 1;
  @media (min-width: 740px) {
    bottom: auto;
    min-width: 586px;
  }
`

RawDialog.displayName = 'Dialog'

export const Dialog = Object.assign(RawDialog, {
  Action,
  Body,
  Title
})
