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

  const handleChange = useMemo(
    () => value => {
      helpers.setValue(value)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Search error={meta.error} name={name} onChange={handleChange} value={field.value} {...originalProps} />
}
