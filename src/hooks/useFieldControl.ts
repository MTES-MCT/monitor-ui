import { isEqual } from 'lodash'
import { useCallback, useEffect, useState } from 'react'

import { usePrevious } from './usePrevious'

import type { Promisable } from 'type-fest'
import type { Defined } from 'yup'

type UseFieldControlReturn<T> = {
  controlledOnChange: (nextValue: T) => Promisable<void>
  controlledValue: T | undefined
}

export function useFieldControl<T>(
  value: T,
  onChange: ((nextValue: T) => Promisable<void>) | undefined
): UseFieldControlReturn<T>
export function useFieldControl<T>(
  value: T,
  onChange: ((nextValue: T) => Promisable<void>) | undefined,
  defaultValueWhenUndefined: Defined<T>
): UseFieldControlReturn<T>
export function useFieldControl<T>(
  value: T,
  onChange: ((nextValue: T) => Promisable<void>) | undefined,
  defaultValueWhenUndefined?: T
): UseFieldControlReturn<T> {
  const previousValue = usePrevious(value)

  const [internalValue, setInternalValue] = useState(value)

  const controlledValue =
    internalValue === undefined && defaultValueWhenUndefined !== undefined ? defaultValueWhenUndefined : internalValue

  // We keep track of the field value changes via `internalValue`
  const controlledOnChange = useCallback(
    (nextValue: T) => {
      setInternalValue(nextValue)

      if (onChange) {
        onChange(nextValue)
      }
    },
    [onChange]
  )

  // And we override `internalValue` each time the `value` prop is updated
  useEffect(() => {
    if (isEqual(value, previousValue)) {
      return
    }

    setInternalValue(value)
  }, [previousValue, value])

  return { controlledOnChange, controlledValue }
}
