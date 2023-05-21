import { useField } from 'formik'
import { useMemo } from 'react'

import { CoordinatesInput } from '../fields/CoordinatesInput'

import type { CoordinatesInputProps } from '../fields/CoordinatesInput'

export type FormikCoordinatesInputProps = Omit<CoordinatesInputProps, 'defaultValue' | 'error' | 'onChange'> & {
  name: string
}
export function FormikCoordinatesInput({ name, ...originalProps }: FormikCoordinatesInputProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = meta.touched ? meta.error : undefined
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => (nextCoordinates: number[] | undefined) => helpers.setValue(nextCoordinates), [])

  return <CoordinatesInput defaultValue={defaultValue} error={error} onChange={handleChange} {...originalProps} />
}
