import { useField } from 'formik'

import { Select } from '../fields/Select'

import type { SelectProps } from '../fields/Select'
import type { OptionValueType } from '../types/definitions'

export type FormikSelectProps<OptionValue extends OptionValueType = string> = Omit<
  SelectProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikSelect<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue | undefined>(name)

  const handleChange = (nextValue: OptionValue | undefined) => {
    helpers.setValue(nextValue)
  }

  return <Select {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
