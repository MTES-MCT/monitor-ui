import { useField } from 'formik'
import { useMemo } from 'react'

import { DatePicker } from '../fields/DatePicker'

import type { DatePickerProps, DatePickerWithDateDateProps, DatePickerWithStringDateProps } from '../fields/DatePicker'

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

  const handleChange = useMemo(
    () => (nextValue: Date | string | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

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
