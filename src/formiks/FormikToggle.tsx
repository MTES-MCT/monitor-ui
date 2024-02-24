import { useField } from 'formik'
import { useEffect, useMemo } from 'react'

import { Toggle } from '../fields/Toggle'

import type { ToggleProps } from '../fields/Toggle'

export type FormikToggleProps = Omit<ToggleProps, 'error' | 'onChange' | 'value'>
export function FormikToggle({ name, ...originalProps }: FormikToggleProps) {
  const [field, meta, helpers] = useField<boolean | undefined>(name)

  const isChecked = Boolean(field.value)

  const handleChange = useMemo(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    () => (nextValue: boolean | undefined) => {
      helpers.setValue(nextValue)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  // A toggle must initialize its Formik value on mount:
  // it wouldn't make sense to keep it as `undefined` since `undefined` means `false` in the case of a toggle
  useEffect(
    () => {
      helpers.setValue(isChecked)
    },

    // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return <Toggle checked={isChecked} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
}
