import { noop } from 'lodash/fp'
import { createContext } from 'react'

import type { InputControlContextValue } from './types'

export const InputControlContext = createContext<InputControlContextValue>({
  handleKeyDown: noop() as any,
  registerInput: noop() as any
})
