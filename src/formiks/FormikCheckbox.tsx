import { useField } from 'formik'
import { useCallback, useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'onChange'> & {
  name: string
}
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, , helpers] = useField(name)

  const value = useMemo(() => field.value, [field.value])
  const setValue = useMemo(() => helpers.setValue, [helpers.setValue])

  // We don't include `setValues` in  `useCallback()` dependencok calls
  // both because it is useless and it will trigger infinite ho
  const handleChange = useCallback((isChecked: boolean) => {
    setValue(isChecked)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Checkbox defaultChecked={value} name={name} onChange={handleChange} {...originalProps} />
}
