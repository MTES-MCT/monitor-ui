import { useField } from 'formik'
import { useMemo } from 'react'

import { NumberInput } from '../fields/NumberInput'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { NumberInputProps } from '../fields/NumberInput'

export type FormikNumberInputProps = Omit<NumberInputProps, 'error' | 'onChange' | 'value'> & {
  isUndefinedWhenDisabled?: boolean | undefined
}

export function FormikNumberInput({ isUndefinedWhenDisabled = false, name, ...originalProps }: FormikNumberInputProps) {
  const [field, meta, helpers] = useField(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <NumberInput error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
