import { useField } from 'formik'

import {
  DateRangePicker,
  type DateRangePickerProps,
  type DateRangePickerWithDateDateProps,
  type DateRangePickerWithStringDateProps
} from '../fields/DateRangePicker'

import type { DateAsStringRange, DateRange } from '@types_/definitions'
import type { JSX } from 'react'

const UntypedDateRangePicker: any = DateRangePicker

interface FormikDateRangePickerProps extends Omit<DateRangePickerProps, 'defaultValue' | 'error' | 'onChange'> {
  name: string
}
export interface FormikDateRangePickerWithDateDateProps
  extends Omit<DateRangePickerWithDateDateProps, 'defaultValue' | 'error' | 'onChange'> {
  name: string
}
export interface FormikDateRangePickerWithStringDateProps
  extends Omit<DateRangePickerWithStringDateProps, 'defaultValue' | 'error' | 'onChange'> {
  name: string
}

export function FormikDateRangePicker(props: FormikDateRangePickerWithDateDateProps): JSX.Element
export function FormikDateRangePicker(props: FormikDateRangePickerWithStringDateProps): JSX.Element
export function FormikDateRangePicker({ name, ...originalProps }: FormikDateRangePickerProps) {
  const [field, meta, helpers] = useField<DateRange | DateAsStringRange | undefined>(name)

  const handleChange = (nextValue: DateRange | DateAsStringRange | undefined) => {
    helpers.setValue(nextValue)
  }

  return (
    <UntypedDateRangePicker
      {...originalProps}
      defaultValue={field.value}
      error={meta.error}
      name={name}
      onChange={handleChange}
    />
  )
}
