import { useField } from 'formik'
import { useMemo } from 'react'

import { TextInput } from '../fields/TextInput'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'error' | 'onChange' | 'value'>
export function FormikTextInput({ name, ...originalProps }: FormikTextInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = useMemo(
    () => value => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <TextInput error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
