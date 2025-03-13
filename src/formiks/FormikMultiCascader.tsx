import { useField } from 'formik'

import { MultiCascader } from '../fields/MultiCascader'

import type { MultiCascaderProps } from '../fields/MultiCascader'
import type { OptionValueType } from '../types/definitions'

export type FormikMultiCascaderProps<OptionValue extends OptionValueType = string> = Omit<
  MultiCascaderProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikMultiCascader<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikMultiCascaderProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  const handleChange = (nextValue: OptionValue[] | undefined) => {
    helpers.setValue(nextValue)
  }

  return <MultiCascader {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
