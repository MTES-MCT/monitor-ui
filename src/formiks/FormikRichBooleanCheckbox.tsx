import { useField } from 'formik'
import { useMemo } from 'react'

import { RichBooleanCheckbox } from '../fields/RichBooleanCheckbox'

import type { RichBoolean } from '../constants'
import type { RichBooleanCheckboxProps } from '../fields/RichBooleanCheckbox'

export type FormikRichBooleanCheckboxProps = Omit<
  RichBooleanCheckboxProps,
  'defaultValue' | 'error' | 'onChange' | 'value'
>
export function FormikRichBooleanCheckbox({ name, ...originalProps }: FormikRichBooleanCheckboxProps) {
  const [field, meta, helpers] = useField<RichBoolean | undefined>(name)

  const handleChange = useMemo(
    () => (nextValue: RichBoolean | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <RichBooleanCheckbox
      error={meta.error}
      name={name}
      onChange={handleChange}
      value={field.value}
      {...originalProps}
    />
  )
}
