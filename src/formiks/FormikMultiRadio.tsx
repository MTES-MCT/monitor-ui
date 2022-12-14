import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiRadio } from '../fields/MultiRadio'

import type { MultiRadioProps } from '../fields/MultiRadio'

export type FormikMultiRadioProps = Omit<MultiRadioProps, 'defaultValue' | 'onChange'>
export function FormikMultiRadio({ name, ...originalProps }: FormikMultiRadioProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])

  return <MultiRadio defaultValue={defaultValue} name={name} onChange={helpers.setValue} {...originalProps} />
}
