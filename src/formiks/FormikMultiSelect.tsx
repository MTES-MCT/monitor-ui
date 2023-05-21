import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'
import type { OptionValueType } from '../types'

export type FormikMultiSelectProps<OptionValue extends OptionValueType = string> = Omit<
  MultiSelectProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikMultiSelect<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikMultiSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  const error = meta.touched ? meta.error : undefined
  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <MultiSelect error={error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
