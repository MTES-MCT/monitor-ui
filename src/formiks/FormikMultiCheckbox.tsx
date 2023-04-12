import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'
import type { OptionValueType } from '../types'

export type FormikMultiCheckboxProps<OptionValue extends OptionValueType = string> = Omit<
  MultiCheckboxProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
> & {
  isUndefinedWhenDisabled?: boolean | undefined
}
export function FormikMultiCheckbox<OptionValue extends OptionValueType = string>({
  isUndefinedWhenDisabled = false,
  name,
  ...originalProps
}: FormikMultiCheckboxProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue[] | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <MultiCheckbox error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
