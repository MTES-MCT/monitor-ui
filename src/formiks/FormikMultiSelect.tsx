import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { MultiSelect } from '../fields/MultiSelect'

import type { MultiSelectProps } from '../fields/MultiSelect'

export type FormikMultiSelectProps = Omit<MultiSelectProps, 'defaultValue' | 'onChange'>
export function FormikMultiSelect({ name, ...originalProps }: FormikMultiSelectProps) {
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

  return <MultiSelect defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
