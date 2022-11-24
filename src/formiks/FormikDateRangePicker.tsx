import { useField } from 'formik'
import { useEffect } from 'react'

import { DateRangePicker } from '../fields/DateRangePicker'

import type { DateRangePickerProps } from '../fields/DateRangePicker'

export type FormikDateRangePickerProps = Omit<DateRangePickerProps, 'onChange'> & {
  name: string
}
export function FormikDateRangePicker({ name, ...originalProps }: FormikDateRangePickerProps) {
  const [, , helpers] = useField(name)
  const { setValue } = helpers

  // We don't include `setValues` in  `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <DateRangePicker onChange={setValue} {...originalProps} />
}
