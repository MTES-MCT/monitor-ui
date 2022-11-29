import { useCallback, useMemo, useRef } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { Label } from '../elements/Label'

import type { MutableRefObject, TextareaHTMLAttributes } from 'react'
import type { Promisable } from 'type-fest'

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'defaultValue' | 'id' | 'onChange' | 'value'
> & {
  defaultValue?: string
  isLabelHidden?: boolean
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
}
export function Textarea({ isLabelHidden = false, label, onChange, rows = 3, ...originalProps }: TextareaProps) {
  const inputRef = useRef() as MutableRefObject<HTMLTextAreaElement>

  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const handleChange = useCallback(() => {
    if (!onChange) {
      return
    }

    const nextValue = inputRef.current.value.trim()
    const normalizedNextValue = nextValue.length ? nextValue : undefined

    onChange(normalizedNextValue)
  }, [onChange])

  return (
    <Field>
      <Label htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledInput
        key={key}
        ref={inputRef}
        as="textarea"
        id={originalProps.name}
        onChange={handleChange}
        rows={rows}
        {...originalProps}
      />
    </Field>
  )
}

export const StyledInput = styled(Input)`
  background-color: ${p => p.theme.color.gainsboro};
  border: 0;
  width: 100%;
`
