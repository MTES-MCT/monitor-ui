import { useCallback, useMemo, useRef } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import type { MutableRefObject, TextareaHTMLAttributes } from 'react'
import type { Promisable } from 'type-fest'

export type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'defaultValue' | 'onChange' | 'value'> & {
  defaultValue?: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
}
export function Textarea({ onChange, rows = 3, ...originalProps }: TextareaProps) {
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

  return <StyledInput key={key} ref={inputRef} as="textarea" onChange={handleChange} rows={rows} {...originalProps} />
}

export const StyledInput = styled(Input)``
