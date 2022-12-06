import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { DateRangePicker } from '../fields/DateRangePicker'

import type { DateRangePickerProps } from '../fields/DateRangePicker'

export type FormikDateRangePickerProps = Omit<DateRangePickerProps, 'onChange'> & {
  name: string
}
export function FormikDateRangePicker({ name, ...originalProps }: FormikDateRangePickerProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => helpers.setValue(undefined), [])

  return <DateRangePicker defaultValue={defaultValue} onChange={helpers.setValue} {...originalProps} />
}
