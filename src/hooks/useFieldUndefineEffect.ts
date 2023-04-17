import { useEffect } from 'react'

import { usePrevious } from './usePrevious'

import type { Promisable } from 'type-fest'

export function useFieldUndefineEffect(
  disabled: boolean | undefined,
  onChange: ((nextValue: any, ...args: any[]) => Promisable<void>) | undefined,
  onDisable?: () => Promisable<void>
) {
  const wasDisabled = usePrevious(disabled)

  useEffect(() => {
    if (!disabled || disabled === wasDisabled) {
      return
    }

    if (onDisable) {
      onDisable()
    }

    if (onChange) {
      onChange(undefined)
    }
  }, [disabled, onChange, onDisable, wasDisabled])
}
