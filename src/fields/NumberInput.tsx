import { useCallback, useMemo } from 'react'
import { InputNumber } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { normalizeString } from '../utils/normalizeString'

import type { InputNumberProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<InputNumberProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'type' | 'value'> & {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: number | undefined) => Promisable<void>) | undefined
  value: number | undefined
}
export function NumberInput({
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  value,
  ...originalProps
}: NumberInputProps) {
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = Boolean(controlledError)

  const handleChange = useCallback(
    nextValue => {
      if (!onChange) {
        return
      }
      // despite what is mentionned in the doc, InputNumber accepts a string or a number
      // but only returns a string!
      // Also InputNumber doesn't support undefined as controlled value
      // Our component accepts a number or undefined, so we need to normalize the value
      // and we only return a number or undefined
      const nextValueAsNumber = Number(nextValue)
      const normalizedNextValue = !Number.isNaN(nextValueAsNumber) ? nextValueAsNumber : undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Field className="Field-NumberInput">
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledInput
        $hasError={hasError}
        $isLight={isLight}
        disabled={disabled}
        id={originalProps.name}
        onChange={handleChange}
        type="number"
        value={value === undefined ? '' : value}
        {...originalProps}
      />

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(InputNumber)<{
  $hasError: boolean
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: 0;
  font-size: 13px;
  width: 100%;
  ${p => (p.$hasError ? `outline: 1px solid ${p.theme.color.maximumRed}` : '')};
  &:focus {
    outline-width: 1px;
    outline-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray)};
  }
`
