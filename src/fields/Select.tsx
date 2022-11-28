import { useCallback, useMemo } from 'react'
import { SelectPicker, TagPicker } from 'rsuite'
import styled from 'styled-components'

import type { Option } from '../types'
import type { SelectPickerProps as RsuiteSelectPickerProps, TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

type SelectCommonProps = {
  name: string
  options: Option[]
}
export type MultiSelectProps = Omit<TagPickerProps, 'as' | 'data' | 'onChange' | 'value'> &
  SelectCommonProps & {
    isMulti: true
    onChange?: (values: string[] | undefined) => Promisable<void>
  }
export type SingleSelectProps = Omit<RsuiteSelectPickerProps<any>, 'as' | 'data' | 'onChange' | 'value'> &
  SelectCommonProps & {
    isMulti?: false
    onChange?: (value: string | undefined) => Promisable<void>
  }
export type SelectProps = MultiSelectProps | SingleSelectProps
export function Select({
  isMulti = false,
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
    (valueOrValues: string | string[] | null) => {
      if (!onChange) {
        return
      }

      const normalizedValueOrValues =
        !valueOrValues || (Array.isArray(valueOrValues) && !valueOrValues.length) ? undefined : valueOrValues

      ;(onChange as (valueOrValues: string | string[] | undefined) => Promisable<void>)(normalizedValueOrValues)
    },
    [onChange]
  )

  if (isMulti) {
    return <StyledTagPicker data={options} onChange={handleChange} searchable={searchable} {...originalProps} />
  }

  return (
    <StyledSelectPicker
      key={key}
      data={options}
      // The `unknown` type from Rsuite library is wrong. It should be inferred from `data` prop type.
      // `onChange: ((value: unknown, event: React.SyntheticEvent<Element, Event>) => void) | undefined`
      onChange={handleChange as any}
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
