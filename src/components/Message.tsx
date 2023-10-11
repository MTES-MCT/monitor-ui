import { type HTMLAttributes } from 'react'
import styled from 'styled-components'

import { ExclamationPoint } from '../elements/ExclamationPoint'

export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  backgroundColor?: string | undefined
  children?: string | undefined
  color?: string | undefined
  iconBackgroundColor?: string | undefined
  iconColor?: string | undefined
}
export function Message({
  backgroundColor,
  children,
  color,
  iconBackgroundColor,
  iconColor,
  ...nativeProps
}: MessageProps) {
  return (
    <Box backgroundColor={backgroundColor} color={color} {...nativeProps}>
      <StyledExclamationPoint backgroundColor={iconBackgroundColor} color={iconColor} />
      <Text>{children}</Text>
    </Box>
  )
}

const Text = styled.div`
  margin-left: 8px;
`

const Box = styled.span<{
  backgroundColor?: string | undefined
  color?: string | undefined
}>`
  background: ${p => p.backgroundColor || p.theme.color.goldenPoppy25};
  color: ${p => p.color || p.theme.color.slateGray};
  padding: 8px 16px 16px 8px;
  display: flex;
  border-radius: 2px;
  font-size: 13px;
`

const StyledExclamationPoint = styled(ExclamationPoint)`
  flex-shrink: 0;
`
