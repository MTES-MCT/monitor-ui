import styled from 'styled-components'

import { Field } from './Field'

import type { FieldsetHTMLAttributes } from 'react'

export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  isLight?: boolean
  isMulti?: boolean
}
export function Fieldset({ isLight = false, isMulti = false, ...nativeProps }: FieldsetProps) {
  return <StyledField as="fieldset" isLight={isLight} isMulti={isMulti} {...nativeProps} />
}

const StyledField = styled(Field)<{
  isLight: boolean
  isMulti: boolean
}>`
  background-color: ${p => (p.isLight ? 'white' : 'transparent')};

  border: 0;
  margin: 0;
  padding: ${p => (p.isMulti ? '1rem' : 0)};
`
