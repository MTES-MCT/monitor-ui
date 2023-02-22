import { useMemo, useState } from 'react'

import { usePrevious } from './usePrevious'

/**
 * Get and set current field value
 *
 * @description
 * To avoid any `useEffect()` while keeping our fields values uncontrolled,
 * we need to actively pick which source is the current "truth" between the `defaultValue` prop and the internal value.
 *
 * @param defaultValue    The field `defaultValue` property, set when calling the component
 * @param isFieldDisabled The field `disable` property, set when calling the component
 */
export function useFieldValue<T>(
  defaultValue: T | undefined,
  isFieldDisabled: boolean = false
): {
  controlledDefaultValue: T | undefined
  setValue: (nextValue: T | undefined) => void
  value: T | undefined
} {
  // If the field is disabled, the default value should be undefined
  const controlledDefaultValue = useMemo(
    () => (!isFieldDisabled ? defaultValue : undefined),
    [defaultValue, isFieldDisabled]
  )
  const lastControlledDefaultValue = usePrevious(controlledDefaultValue)

  // When the `controlledDefaultValue` is picked over `stateValue`, this `stateValue` becomes temporarely wrong
  // but it doesn't matter since the next `setStateValue()`
  // will be called using the right value (that is `controlledDefaultValue`)
  const [stateValue, setValue] = useState(controlledDefaultValue)

  // If the `controlledDefaultValue` has changed since the last cycle,
  // then `controlledDefaultValue` takes precedence over the internal `stateValue` as the truthful field value
  const value = useMemo(
    () => (controlledDefaultValue !== lastControlledDefaultValue ? controlledDefaultValue : stateValue),
    [controlledDefaultValue, lastControlledDefaultValue, stateValue]
  )

  return { controlledDefaultValue, setValue, value }
}
