import { useField } from 'formik'
import { useMemo } from 'react'

import { DateRangePicker } from '../fields/DateRangePicker'

import type { DateRangePickerProps } from '../fields/DateRangePicker'

export type FormikDateRangePickerProps = Omit<DateRangePickerProps, 'onChange'> & {
  name: string
}
export function FormikDateRangePicker({ name, ...originalProps }: FormikDateRangePickerProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  return <DateRangePicker defaultValue={defaultValue} onChange={helpers.setValue} {...originalProps} />
}
