import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { MultiCheckbox } from '../fields/MultiCheckbox'

import type { MultiCheckboxProps } from '../fields/MultiCheckbox'

export type FormikMultiCheckboxProps = Omit<MultiCheckboxProps, 'defaultValue' | 'onChange'>
export function FormikMultiCheckbox({ name, ...originalProps }: FormikMultiCheckboxProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  useEffect(
    () => () => {
      helpers.setValue(undefined)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <MultiCheckbox defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
