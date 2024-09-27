import { Size } from '@constants'
import { type ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const PADDING: Record<Size, string> = {
  [Size.LARGE]: '7px',
  [Size.NORMAL]: '5px',
  [Size.SMALL]: '3px'
}

export type BaseIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $isCompact: boolean | undefined
  $size: Size
}
export const BaseIconButton = styled.button<BaseIconButtonProps>`
  align-items: center;
  border-style: solid;
  border-width: ${p => (p.$isCompact ? 0 : 1)}px;
  display: flex;
  justify-content: center;
  padding: ${p => (p.$isCompact ? 0 : PADDING[p.$size])};
`
