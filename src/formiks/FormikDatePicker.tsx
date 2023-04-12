import { useField } from 'formik'
import { useMemo } from 'react'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps, DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../fields/DatePicker'
import type { DateRange } from '../types'

const UntypedDatePicker: any = DatePicker

interface FormikDatePickerProps extends Omit<DatePickerProps, 'defaultValue' | 'error' | 'onChange'> {
  name: string
}
export interface FormikDatePickerWithDateDateProps
  extends Omit<DatePickerWithDateDateProps, 'defaultValue' | 'error' | 'onChange'> {
  name: string
}
export interface FormikDatePickerWithStringDateProps
  extends Omit<DatePickerWithStringDateProps, 'defaultValue' | 'error' | 'onChange'> {
  name: string
}

export function FormikDatePicker(props: FormikDatePickerWithDateDateProps): JSX.Element
export function FormikDatePicker(props: FormikDatePickerWithStringDateProps): JSX.Element
export function FormikDatePicker({ name, ...originalProps }: FormikDatePickerProps) {
  const [field, meta, helpers] = useField<DateRange | undefined>(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <UntypedDatePicker defaultValue={field.value} error={meta.error} onChange={handleChange} {...originalProps} />
}
