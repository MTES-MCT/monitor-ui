import styled from 'styled-components'

const Box = styled.div`
  border: solid 1px ${p => p.theme.color.lightGray};
  max-width: 640px;
  padding: 32px;

  > .Element-Field,
  > .Element-Fieldset {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }
`

export const LightBox = styled(Box)`
  background-color: ${p => p.theme.color.white};
`

export const DarkBox = styled(Box)`
  background-color: ${p => p.theme.color.gainsboro};
`
