import { LinkInput, type LinkInputProps } from '@fields/LinkInput'
import { useField } from 'formik'

export type FormikLinkInputProps = { name: string } & Omit<LinkInputProps, 'error' | 'onChange' | 'value'>
export function FormikLinkInput({ name, ...originalProps }: FormikLinkInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (nextValue: string | undefined) => {
    helpers.setValue(nextValue)
  }

  return <LinkInput {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
