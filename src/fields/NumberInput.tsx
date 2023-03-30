import { useCallback, useMemo } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'type' | 'value'> & {
  error?: string | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: number | undefined) => Promisable<void>) | undefined
  value?: number | undefined
}
export function NumberInput({
  error,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  value,
  ...originalProps
}: NumberInputProps) {
  const controlledValue = useMemo(
    () => (!isUndefinedWhenDisabled || !originalProps.disabled ? value : undefined),
    [isUndefinedWhenDisabled, originalProps.disabled, value]
  )
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([originalProps.disabled, originalProps.name])

  const handleChange = useCallback(
    (nextValue: string) => {
      if (!onChange) {
        return
      }

      const normalizedNextValueAsString = nextValue && nextValue.length ? nextValue : undefined
      const nextValueAsNumber = Number(normalizedNextValueAsString)
      const normalizedNextValue = !Number.isNaN(nextValueAsNumber) ? nextValueAsNumber : undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field className="Field-NumberInput">
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <StyledInput
        key={key}
        $hasError={hasError}
        $isLight={isLight}
        id={originalProps.name}
        onChange={handleChange}
        type="number"
        value={controlledValue}
        {...originalProps}
      />

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(Input)<{
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
