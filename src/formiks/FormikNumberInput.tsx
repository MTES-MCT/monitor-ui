import { useField } from 'formik'

import { NumberInput } from '../fields/NumberInput'

import type { NumberInputProps } from '../fields/NumberInput'

export type FormikNumberInputProps = Omit<NumberInputProps, 'error' | 'onChange' | 'value'>
export function FormikNumberInput({ name, ...originalProps }: FormikNumberInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (nextValue: number | undefined) => {
    helpers.setValue(nextValue)
  }

  return <NumberInput {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
