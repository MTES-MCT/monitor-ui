import { useField } from 'formik'
import { useMemo } from 'react'

import { MultiRadio } from '../fields/MultiRadio'

import type { MultiRadioProps } from '../fields/MultiRadio'

export type FormikMultiRadioProps = Omit<MultiRadioProps, 'defaultValue' | 'error' | 'onChange'>
export function FormikMultiRadio({ name, ...originalProps }: FormikMultiRadioProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = useMemo(() => (meta.initialTouched ? meta.error : undefined), [meta.error, meta.initialTouched])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [])

  return <MultiRadio defaultValue={defaultValue} error={error} name={name} onChange={handleChange} {...originalProps} />
}
