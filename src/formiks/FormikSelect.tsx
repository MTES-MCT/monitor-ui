import { useField } from 'formik'
import { useMemo } from 'react'

import { Select } from '../fields/Select'

import type { SelectProps } from '../fields/Select'

export type FormikSelectProps<OptionValue = string> = Omit<
  SelectProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
>
export function FormikSelect<OptionValue = string>({ name, ...originalProps }: FormikSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue | undefined>(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return (
    <Select defaultValue={defaultValue} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
  )
}
