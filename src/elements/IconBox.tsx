import styled from 'styled-components'

export type IconBoxProps = {
  color?: string
  /** In REM */
  size?: number
}
export const IconBox = styled.div<IconBoxProps>`
  color: ${p => p.color ?? 'inherit'};

  > svg {
    display: block;
    height: ${p => p.size ?? 1}rem;
    width: ${p => p.size ?? 1}rem;
  }
`
