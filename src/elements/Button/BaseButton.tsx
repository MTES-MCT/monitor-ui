import { Size } from '@constants'
import { type ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const FONT_SIZE: Record<Size, string> = {
  [Size.LARGE]: '13px',
  [Size.NORMAL]: '13px',
  [Size.SMALL]: '11px'
}
const PADDING: Record<Size, string> = {
  [Size.LARGE]: '12px',
  [Size.NORMAL]: '6px 12px',
  [Size.SMALL]: '5px 8px 4px'
}

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $isFullWidth: boolean
  $size: Size
}
export const BaseButton = styled.button<BaseButtonProps>`
  align-items: center;
  display: inline-flex;
  font-size: ${p => FONT_SIZE[p.$size]};
  justify-content: center;
  max-width: 100%;
  padding: ${p => PADDING[p.$size]};
  width: ${p => (p.$isFullWidth ? '100%' : 'auto')};

  > .Element-IconBox {
    margin-right: 5px;
  }
`
