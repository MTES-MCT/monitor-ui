import { useField } from 'formik'
import { useMemo } from 'react'

import { TextInput } from '../fields/TextInput'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikTextInput({ name, ...originalProps }: FormikTextInputProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = useMemo(() => (meta.initialTouched ? meta.error : undefined), [meta.error, meta.initialTouched])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <TextInput defaultValue={defaultValue} error={error} name={name} onChange={handleChange} {...originalProps} />
}
