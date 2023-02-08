import { useField } from 'formik'
import { useMemo } from 'react'

import { NumberInput } from '../fields/NumberInput'

import type { NumberInputProps } from '../fields/NumberInput'

export type FormikNumberInputProps = Omit<NumberInputProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikNumberInput({ name, ...originalProps }: FormikNumberInputProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return (
    <NumberInput
      defaultValue={defaultValue}
      error={meta.error}
      name={name}
      onChange={handleChange}
      {...originalProps}
    />
  )
}
