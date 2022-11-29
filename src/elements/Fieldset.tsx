import styled from 'styled-components'

import { Field } from './Field'

import type { FieldsetHTMLAttributes } from 'react'

export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement>
export function Fieldset(nativeProps: FieldsetProps) {
  return <StyledField as="fieldset" {...nativeProps} />
}

const StyledField = styled(Field)`
  border: 0;
  margin: 0;
  padding: 0;
`
