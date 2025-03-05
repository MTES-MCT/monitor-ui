import { CheckTreePicker, type CheckTreePickerProps } from '@fields/CheckTreePicker'
import { useField } from 'formik'
import { useMemo } from 'react'

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

  const handleChange = useMemo(
    () => (value: TreeOption[] | undefined) => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <CheckTreePicker {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
  )
}
