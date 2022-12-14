import { useMemo } from 'react'
import styled from 'styled-components'

export type OutputProps = {
  value?: any
}
export function Output({ value }: OutputProps) {
  // eslint-disable-next-line no-null/no-null
  const valueAsString = useMemo(() => (value === undefined ? 'undefined' : JSON.stringify(value, null, 2)), [value])

  return (
    <>
      <Title>Output</Title>
      <Value>{valueAsString}</Value>
    </>
  )
}

const Title = styled.h3`
  font-size: 100%;
  line-height: 1.42;
  margin: 16px 0 8px 0;
`

const Value = styled.pre`
  background-color: ${p => p.theme.color.gunMetal};
  color: ${p => p.theme.color.white};
  margin: 0;
  padding: 8px;
`
