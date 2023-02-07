import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'

export type FormikMultiCheckboxProps = Omit<MultiCheckboxProps, 'defaultValue' | 'onChange'>
export function FormikMultiCheckbox({ name, ...originalProps }: FormikMultiCheckboxProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <MultiCheckbox defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
