import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { MultiRadio } from '../fields/MultiRadio'

import type { MultiRadioProps } from '../fields/MultiRadio'

export type FormikMultiRadioProps = Omit<MultiRadioProps, 'defaultValue' | 'onChange'>
export function FormikMultiRadio({ name, ...originalProps }: FormikMultiRadioProps) {
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

  return <MultiRadio defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
