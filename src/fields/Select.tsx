import { useCallback } from 'react'
import { SelectPicker, TagPicker } from 'rsuite'
import styled from 'styled-components'

import type { Option } from '../types'
import type { TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SelectProps = Omit<TagPickerProps, 'as' | 'data' | 'onChange' | 'placeholder'> & {
  isMulti?: boolean
  label: string
  name: string
  onChange: (valueOrValues: string | string[] | undefined) => Promisable<void>
  options: Option[]
}
export function Select({
  isMulti = false,
  label,
  name,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: SelectProps) {
  const handleChange = useCallback(
    (valueOrValues: string | string[] | null) => {
      if (!onChange) {
        return
      }

      const normalizedValueOrValues =
        !valueOrValues || (Array.isArray(valueOrValues) && !valueOrValues.length) ? undefined : valueOrValues

      onChange(normalizedValueOrValues)
    },
    [onChange]
  )

  if (isMulti) {
    return (
      <StyledTagPicker
        data={options}
        onChange={handleChange}
        placeholder={label}
        searchable={searchable}
        {...originalProps}
      />
    )
  }

  return (
    <StyledSelectPicker
      data={options}
      // The `unknown` type from Rsuite library is wrong. It should be inferred from `data` prop type.
      // `onChange: ((value: unknown, event: React.SyntheticEvent<Element, Event>) => void) | undefined`
      onChange={handleChange as any}
      placeholder={label}
      searchable={searchable}
      {...originalProps}
    />
  )
}

const StyledSelectPicker = styled(SelectPicker)`
  display: inline-flex;
  width: 9.25rem;
`

const StyledTagPicker = styled(TagPicker)`
  cursor: pointer;
  width: 9.25rem;

  > .rs-picker-toggle {
    cursor: inherit;
  }
`
