import { useField } from 'formik'
import { useMemo } from 'react'

import { AutoComplete } from '../fields/AutoComplete'

import type { AutoCompleteProps } from '../fields/AutoComplete'

export type FormikAutoCompleteProps = Omit<AutoCompleteProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikAutoComplete({ name, ...originalProps }: FormikAutoCompleteProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = useMemo(() => (meta.initialTouched ? meta.error : undefined), [meta.error, meta.initialTouched])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  if (!defaultValue) {
    return <AutoComplete name={name} onChange={helpers.setValue} {...originalProps} />
  }

  return (
    <AutoComplete defaultValue={defaultValue} error={error} name={name} onChange={handleChange} {...originalProps} />
  )
}
