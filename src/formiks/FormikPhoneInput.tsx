import { PhoneInput, type PhoneInputProps } from '@fields/PhoneInput'
import { useField } from 'formik'

export type FormikPhoneInputProps = { name: string } & Omit<PhoneInputProps, 'error' | 'onChange' | 'value'>
export function FormikPhoneInput({ name, ...originalProps }: FormikPhoneInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (nextValue: string | undefined) => {
    helpers.setValue(nextValue)
  }

  return <PhoneInput {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
