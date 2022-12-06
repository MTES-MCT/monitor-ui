import { useField } from 'formik'
import { useCallback, useEffect, useMemo } from 'react'

import { MultiRadio } from '../fields/MultiRadio'

import type { MultiRadioProps } from '../fields/MultiRadio'

export type FormikMultiRadioProps = Omit<MultiRadioProps, 'defaultValue' | 'onChange'>
export function FormikMultiRadio({ name, ...originalProps }: FormikMultiRadioProps) {
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

  return <MultiRadio defaultValue={defaultValue} name={name} onChange={handleChange} {...originalProps} />
}
