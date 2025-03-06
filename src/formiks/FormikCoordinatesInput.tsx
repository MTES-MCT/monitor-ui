import { useField } from 'formik'

import { CoordinatesInput } from '../fields/CoordinatesInput'

import type { CoordinatesInputProps } from '../fields/CoordinatesInput'
import type { Coordinates } from '@types_/definitions'

export type FormikCoordinatesInputProps = Omit<CoordinatesInputProps, 'error' | 'onChange'>

export function FormikCoordinatesInput({ name, ...originalProps }: FormikCoordinatesInputProps) {
  const [field, meta, helpers] = useField<Coordinates | undefined>(name)

  const handleChange = (nextValue: Coordinates | undefined) => {
    helpers.setValue(nextValue)
  }

  return (
    <CoordinatesInput
      {...originalProps}
      defaultValue={field.value}
      error={meta.error}
      name={name}
      onChange={handleChange}
    />
  )
}
