import { HTMLAttributes } from 'react'
import styled from 'styled-components'

export type ExclamationPointProps = HTMLAttributes<HTMLSpanElement> & {
  backgroundColor?: string
  color?: string
}
export const ExclamationPoint = styled.span<ExclamationPointProps>`
  background: ${p => p.backgroundColor || p.theme.color.goldenPoppy};
  border-radius: 15px;
  color: ${p => p.color || p.theme.color.white};
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  line-height: 11px !important;
  height: 20px;
  padding: 3.25px 4px 5px 8.25px;
  width: 20px;
  box-sizing: border-box;

  ::after {
    content: '! ';
  }
`
