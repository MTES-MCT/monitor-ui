import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'

export type FormikMultiCheckboxProps<OptionValue extends number | string | Record<string, any> = string> = Omit<
  MultiCheckboxProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
>
export function FormikMultiCheckbox<OptionValue extends number | string | Record<string, any> = string>({
  name,
  ...originalProps
}: FormikMultiCheckboxProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <MultiCheckbox error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
