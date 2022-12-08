import styled from 'styled-components'

export type IconBoxProps = {
  /** In REM */
  $size?: number
  color?: string
}
export const IconBox = styled.div<IconBoxProps>`
  display: inline-block;
  color: ${p => p.color ?? 'inherit'};

  > svg {
    display: block;
    height: ${p => p.$size ?? 1}rem;
    width: ${p => p.$size ?? 1}rem;
  }
`
