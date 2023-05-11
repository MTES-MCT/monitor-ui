import { useField } from 'formik'
import { useMemo } from 'react'

import { Search } from '../fields/Search'

import type { SearchProps } from '../fields/Search'
import type { OptionValueType } from '../types'

export type FormikSearchProps<OptionValue extends OptionValueType = string> = Omit<
  SearchProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
>
export function FormikSearch<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikSearchProps<OptionValue>) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [name])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  if (!defaultValue) {
    return <Search name={name} onChange={helpers.setValue} {...originalProps} />
  }

  return (
    <Search defaultValue={defaultValue} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
  )
}
