import { useField } from 'formik'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps, DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../fields/DatePicker'
import type { JSX } from 'react'

const UntypedDatePicker: any = DatePicker

type FormikDatePickerProps = Omit<DatePickerProps, 'defaultValue' | 'error' | 'onChange'>
export type FormikDatePickerWithDateDateProps = Omit<DatePickerWithDateDateProps, 'defaultValue' | 'error' | 'onChange'>
export type FormikDatePickerWithStringDateProps = Omit<
  DatePickerWithStringDateProps,
  'defaultValue' | 'error' | 'onChange'
>

export function FormikDatePicker(props: FormikDatePickerWithDateDateProps): JSX.Element
export function FormikDatePicker(props: FormikDatePickerWithStringDateProps): JSX.Element
export function FormikDatePicker({ name, ...originalProps }: FormikDatePickerProps) {
  const [field, meta, helpers] = useField<Date | string | undefined>(name)

  const handleChange = (nextValue: Date | string | undefined) => {
    helpers.setValue(nextValue)
  }

  return (
    <UntypedDatePicker
      {...originalProps}
      defaultValue={field.value}
      error={meta.error}
      name={name}
      onChange={handleChange}
    />
  )
}
