import { useField } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'

import { TextInput } from '../fields/TextInput'

import type { TextInputProps } from '../fields/TextInput'

export type FormikTextInputProps = Omit<TextInputProps, 'defaultValue' | 'onChange'>
export function FormikTextInput({ name, ...originalProps }: FormikTextInputProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  const handleChange = useCallback(
    (nextValue: string | undefined) => {
      helpers.setValue(nextValue)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => helpers.setValue(undefined), [])

  return <TextInput defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
