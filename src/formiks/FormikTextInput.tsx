import { useField } from 'formik'

import { TextInput } from '../fields/TextInput'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'error' | 'onChange' | 'value'>
export function FormikTextInput({ name, ...originalProps }: FormikTextInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (nextValue: string | undefined) => {
    helpers.setValue(nextValue)
  }

  return <TextInput {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
