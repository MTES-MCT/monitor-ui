import { useField } from 'formik'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'
import type { OptionValueType } from '../types/definitions'

export type FormikMultiCheckboxProps<OptionValue extends OptionValueType = string> = Omit<
  MultiCheckboxProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikMultiCheckbox<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikMultiCheckboxProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  const handleChange = (nextValue: OptionValue[] | undefined) => {
    helpers.setValue(nextValue)
  }

  return <MultiCheckbox {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
