import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'error' | 'onChange'>
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isDefaultChecked = useMemo(() => Boolean(field.value), [])

  // A checkbox must initialize its Formik value on mount:
  // it wouldn't make sense to keep it as `undefined` since `undefined` means `false` in the case of a checkbox
  useEffect(
    () => {
      helpers.setValue(isDefaultChecked)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

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
