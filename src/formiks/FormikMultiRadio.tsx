import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiRadio } from '../fields/MultiRadio'

import type { MultiRadioProps } from '../fields/MultiRadio'
import type { OptionValueType } from '../types'

export type FormikMultiRadioProps<OptionValue extends OptionValueType = string> = Omit<
  MultiRadioProps<OptionValue>,
  'error' | 'onChange' | 'value'
>
export function FormikMultiRadio<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikMultiRadioProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  return <MultiRadio error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
