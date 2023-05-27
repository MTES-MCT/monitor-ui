import { useCallback, useMemo, useRef } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { MutableRefObject, TextareaHTMLAttributes } from 'react'
import type { Promisable } from 'type-fest'

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'defaultValue' | 'id' | 'onChange' | 'value'
> & {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: string | undefined) => Promisable<void>) | undefined
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
  const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([originalProps.disabled, originalProps.name])

  const handleChange = useCallback(() => {
    if (!onChange) {
      return
    }

    const nextValue = inputRef.current.value
    const normalizedNextValue = nextValue.trim().length ? nextValue : undefined

    onChange(normalizedNextValue)
  }, [onChange])

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
        key={key}
        ref={inputRef}
        $hasError={hasError}
        $isLight={isLight}
        as="textarea"
        id={originalProps.name}
        onChange={handleChange}
        rows={rows}
        value={value || ''}
        {...originalProps}
      />

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(Input)<{
  $hasError: boolean
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.gainsboro)};
  font-size: 13px;
  padding: 7px 11px;
  width: 100%;

  ::placeholder {
    color: ${p => (p.$isLight ? p.theme.color.slateGray : p.theme.color.slateGray)};
  }

  :hover {
    border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder[100])} !important;
  }

  :active,
  :focus {
    border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray[100])} !important;
    outline: 0;
  }
`
