import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { MultiSelectProps } from '../fields/MultiSelect'
import type { OptionValueType } from '../types'

export type FormikMultiSelectProps<OptionValue extends OptionValueType = string> = Omit<
  MultiSelectProps<OptionValue>,
  'error' | 'onChange' | 'value'
> & { isUndefinedWhenDisabled?: boolean | undefined }

export function FormikMultiSelect<OptionValue extends OptionValueType = string>({
  isUndefinedWhenDisabled = false,
  name,
  ...originalProps
}: FormikMultiSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <MultiSelect error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
