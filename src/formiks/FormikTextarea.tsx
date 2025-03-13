import { useField } from 'formik'

import { Textarea } from '../fields/Textarea'

import type { TextareaProps } from '../fields/Textarea'

export type FormikTextareaProps = Omit<TextareaProps, 'error' | 'onChange' | 'value'>
export function FormikTextarea({ name, ...originalProps }: FormikTextareaProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (nextValue: string | undefined) => {
    helpers.setValue(nextValue)
  }

  return <Textarea {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
