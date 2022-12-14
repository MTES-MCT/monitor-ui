import { useField } from 'formik'
import { useMemo } from 'react'

import { AutoComplete } from '../fields/AutoComplete'

import type { AutoCompleteProps } from '../fields/AutoComplete'

export type FormikAutoCompleteProps = Omit<AutoCompleteProps, 'defaultValue' | 'onChange'>
export function FormikAutoComplete({ name, ...originalProps }: FormikAutoCompleteProps) {
  const [field, , helpers] = useField<string | undefined>(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps, @typescript-eslint/naming-convention
  const defaultValue = useMemo(() => field.value, [])

  return <AutoComplete defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
