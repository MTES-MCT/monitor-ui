import { useCallback, useMemo } from 'react'
import { SelectPicker } from 'rsuite'
import styled from 'styled-components'

import type { Option } from '../types'
import type { SelectPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SelectProps = Omit<SelectPickerProps<any>, 'as' | 'data' | 'defaultValue' | 'onChange' | 'value'> & {
  defaultValue?: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
  options: Option[]
}
export function Select({
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
`
