import styled from 'styled-components'

export type IconBoxProps = {
  color?: string
}
export const IconBox = styled.div<IconBoxProps>`
  color: ${p => p.color ?? 'inherit'};

  /* > svg {
    color: ${p => p.color ?? 'inherit'};
    fill: ${p => p.color ?? 'inherit'};
  } */
`
