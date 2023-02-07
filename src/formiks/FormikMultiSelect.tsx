import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'

export type FormikMultiSelectProps = Omit<MultiSelectProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikMultiSelect({ name, ...originalProps }: FormikMultiSelectProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = useMemo(() => (meta.initialTouched ? meta.error : undefined), [meta.error, meta.initialTouched])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return (
    <MultiSelect defaultValue={defaultValue} error={error} name={name} onChange={handleChange} {...originalProps} />
  )
}
