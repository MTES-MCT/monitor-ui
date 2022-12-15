import { useField } from 'formik'
import { useMemo } from 'react'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps } from '../fields/DatePicker'

export type FormikDatePickerProps = Omit<DatePickerProps, 'onChange'> & {
  name: string
}
export function FormikDatePicker({ name, ...originalProps }: FormikDatePickerProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  return <DatePicker defaultValue={defaultValue} onChange={helpers.setValue} {...originalProps} />
}
