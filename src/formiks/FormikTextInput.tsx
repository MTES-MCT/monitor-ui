import { useField } from 'formik'
import { useMemo } from 'react'

import { TextInput } from '../fields/TextInput'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'defaultValue' | 'onChange'>
export function FormikTextInput({ name, ...originalProps }: FormikTextInputProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  return <TextInput defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
