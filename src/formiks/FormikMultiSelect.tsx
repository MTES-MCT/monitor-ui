import { useField } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'

export type FormikMultiSelectProps = Omit<MultiSelectProps, 'defaultValue' | 'onChange'>
export function FormikMultiSelect({ name, ...originalProps }: FormikMultiSelectProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  const handleChange = useCallback(
    (nextValue: string[] | undefined) => {
      helpers.setValue(nextValue)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => () => helpers.setValue(undefined), [])

  return <MultiSelect defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
