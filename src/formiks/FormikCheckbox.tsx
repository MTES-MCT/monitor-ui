import { useField } from 'formik'
import { useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'error' | 'onChange'> & {
  isUndefinedWhenDisabled?: boolean | undefined
}

export function FormikCheckbox({ isUndefinedWhenDisabled = false, name, ...originalProps }: FormikCheckboxProps) {
  const [field, meta, helpers] = useField<boolean | undefined>(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  const isChecked = Boolean(field.value)

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, handleChange)

  return <Checkbox checked={isChecked} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
}
