import { useField } from 'formik'
import { useMemo } from 'react'

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

  const handleChange = useMemo(
    () => value => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Select error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
