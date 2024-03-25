import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

// TODO Use `$` prefix for these props.
export type ExclamationPointProps = HTMLAttributes<HTMLSpanElement> & {
  backgroundColor?: string | undefined
  color?: string | undefined
  size?: number
}

const DEFAULT_SIZE = 20

export const ExclamationPoint = styled.span<ExclamationPointProps>`
  background: ${p => p.backgroundColor ?? p.theme.color.goldenPoppy};
  border-radius: ${p => `${p.size ?? DEFAULT_SIZE}px`};
  color: ${p => p.color ?? p.theme.color.white};
  display: inline-flex; /* use flexbox for easier centering */
  justify-content: center; /* center content horizontally */
  align-items: center; /* center content vertically */
  font-size: ${p => `${p.size && p.size <= 13 ? p.size : 13}px`};
  font-weight: 700;
  height: ${p => `${p.size ?? DEFAULT_SIZE}px`};
  width: ${p => `${p.size ?? DEFAULT_SIZE}px`};
  box-sizing: border-box;

  ::after {
    content: '! ';
  }
`
