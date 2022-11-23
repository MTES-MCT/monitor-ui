import { useMemo } from 'react'
import styled from 'styled-components'

export type OutputProps = {
  value?: any
}
export function Output({ value }: OutputProps) {
  // eslint-disable-next-line no-null/no-null
  const valueAsString = useMemo(() => JSON.stringify(value, null, 2), [value])

  if (value === undefined) {
    return <></>
  }

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
  margin: 1rem 0 0.5rem 0;
`

const Value = styled.pre`
  background-color: ${p => p.theme.color.gunMetal};
  color: ${p => p.theme.color.white};
  margin: 0;
  padding: 0.5rem;
`
