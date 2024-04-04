import styled from 'styled-components'

export type DotProps = {
  $backgroundColor?: string
  $borderColor?: string
  $size?: number
}
export const Dot = styled.span<DotProps>`
  display: flex;
  align-self: baseline;
  border-style: solid;
  border-width: 3px;
  padding: 2px;
  border-radius: 50%;
  height: ${p => p.$size ?? 20}px;
  width: ${p => p.$size ?? 20}px;
  color: ${p => p.$borderColor ?? p.theme.color.charcoal};
  background-color: ${p => p.$backgroundColor ?? 'transparent'};
`
