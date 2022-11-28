import { useField } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'onChange'>
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, , helpers] = useField(name)

  const value = useMemo(() => field.value, [field.value])
  // We don't include `setValues` in `useCallback()` and `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  const setValue = useMemo(() => helpers.setValue, [helpers.setValue])

  const handleChange = useCallback((isChecked: boolean) => {
    setValue(isChecked)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <Checkbox defaultChecked={value} name={name} onChange={handleChange} {...originalProps} />
}
