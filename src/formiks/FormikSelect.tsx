import { useField } from 'formik'
import { useMemo } from 'react'

import { Select } from '../fields/Select'

import type { SelectProps } from '../fields/Select'

export type FormikSelectProps<OptionValue extends number | string | Record<string, any> = string> = Omit<
  SelectProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikSelect<OptionValue extends number | string | Record<string, any> = string>({
  name,
  ...originalProps
}: FormikSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <Select error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
