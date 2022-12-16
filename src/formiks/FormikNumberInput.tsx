import { useField } from 'formik'
import { useMemo } from 'react'

import { NumberInput } from '../fields/NumberInput'

import type { NumberInputProps } from '../fields/NumberInput'

export type FormikNumberInputProps = Omit<NumberInputProps, 'defaultValue' | 'onChange'>
export function FormikNumberInput({ name, ...originalProps }: FormikNumberInputProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  return <NumberInput defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
