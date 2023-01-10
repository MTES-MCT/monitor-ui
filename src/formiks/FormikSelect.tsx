import { useField } from 'formik'
import { useMemo } from 'react'

import { Select } from '../fields/Select'

import type { SelectProps } from '../fields/Select'

export type FormikSelectProps = Omit<SelectProps, 'defaultValue' | 'onChange'>
export function FormikSelect({ name, ...originalProps }: FormikSelectProps) {
  const [field, meta, helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const defaultValue = useMemo(() => field.value, [])
  const error = useMemo(() => (meta.initialTouched ? meta.error : undefined), [meta.error, meta.initialTouched])

  return <Select defaultValue={defaultValue} error={error} name={name} onChange={helpers.setValue} {...originalProps} />
}
