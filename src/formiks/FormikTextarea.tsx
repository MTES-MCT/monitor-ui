import { useField } from 'formik'
import { useMemo } from 'react'

import { Textarea } from '../fields/Textarea'

import type { TextareaProps } from '../fields/Textarea'

export type FormikTextareaProps = Omit<TextareaProps, 'error' | 'onChange' | 'value'>
export function FormikTextarea({ name, ...originalProps }: FormikTextareaProps) {
  const [field, meta, helpers] = useField(name)

  const error = meta.touched ? meta.error : undefined
  const handleChange = useMemo(
    () => value => {
      helpers.setTouched(true)
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Textarea error={error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
