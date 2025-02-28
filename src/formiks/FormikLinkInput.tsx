import { LinkInput, type LinkInputProps } from '@fields/LinkInput'
import { useField } from 'formik'
import { useMemo } from 'react'

export type FormikLinkInputProps = { name: string } & Omit<LinkInputProps, 'error' | 'onChange' | 'value'>
export function FormikLinkInput({ name, ...originalProps }: FormikLinkInputProps) {
  const [field, meta, helpers] = useField(name)

  const handleChange = useMemo(
    () => (nextValue: string | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <LinkInput {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
