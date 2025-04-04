import { useField } from 'formik'
import { useEffect } from 'react'

import { Checkbox } from '../fields/Checkbox'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'error' | 'onChange'>
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, meta, helpers] = useField<boolean | undefined>(name)

  const isChecked = Boolean(field.value)

  const handleChange = (isNextChecked: boolean | undefined) => {
    helpers.setValue(isNextChecked)
  }

  // A checkbox must initialize its Formik value on mount:
  // it wouldn't make sense to keep it as `undefined` since `undefined` means `false` in the case of a checkbox
  useEffect(
    () => {
      helpers.setValue(isChecked)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Checkbox {...originalProps} checked={isChecked} error={meta.error} name={name} onChange={handleChange} />
}
