import { useCallback, useMemo } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { Label } from '../elements/Label'

import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type TextInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'value'> & {
  defaultValue?: string
  isLabelHidden?: boolean
  isLight?: boolean
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
}
export function TextInput({ isLabelHidden = false, label, onChange, ...originalProps }: TextInputProps) {
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const handleChange = useCallback(
    (nextValue: string | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = nextValue && nextValue.trim().length ? nextValue : undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  return (
    <Field>
      <Label htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledInput key={key} id={originalProps.name} onChange={handleChange} {...originalProps} />
    </Field>
  )
}

const StyledInput = styled(Input)<{
  isLight: boolean
}>`
  background-color: ${p => (p.isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: 0;
  font-size: 13px;
  width: 100%;
`
