import { useField } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'

import { Select } from '../fields/Select'

import type { SelectProps } from '../fields/Select'

export type FormikSelectProps = Omit<SelectProps, 'defaultValue' | 'onChange'>
export function FormikSelect({ name, ...originalProps }: FormikSelectProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  const handleChange = useCallback(
    (nextValue: string | undefined) => {
      helpers.setValue(nextValue)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => helpers.setValue(undefined), [])

  return <Select defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
