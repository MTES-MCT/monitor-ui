import { useField } from 'formik'
import { useEffect } from 'react'

import { Toggle } from '../fields/Toggle'

import type { ToggleProps } from '../fields/Toggle'

export type FormikToggleProps = Omit<ToggleProps, 'checked' | 'error' | 'onChange'>
export function FormikToggle({ name, ...originalProps }: FormikToggleProps) {
  const [field, meta, helpers] = useField<boolean | undefined>(name)

  const isChecked = Boolean(field.value)

  const handleChange = (isNextChecked: boolean | undefined) => {
    helpers.setValue(isNextChecked)
  }

  // A toggle must initialize its Formik value on mount:
  // it wouldn't make sense to keep it as `undefined` since `undefined` means `false` in the case of a toggle
  useEffect(
    () => {
      helpers.setValue(isChecked)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Toggle {...originalProps} checked={isChecked} error={meta.error} name={name} onChange={handleChange} />
}
