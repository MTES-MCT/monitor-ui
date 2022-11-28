import { useCallback, useMemo } from 'react'
import { TagPicker } from 'rsuite'
import styled from 'styled-components'

import type { Option } from '../types'
import type { TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type MultiSelectProps = Omit<TagPickerProps, 'as' | 'data' | 'defaultValue' | 'onChange' | 'value'> & {
  defaultValue?: string[]
  name: string
  onChange?: (nextValue: string[] | undefined) => Promisable<void>
  options: Option[]
}
export function MultiSelect({
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

  return <StyledTagPicker key={key} data={options} onChange={handleChange} searchable={searchable} {...originalProps} />
}

const StyledTagPicker = styled(TagPicker)`
  cursor: pointer;

  > .rs-picker-toggle {
    cursor: inherit;
  }
`
