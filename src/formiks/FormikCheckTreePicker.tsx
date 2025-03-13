import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useField } from 'formik'

import type { TreeOption } from '@fields/CheckTreePicker/types'

export type FormikCheckTreePickerProps<TreeOptionValue extends TreeOption[]> = Omit<
  CheckTreePickerProps<TreeOptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikCheckTreePicker<TreeOptionValue extends TreeOption[]>({
  name,
  ...originalProps
}: FormikCheckTreePickerProps<TreeOptionValue>) {
  const [field, meta, helpers] = useField<TreeOption[] | undefined>(name)

  const handleChange = (nextValue: TreeOption[] | undefined) => {
    helpers.setValue(nextValue)
  }

  return (
    <CheckTreePicker {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
  )
}
