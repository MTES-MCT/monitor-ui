import { useEffect } from 'react'

import type { Promisable } from 'type-fest'

export function useFieldUndefineEffect(
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled: boolean | undefined,
  onChange: ((nextValue: any) => Promisable<void>) | undefined
) {
  useEffect(() => {
    if (disabled && onChange) {
      onChange(undefined)
    }

    return () => {
      if (onChange) {
        onChange(undefined)
      }
    }
  }, [disabled, onChange])
}
