import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps } from '../fields/DatePicker'

export type FormikDatePickerProps = Omit<DatePickerProps, 'onChange'> & {
  name: string
}
export function FormikDatePicker({ name, ...originalProps }: FormikDatePickerProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => helpers.setValue(undefined), [])

  return <DatePicker defaultValue={defaultValue} onChange={helpers.setValue} {...originalProps} />
}
