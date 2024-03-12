import { type HTMLAttributes, type ReactNode } from 'react'
import styled from 'styled-components'

import { Level } from '../constants'
import { ExclamationPoint } from '../symbols/ExclamationPoint'
import { THEME } from '../theme'

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode | string
  level?: Level | undefined
}
export function Message({ children, level = Level.WARNING, ...nativeProps }: MessageProps) {
  switch (level) {
    case Level.WARNING:
      return (
        <Box backgroundColor={THEME.color.goldenPoppy25} color={THEME.color.slateGray} {...nativeProps}>
          <StyledExclamationPoint backgroundColor={THEME.color.goldenPoppy} color={THEME.color.white} />
          <ChildrenContainer>{children}</ChildrenContainer>
        </Box>
      )

    default:
      return (
        <Box backgroundColor={THEME.color.goldenPoppy25} color={THEME.color.slateGray} {...nativeProps}>
          <StyledExclamationPoint backgroundColor={THEME.color.goldenPoppy} color={THEME.color.white} />
          <ChildrenContainer>{children}</ChildrenContainer>
        </Box>
      )
  }
}

const ChildrenContainer = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Box = styled.span<{
  backgroundColor?: string | undefined
  color?: string | undefined
}>`
  background: ${p => p.backgroundColor ?? p.theme.color.goldenPoppy25};
  color: ${p => p.color ?? p.theme.color.slateGray};
  padding: 16px;
  display: flex;
  border-radius: 2px;
  font-size: 13px;
`

const StyledExclamationPoint = styled(ExclamationPoint)`
  flex-shrink: 0;
`
