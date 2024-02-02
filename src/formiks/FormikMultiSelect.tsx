import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'
import type { OptionValueType } from '../types/definitions'

export type FormikMultiSelectProps<OptionValue extends OptionValueType = string> = Omit<
  MultiSelectProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikMultiSelect<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikMultiSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  const handleChange = useMemo(
    () => value => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <MultiSelect error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
