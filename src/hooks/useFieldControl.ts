import { isEqual } from 'lodash'
import { useCallback, useEffect, useRef } from 'react'

import { useForceUpdate } from './useForceUpdate'
import { usePrevious } from './usePrevious'

import type { Promisable } from 'type-fest'

export function useFieldControl<T>(
  value: T,
  onChange: ((nextValue: T) => Promisable<void>) | undefined,
  props: {
    [key: string]: any
    disabled: boolean
    isUndefinedWhenDisabled: boolean
  }
): {
  controlledOnChange: (nextValue: T) => Promisable<void>
  controlledValue: T | undefined
} {
  const { disabled, isUndefinedWhenDisabled } = props

  // This tracks the component internal value which allows us to react to value changes after the checkbox toggling
  const internalValueRef = useRef(value)

  // and compare it with an eventual external value change (via the `value` prop)
  const previousValue = usePrevious(value)

  const { forceUpdate } = useForceUpdate()

  const controlledValue: T | undefined = isUndefinedWhenDisabled && disabled ? undefined : internalValueRef.current

  const controlledOnChange = useCallback(
    (nextValue: T) => {
      internalValueRef.current = nextValue

      if (onChange) {
        onChange(nextValue)
      }
    },
    [onChange]
  )

  const setInternalValue = useCallback(
    (nextValue: T) => {
      internalValueRef.current = nextValue

      if (onChange) {
        onChange(nextValue)
      }
    },
    [onChange]
  )

  // We update the `internalValue` each time the `value` prop is updated
  useEffect(() => {
    if (isEqual(value, previousValue)) {
      return
    }

    internalValueRef.current = value

    forceUpdate()
  }, [forceUpdate, previousValue, value])

  return { controlledOnChange, controlledValue }
}
