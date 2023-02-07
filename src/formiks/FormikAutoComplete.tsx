import { useField } from 'formik'
import { useMemo } from 'react'

import { AutoComplete } from '../fields/AutoComplete'

import type { AutoCompleteProps } from '../fields/AutoComplete'

export type FormikAutoCompleteProps = Omit<AutoCompleteProps, 'defaultValue' | 'onChange'>
export function FormikAutoComplete({ name, ...originalProps }: FormikAutoCompleteProps) {
  const [field, , helpers] = useField<string | undefined>(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  if (!defaultValue) {
    return <AutoComplete name={name} onChange={helpers.setValue} {...originalProps} />
  }

  return <AutoComplete defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
