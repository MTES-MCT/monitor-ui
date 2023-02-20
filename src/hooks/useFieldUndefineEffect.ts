import { useEffect } from 'react'

import type { Promisable } from 'type-fest'

export function useFieldUndefineEffect(
  // eslint-disable-next-line @typescript-eslint/naming-convention
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
