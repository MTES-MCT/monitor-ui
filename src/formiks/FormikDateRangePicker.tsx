import { useField } from 'formik'
import { useMemo } from 'react'

import { DateRangePicker } from '../fields/DateRangePicker'

import type {
  DateRangePickerProps,
  DateRangePickerWithDateDateProps,
  DateRangePickerWithStringDateProps
} from '../fields/DateRangePicker'

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
  const [field, meta, helpers] = useField(name)

  const error = meta.touched ? meta.error : undefined
  const handleChange = useMemo(
    () => value => {
      helpers.setTouched(true)
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <UntypedDateRangePicker defaultValue={field.value} error={error} onChange={handleChange} {...originalProps} />
}
