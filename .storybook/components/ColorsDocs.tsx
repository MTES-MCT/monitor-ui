import styled from 'styled-components'
import { THEME } from 'theme'

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  justify-self: flex-start;
`

export function ColorCell({ name, value }: { name: string; value: string }) {
  return (
    <ColorBox>
      <Code>{name}</Code>
      <Code $isSmall>{value}</Code>
      <Sample $color={value} />
    </ColorBox>
  )
}

const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 0 !important;
  padding: 0 16px 16px 0;
`

const Code = styled.code<{
  $isSmall?: boolean
}>`
  font-size: ${p => (p.$isSmall ? '11px' : '13px')};
  font-weight: 500;
  padding: 2px 6px;
`

const Sample = styled.div<{
  $color: string
}>`
  background-color: ${p => p.$color};
  border: 1px solid ${THEME.color.lightGray};
  height: 96px;
  width: 160px;
`
