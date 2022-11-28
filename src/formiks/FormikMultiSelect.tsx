import { useField } from 'formik'
import { useCallback, useEffect } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'

export type FormikMultiSelectProps = Omit<MultiSelectProps, 'defaultValue' | 'onChange'> & {
  name: string
}
export function FormikMultiSelect({ name, ...originalProps }: FormikMultiSelectProps) {
  const [, , helpers] = useField(name)
  // We don't include `setValues` in `useCallback()` and `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  const { setValue } = helpers

  const handleChange = useCallback((nextValue: string[] | undefined) => {
    setValue(nextValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <MultiSelect name={name} onChange={handleChange} {...originalProps} />
}
