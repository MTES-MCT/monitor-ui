import { useField } from 'formik'
import { useMemo } from 'react'

import { TextInput } from '../fields/TextInput'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'error' | 'onChange' | 'value'> & {
  isUndefinedWhenDisabled?: boolean | undefined
}
export function FormikTextInput({ isUndefinedWhenDisabled = false, name, ...originalProps }: FormikTextInputProps) {
  const [field, meta, helpers] = useField(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <TextInput error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
