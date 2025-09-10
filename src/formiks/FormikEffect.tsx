import { useFormikContext } from 'formik'
import isEqual from 'lodash/isEqual'
import { useEffect } from 'react'

import { usePrevious } from '../hooks/usePrevious'

import type { Promisable } from 'type-fest'

export type FormikEffectProps = {
  onChange: (nextValues: Record<string, any>) => Promisable<void>
  onError?: ((nextErrors: Record<string, any>) => Promisable<void>) | undefined
}
export function FormikEffect({ onChange, onError }: FormikEffectProps) {
  const { errors, values } = useFormikContext<Record<string, any>>()

  const previousErrors = usePrevious(errors)
  const previousValues = usePrevious(values)

  useEffect(() => {
    if (isEqual(previousValues, values)) {
      return
    }

    onChange(values)
  }, [onChange, previousValues, values])

  useEffect(() => {
    if (!onError || isEqual(previousErrors, errors)) {
      return
    }

    onError(errors)
  }, [errors, onError, previousErrors])

  return <></>
}
