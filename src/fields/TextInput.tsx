import { useCallback, useMemo } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type TextInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'onChange' | 'value'> & {
  defaultValue?: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
}
export function TextInput({ onChange, ...originalProps }: TextInputProps) {
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

  return <StyledInput key={key} onChange={handleChange} {...originalProps} />
}

export const StyledInput = styled(Input)`
  background-color: ${p => p.theme.color.white};
`
