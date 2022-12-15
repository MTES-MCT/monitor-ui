import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'

export type FormikMultiSelectProps = Omit<MultiSelectProps, 'defaultValue' | 'onChange'>
export function FormikMultiSelect({ name, ...originalProps }: FormikMultiSelectProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  return <MultiSelect defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
