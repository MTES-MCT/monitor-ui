import { noop } from 'lodash/fp'
import { createContext } from 'react'

import type { FocusControlContextValue } from './types'

export const FocusControlContext = createContext<FocusControlContextValue>({
  handleKeyUp: noop() as any,
  registerInput: noop() as any
})
