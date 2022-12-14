import styled from 'styled-components'

export const Disk = styled.span<{
  $color: string
}>`
  background-color: ${p => p.$color};
  border-radius: 50%;
`
