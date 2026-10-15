import { isEqual } from 'lodash-es'
import { useCallback, useState } from 'react'

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
  const [internalValue, setInternalValue] = useState(value)
  const [previousValue, setPreviousValue] = useState(value)

  // We override `internalValue` each time the `value` prop is updated (adjusting state during render)
  if (!isEqual(value, previousValue)) {
    setPreviousValue(value)
    setInternalValue(value)
  }

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

  return { controlledOnChange, controlledValue }
}
