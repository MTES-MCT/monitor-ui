import { useField } from 'formik'
import { useCallback, useEffect } from 'react'

import { MultiRadio } from '../fields/MultiRadio'

import type { MultiRadioProps } from '../fields/MultiRadio'

export type FormikMultiRadioProps = Omit<MultiRadioProps, 'defaultValue' | 'onChange'>
export function FormikMultiRadio({ name, ...originalProps }: FormikMultiRadioProps) {
  const [, , helpers] = useField(name)
  // We don't include `setValues` in `useCallback()` and `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  const { setValue } = helpers

  const handleChange = useCallback((nextValue: string | undefined) => {
    setValue(nextValue)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <MultiRadio name={name} onChange={handleChange} {...originalProps} />
}
