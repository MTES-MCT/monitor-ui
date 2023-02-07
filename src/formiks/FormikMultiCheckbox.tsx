import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'

export type FormikMultiCheckboxProps = Omit<MultiCheckboxProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikMultiCheckbox({ name, ...originalProps }: FormikMultiCheckboxProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = useMemo(() => (meta.initialTouched ? meta.error : undefined), [meta.error, meta.initialTouched])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return (
    <MultiCheckbox defaultValue={defaultValue} error={error} name={name} onChange={handleChange} {...originalProps} />
  )
}
