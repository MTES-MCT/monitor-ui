import styled from 'styled-components'

export const Action = styled.div`
  background-color: ${p => p.theme.color.white};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  display: flex;
  flex-direction: column-reverse;
  padding: 8px 8px 8px 8px;
  @media (min-width: 740px) {
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 48px 8px 48px 8px;
  }

  > button {
    margin-bottom: 2px;
  }
  @media (min-width: 740px) {
    > button {
      margin-bottom: 0;
      margin-right: 2px;
    }
  }
`
