import { useField } from 'formik'
import { useEffect } from 'react'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps } from '../fields/DatePicker'

export type FormikDatePickerProps = Omit<DatePickerProps, 'onChange'> & {
  name: string
}
export function FormikDatePicker({ name, ...originalProps }: FormikDatePickerProps) {
  const [, , helpers] = useField(name)
  const { setValue } = helpers

  // We don't include `setValues` in `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <DatePicker onChange={setValue} {...originalProps} />
}
