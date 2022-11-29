import { useField } from 'formik'
import { useCallback, useEffect } from 'react'

import { Textarea } from '../fields/Textarea'

import type { TextareaProps } from '../fields/Textarea'

export type FormikTextareaProps = Omit<TextareaProps, 'defaultValue' | 'onChange'>
export function FormikTextarea({ name, ...originalProps }: FormikTextareaProps) {
  const [, , helpers] = useField(name)
  // We don't include `setValues` in `useCallback()` and `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  const { setValue } = helpers

  const handleChange = useCallback((nextValue: string | undefined) => {
    setValue(nextValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <Textarea name={name} onChange={handleChange} {...originalProps} />
}
