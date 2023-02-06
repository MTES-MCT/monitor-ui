import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { AutoComplete } from '../fields/AutoComplete'

import type { AutoCompleteProps } from '../fields/AutoComplete'

export type FormikAutoCompleteProps = Omit<AutoCompleteProps, 'defaultValue' | 'onChange'>
export function FormikAutoComplete({ name, ...originalProps }: FormikAutoCompleteProps) {
  const [field, , helpers] = useField<string | undefined>(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps, @typescript-eslint/naming-convention
  const defaultValue = useMemo(() => field.value, [])

  useEffect(
    () => () => {
      helpers.setValue(undefined)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  if (!defaultValue) {
    return <AutoComplete name={name} onChange={helpers.setValue} {...originalProps} />
  }

  return <AutoComplete defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
