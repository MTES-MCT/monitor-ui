import { useField } from 'formik'

import { CheckPicker } from '../fields/CheckPicker'

import type { CheckPickerProps } from '../fields/CheckPicker'
import type { OptionValueType } from '../types/definitions'

export type FormikCheckPickerProps<OptionValue extends OptionValueType = string> = Omit<
  CheckPickerProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikCheckPicker<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikCheckPickerProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  const handleChange = (nextValue: OptionValue[] | undefined) => {
    helpers.setValue(nextValue)
  }

  return <CheckPicker {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
