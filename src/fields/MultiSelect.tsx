import { useCallback, useMemo } from 'react'
import { TagPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { Label } from '../elements/Label'

import type { Option } from '../types'
import type { TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type MultiSelectProps = Omit<TagPickerProps, 'as' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value'> & {
  defaultValue?: string[]
  /** Width in REM */
  fixedWidth?: number
  isLabelHidden?: boolean
  isLight?: boolean
  label: string
  name: string
  onChange?: (nextValue: string[] | undefined) => Promisable<void>
  options: Option[]
}
export function MultiSelect({
  fixedWidth = 5,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: MultiSelectProps) {
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const handleChange = useCallback(
    (nextValue: string[] | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = !nextValue || !nextValue.length ? undefined : nextValue

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  return (
    <Field>
      <Label htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledTagPicker
        key={key}
        $fixedWidth={fixedWidth}
        $isLight={isLight}
        data={options}
        id={originalProps.name}
        onChange={handleChange}
        searchable={searchable}
        {...originalProps}
      />
    </Field>
  )
}

// TODO A width seems to be mandatory in rsuite which is a very dirty behavior.
// We should hack that.
const StyledTagPicker = styled(TagPicker)<{
  $fixedWidth: number
  $isLight: boolean
}>`
  border: 0;
  cursor: pointer;
  width: ${p => p.$fixedWidth}rem;

  > .rs-picker-toggle {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    cursor: inherit;
  }
`
