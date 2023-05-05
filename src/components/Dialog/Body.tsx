import styled from 'styled-components'

export const Body = styled.div`
  background-color: ${p => p.theme.color.white};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  display: flex;
  flex-direction: column;
  padding: 8px 8px 8px 8px;
  text-align: center;
  @media (min-width: 740px) {
    padding: 48px 8px 8px 8px;
    text-align: center;
  }

  > p {
    color: ${p => p.theme.color.slateGray};
    padding-top: 2px;
  }
`
