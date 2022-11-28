import { useCallback, useMemo } from 'react'
import { Checkbox as RsuiteCheckbox } from 'rsuite'

import type { CheckboxProps as RsuiteCheckboxProps } from 'rsuite'
import type { ValueType } from 'rsuite/esm/Checkbox'
import type { Promisable } from 'type-fest'

export type CheckboxProps = Omit<RsuiteCheckboxProps, 'checked' | 'onChange'> & {
  label: string
  name: string
  onChange?: (isCheched: boolean) => Promisable<void>
}
export function Checkbox({ label, onChange, ...originalProps }: CheckboxProps) {
  const key = useMemo(
    () => `${originalProps.name}-${String(originalProps.defaultChecked)}`,
    [originalProps.defaultChecked, originalProps.name]
  )

  const handleChange = useCallback(
    (_: ValueType | undefined, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      onChange(isChecked)
    },
    [onChange]
  )

  return (
    <RsuiteCheckbox key={key} onChange={handleChange} {...originalProps}>
      {label}
    </RsuiteCheckbox>
  )
}
