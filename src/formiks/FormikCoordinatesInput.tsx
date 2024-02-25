import { useField } from 'formik'
import { useMemo } from 'react'

import { CoordinatesInput } from '../fields/CoordinatesInput'

import type { CoordinatesInputProps } from '../fields/CoordinatesInput'
import type { Coordinates } from '@types_/definitions'

export type FormikCoordinatesInputProps = Omit<CoordinatesInputProps, 'defaultValue' | 'error' | 'onChange'> & {
  name: string
}
export function FormikCoordinatesInput({ name, ...originalProps }: FormikCoordinatesInputProps) {
  const [field, meta, helpers] = useField<Coordinates | undefined>(name)

  const handleChange = useMemo(
    () => (nextValue: Coordinates | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

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
