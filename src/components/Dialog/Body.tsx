import styled from 'styled-components'

export const Body = styled.div<{
  $color?: string
}>`
  background-color: ${p => p.theme.color.white};
  display: flex;
  flex-direction: column;
  max-height: 250px;
  overflow-y: auto;
  padding: 24px 24px 0px 24px;

  > p {
    color: ${p => (p.$color ? p.$color : p.theme.color.gunMetal)};
    padding-top: 2px;
  }
`
