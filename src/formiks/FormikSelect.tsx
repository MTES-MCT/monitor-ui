import { useField } from 'formik'
import { useCallback, useEffect } from 'react'

import { Select } from '../fields/Select'

import type { SelectProps } from '../fields/Select'

export type FormikSelectProps = Omit<SelectProps, 'defaultValue' | 'onChange'> & {
  name: string
}
export function FormikSelect({ name, ...originalProps }: FormikSelectProps) {
  const [, , helpers] = useField(name)
  // We don't include `setValues` in `useCallback()` and `useEffect()` dependencies
  // both because it is useless and it will trigger infinite hook calls
  const { setValue } = helpers

  const handleChange = useCallback((valueOrValues: string | string[] | undefined) => {
    setValue(valueOrValues)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => setValue(undefined), [])

  return <Select name={name} onChange={handleChange} {...originalProps} />
}
