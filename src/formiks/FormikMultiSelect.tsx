import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'

export type FormikMultiSelectProps<OptionValue extends number | string | Record<string, any> = string> = Omit<
  MultiSelectProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
>
export function FormikMultiSelect<OptionValue extends number | string | Record<string, any> = string>({
  name,
  ...originalProps
}: FormikMultiSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return (
    <MultiSelect defaultValue={field.value} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
  )
}
