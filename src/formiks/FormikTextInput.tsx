import { useField } from 'formik'
import { useMemo } from 'react'

import { TextInput } from '../fields/TextInput'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'error' | 'onChange' | 'value'>
export function FormikTextInput({ name, ...originalProps }: FormikTextInputProps) {
  const [field, meta, helpers] = useField(name)

  const error = meta.touched ? meta.error : undefined
  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <TextInput error={error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
