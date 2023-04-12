import { BaseSyntheticEvent, useCallback, useMemo } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { normalizeString } from '../utils/normalizeString'

import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type TextareaProps = Omit<InputProps, 'defaultValue' | 'id' | 'onChange' | 'value'> & {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: string | undefined) => Promisable<void>) | undefined
  rows?: number
  value?: string | undefined
}
export function Textarea({
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  rows = 3,
  value,
  ...originalProps
}: TextareaProps) {
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = Boolean(controlledError)

  const handleChange = useCallback(
    (e: BaseSyntheticEvent) => {
      if (!onChange) {
        return
      }

      onChange(e.target.value)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field className="Field-Textarea">
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <StyledInput
        $hasError={hasError}
        $isLight={isLight}
        as="textarea"
        id={originalProps.name}
        onChange={handleChange}
        rows={rows}
        // handle undefined as a value for a controlled component
        value={value || ''}
        {...originalProps}
      />

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(Input)<{
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: 0;
  outline: ${p => (p.$hasError ? `1px solid ${p.theme.color.maximumRed}` : 0)};
  font-size: 13px;
  padding: 7px 11px;
  width: 100%;

  ::placeholder {
    color: ${p => (p.$isLight ? p.theme.color.slateGray : p.theme.color.slateGray)};
  }
`
