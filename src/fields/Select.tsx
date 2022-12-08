import { useCallback, useMemo } from 'react'
import { SelectPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { Label } from '../elements/Label'

import type { Option } from '../types'
import type { SelectPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SelectProps = Omit<SelectPickerProps<any>, 'as' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value'> & {
  defaultValue?: string
  isLabelHidden?: boolean
  isLight?: boolean
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
  options: Option[]
}
export function Select({
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: SelectProps) {
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const handleChange = useCallback(
    (nextValue: string | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = nextValue ?? undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  return (
    <Field>
      <Label htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledSelectPicker
        key={key}
        data={options}
        id={originalProps.name}
        isLight={isLight}
        // The `unknown` type from Rsuite library is wrong. It should be inferred from `data` prop type.
        // `onChange: ((value: unknown, event: React.SyntheticEvent<Element, Event>) => void) | undefined`
        onChange={handleChange as any}
        searchable={searchable}
        {...originalProps}
      />
    </Field>
  )
}

const StyledSelectPicker = styled(SelectPicker)<{
  isLight: boolean
}>`
  > .rs-picker-toggle {
    background-color: ${p => (p.isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: 0;
  }
`
