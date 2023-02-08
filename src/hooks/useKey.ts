import { equals } from 'ramda'
import { useRef } from 'react'

import { getPseudoRandomString } from '../utils/getPseudoRandomString'
import { usePrevious } from './usePrevious'

import type { DependencyList } from 'react'

export function useKey(deps: DependencyList) {
  const keyRef = useRef<string>(getPseudoRandomString())

  const prevDeps = usePrevious(deps)

  if (!prevDeps || equals(deps, prevDeps)) {
    return keyRef.current
  }

  keyRef.current = getPseudoRandomString()

  return keyRef.current
}
