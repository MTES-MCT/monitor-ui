import { useField } from 'formik'
import { useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'error' | 'onChange'>
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isDefaultChecked = useMemo(() => Boolean(field.value), [])

  return (
    <Checkbox
      defaultChecked={isDefaultChecked}
      error={meta.error}
      name={name}
      onChange={handleChange}
      {...originalProps}
    />
  )
}
