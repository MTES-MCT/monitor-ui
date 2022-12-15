import { useField } from 'formik'
import { useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'onChange'>
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, , helpers] = useField(name)

  // eslint-disable-next-line react-hooks/exhaustive-deps, @typescript-eslint/naming-convention
  const defaultChecked = useMemo(() => Boolean(field.value), [])

  return <Checkbox defaultChecked={defaultChecked} name={name} onChange={helpers.setValue} {...originalProps} />
}
