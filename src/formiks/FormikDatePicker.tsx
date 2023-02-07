import { useField } from 'formik'
import { useMemo } from 'react'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps, DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../fields/DatePicker'

const UntypedDatePicker: any = DatePicker

interface FormikDatePickerProps extends Omit<DatePickerProps, 'onChange'> {
  name: string
}
export interface FormikDatePickerWithDateDateProps extends Omit<DatePickerWithDateDateProps, 'onChange'> {
  name: string
}
export interface FormikDatePickerWithStringDateProps extends Omit<DatePickerWithStringDateProps, 'onChange'> {
  name: string
}

export function FormikDatePicker(props: FormikDatePickerWithDateDateProps): JSX.Element
export function FormikDatePicker(props: FormikDatePickerWithStringDateProps): JSX.Element
export function FormikDatePicker({ name, ...originalProps }: FormikDatePickerProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <UntypedDatePicker defaultValue={defaultValue} onChange={handleChange} {...originalProps} />
}
