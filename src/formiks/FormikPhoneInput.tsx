import { PhoneInput, type PhoneInputProps } from '@fields/PhoneInput'
import { useField } from 'formik'
import { useMemo } from 'react'

export type FormikPhoneInputProps = { name: string } & Omit<PhoneInputProps, 'error' | 'onChange' | 'value'>
export function FormikPhoneInput({ name, ...originalProps }: FormikPhoneInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = useMemo(
    () => (nextValue: string | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <PhoneInput {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
