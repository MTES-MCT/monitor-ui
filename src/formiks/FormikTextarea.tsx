import { useField } from 'formik'
import { useMemo } from 'react'

import { Textarea } from '../fields/Textarea'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { TextareaProps } from '../fields/Textarea'

export type FormikTextareaProps = Omit<TextareaProps, 'error' | 'onChange' | 'value'> & {
  isUndefinedWhenDisabled?: boolean | undefined
}

export function FormikTextarea({ isUndefinedWhenDisabled = false, name, ...originalProps }: FormikTextareaProps) {
  const [field, meta, helpers] = useField(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <Textarea error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
