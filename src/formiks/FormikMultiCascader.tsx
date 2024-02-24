import { useField } from 'formik'
import { useMemo } from 'react'

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

  const handleChange = useMemo(
    () => (nextValue: OptionValue[] | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <MultiCascader error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
