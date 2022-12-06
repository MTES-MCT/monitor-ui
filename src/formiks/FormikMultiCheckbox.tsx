import { useField } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'

export type FormikMultiCheckboxProps = Omit<MultiCheckboxProps, 'defaultValue' | 'onChange'>
export function FormikMultiCheckbox({ name, ...originalProps }: FormikMultiCheckboxProps) {
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

  return <MultiCheckbox defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
