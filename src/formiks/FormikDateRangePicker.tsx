import { useField } from 'formik'
import { useMemo } from 'react'

import { DateRangePicker } from '../fields/DateRangePicker'

import type {
  DateRangePickerProps,
  DateRangePickerWithDateDateProps,
  DateRangePickerWithStringDateProps
} from '../fields/DateRangePicker'

const UntypedDateRangePicker: any = DateRangePicker

interface FormikDateRangePickerProps extends Omit<DateRangePickerProps, 'onChange'> {
  name: string
}
export interface FormikDateRangePickerWithDateDateProps extends Omit<DateRangePickerWithDateDateProps, 'onChange'> {
  name: string
}
export interface FormikDateRangePickerWithStringDateProps extends Omit<DateRangePickerWithStringDateProps, 'onChange'> {
  name: string
}

export function FormikDateRangePicker(props: FormikDateRangePickerWithDateDateProps): JSX.Element
export function FormikDateRangePicker(props: FormikDateRangePickerWithStringDateProps): JSX.Element
export function FormikDateRangePicker({ name, ...originalProps }: FormikDateRangePickerProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <UntypedDateRangePicker defaultValue={defaultValue} onChange={handleChange} {...originalProps} />
}
