import { useField } from 'formik'
import { useMemo } from 'react'

import { Select } from '../fields/Select'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { SelectProps } from '../fields/Select'
import type { OptionValueType } from '../types'

export type FormikSelectProps<OptionValue extends OptionValueType = string> = Omit<
  SelectProps<OptionValue>,
  'error' | 'onChange' | 'value'
> & {
  isUndefinedWhenDisabled?: boolean | undefined
}

export function FormikSelect<OptionValue extends OptionValueType = string>({
  isUndefinedWhenDisabled = false,
  name,
  ...originalProps
}: FormikSelectProps<OptionValue>) {
  const [field, meta, helpers] = useField<OptionValue | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <Select error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
