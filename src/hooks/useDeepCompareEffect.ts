import { isEqual } from 'lodash-es'
import { useEffect, type DependencyList, type EffectCallback } from 'react'

import { usePrevious } from './usePrevious'

export function useDeepCompareEffect(effect: EffectCallback, deps: DependencyList): void {
  const previousValue = usePrevious(deps)

  const isDifferent = !isEqual(previousValue, deps)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, [isDifferent])
}
