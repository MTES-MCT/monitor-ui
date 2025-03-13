import { useField } from 'formik'

import { Search } from '../fields/Search'

import type { SearchProps } from '../fields/Search'
import type { OptionValueType } from '../types/definitions'

export type FormikSearchProps<OptionValue extends OptionValueType = string> = Omit<
  SearchProps<OptionValue>,
  'defaultValue' | 'error' | 'onChange'
>
export function FormikSearch<OptionValue extends OptionValueType = string>({
  name,
  ...originalProps
}: FormikSearchProps<OptionValue>) {
  const [field, meta, helpers] = useField(name)

  const handleChange = (nextValue: OptionValue | undefined) => {
    helpers.setValue(nextValue)
  }

  return <Search {...originalProps} error={meta.error} name={name} onChange={handleChange} value={field.value} />
}
