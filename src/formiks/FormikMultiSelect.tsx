import { useField } from 'formik'

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

  const handleChange = (nextValue: OptionValue[] | undefined) => {
    helpers.setValue(nextValue)
  }

  return <MultiSelect {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
