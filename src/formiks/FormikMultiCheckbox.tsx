import { useField } from 'formik'
import { useCallback, useEffect } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'

export type FormikMultiCheckboxProps = Omit<MultiCheckboxProps, 'defaultValue' | 'onChange'>
export function FormikMultiCheckbox({ name, ...originalProps }: FormikMultiCheckboxProps) {
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

  return <MultiCheckbox name={name} onChange={handleChange} {...originalProps} />
}
