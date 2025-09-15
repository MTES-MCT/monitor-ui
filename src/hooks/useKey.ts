import { isEqual } from 'lodash-es'
import { useRef } from 'react'

import { usePrevious } from './usePrevious'
import { getPseudoRandomString } from '../utils/getPseudoRandomString'

import type { DependencyList } from 'react'

export function useKey(deps: DependencyList) {
  const keyRef = useRef<string>(getPseudoRandomString())

  const prevDeps = usePrevious(deps)

  if (isEqual(deps, prevDeps)) {
    return keyRef.current
  }

  keyRef.current = getPseudoRandomString()

  return keyRef.current
}
