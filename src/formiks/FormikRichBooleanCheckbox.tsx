import { RichBooleanCheckbox } from '@fields/RichBooleanCheckbox'
import { useField } from 'formik'

import type { RichBoolean } from '@constants'
import type { RichBooleanCheckboxProps } from '@fields/RichBooleanCheckbox'

export type FormikRichBooleanCheckboxProps = Omit<
  RichBooleanCheckboxProps,
  'defaultValue' | 'error' | 'onChange' | 'value'
>
export function FormikRichBooleanCheckbox({ name, ...originalProps }: FormikRichBooleanCheckboxProps) {
  const [field, meta, helpers] = useField<RichBoolean | undefined>(name)

  const handleChange = (nextValue: RichBoolean | undefined) => {
    helpers.setValue(nextValue)
  }

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
