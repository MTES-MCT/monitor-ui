import { isEqual } from 'lodash-es'
import { useState } from 'react'

import { getPseudoRandomString } from '../utils/getPseudoRandomString'

import type { DependencyList } from 'react'

export function useKey(deps: DependencyList) {
  const [state, setState] = useState<{ deps: DependencyList; key: string }>(() => ({
    deps,
    key: getPseudoRandomString()
  }))

  if (isEqual(deps, state.deps)) {
    return state.key
  }

  const newKey = getPseudoRandomString()
  setState({ deps, key: newKey })

  return newKey
}
