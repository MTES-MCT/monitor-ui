import { useMemo, type HTMLAttributes } from 'react'
import styled from 'styled-components'

export type OutputProps = HTMLAttributes<HTMLDivElement> & {
  label?: string
  value?: any
}
export function Output({ label = 'Output', value, ...nativeProps }: OutputProps) {
  // eslint-disable-next-line no-null/no-null
  const valueAsString = useMemo(() => (value === undefined ? 'undefined' : JSON.stringify(value, null, 2)), [value])

  return (
    <div {...nativeProps}>
      <Title>{`${label} (type: ${typeof value === 'object' ? value.constructor.name : typeof value})`}</Title>
      <Value className="mui-output" data-cy={label}>
        {valueAsString}
      </Value>
    </div>
  )
}

const Title = styled.h3`
  font-size: 100%;
  line-height: 1.3846;
  margin: 16px 0 8px 0;
`

const Value = styled.pre`
  background-color: #1e1e1e;
  color: #ffffff;
  margin: 0;
  padding: 8px;
`
