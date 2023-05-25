import { useField } from 'formik'
import { useMemo } from 'react'

import { NumberInput } from '../fields/NumberInput'

import type { NumberInputProps } from '../fields/NumberInput'

export type FormikNumberInputProps = Omit<NumberInputProps, 'error' | 'onChange' | 'value'>
export function FormikNumberInput({ name, ...originalProps }: FormikNumberInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = useMemo(
    () => value => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <NumberInput error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
