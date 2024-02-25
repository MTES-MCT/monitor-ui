import { useField } from 'formik'
import { useMemo } from 'react'

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

  const handleChange = useMemo(
    () => (value: OptionValue[] | undefined) => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <CheckPicker {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
