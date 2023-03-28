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

  const controlledValue = useMemo(
    () => (!isUndefinedWhenDisabled || !originalProps.disabled ? value : undefined),
    [isUndefinedWhenDisabled, originalProps.disabled, value]
  )
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledValue, originalProps.disabled, originalProps.name])

  const handleChange = useCallback(() => {
    if (!onChange) {
      return
    }

    const nextValue = inputRef.current.value.trim()
    const normalizedNextValue = nextValue.length ? nextValue : undefined

    onChange(normalizedNextValue)
  }, [onChange])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field>
      <Label disabled={originalProps.disabled} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledInput
        key={key}
        ref={inputRef}
        $isLight={isLight}
        as="textarea"
        id={originalProps.name}
        onChange={handleChange}
        rows={rows}
        value={controlledValue}
        {...originalProps}
      />

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(Input)<{
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: 0;
  font-size: 13px;
  padding: 7px 11px;
  width: 100%;

  ::placeholder {
    color: ${p => (p.$isLight ? p.theme.color.slateGray : p.theme.color.slateGray)};
  }
`
