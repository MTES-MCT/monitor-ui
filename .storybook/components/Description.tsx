import { type ReactNode } from 'react'
import styled from 'styled-components'

export type OutputProps = {
  children: ReactNode
}
export function Description({ children }: OutputProps) {
  return (
    <Box>
      <Label>
        <span>📖</span> Description
      </Label>

      {children}
    </Box>
  )
}

const Box = styled.div`
  background-color: #2e75ab;
  color: white;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 14px 16px 16px;

  > p {
    margin-top: 8px;
  }
`

const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1;

  > span {
    font-size: 20px;
    vertical-align: -3px;
  }
`
