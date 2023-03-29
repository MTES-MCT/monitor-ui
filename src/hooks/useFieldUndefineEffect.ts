import { useEffect } from 'react'

import type { Promisable } from 'type-fest'

export function useFieldUndefineEffect(
  disabled: boolean | undefined,
  onChange: ((nextValue: any, ...args: any[]) => Promisable<void>) | undefined,
  onDisable?: () => Promisable<void>
) {
  useEffect(() => {
    if (!disabled) {
      return
    }

    if (onDisable) {
      onDisable()
    }

    if (onChange) {
      onChange(undefined)
    }
  }, [disabled, onChange, onDisable])
}
