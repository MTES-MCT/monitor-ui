import { useField } from 'formik'
import { useMemo } from 'react'

import { Search } from '../fields/Search'

import type { SearchProps } from '../fields/Search'

export type FormikSearchProps = Omit<SearchProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikSearch({ name, ...originalProps }: FormikSearchProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  if (!defaultValue) {
    return <Search name={name} onChange={helpers.setValue} {...originalProps} />
  }

  return (
    <Search defaultValue={defaultValue} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
  )
}
