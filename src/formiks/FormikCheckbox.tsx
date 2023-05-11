import { useField, useFormikContext } from 'formik'
import { omit } from 'lodash'
import { useEffect, useMemo } from 'react'

import { Checkbox } from '../fields/Checkbox'
import { usePrevious } from '../hooks/usePrevious'

import type { CheckboxProps } from '../fields/Checkbox'

export type FormikCheckboxProps = Omit<CheckboxProps, 'checked' | 'error' | 'onChange'>
export function FormikCheckbox({ name, ...originalProps }: FormikCheckboxProps) {
  const [field, meta, helpers] = useField<boolean | undefined>(name)
  const { setFieldValue, setValues, values } = useFormikContext<any>()

  const previousName = usePrevious(name)

  // We don't want to trigger infinite re-rendering since `helpers.setValue` changes after each rendering
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = useMemo(() => helpers.setValue, [name])

  const isChecked = Boolean(field.value)

  // A checkbox must initialize its Formik value on mount (or `name` prop change):
  // it wouldn't make sense to keep it as `undefined` since `undefined` means `false` in the case of a checkbox
  useEffect(
    () => {
      if (previousName && name !== previousName) {
        return
      }

      setFieldValue(name, isChecked)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name]
  )

  useEffect(
    () => {
      if (!previousName || name === previousName) {
        return
      }

      const newValues = {
        ...omit(values, [previousName]),
        [name]: values[previousName]
      }

      setValues(newValues)
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [name, values]
  )

  return <Checkbox checked={isChecked} error={meta.error} name={name} onChange={handleChange} {...originalProps} />
}
