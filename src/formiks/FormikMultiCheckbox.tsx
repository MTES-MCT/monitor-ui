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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return (
    <MultiCheckbox
      defaultValue={defaultValue}
      error={meta.error}
      name={name}
      onChange={handleChange}
      {...originalProps}
    />
  )
}
