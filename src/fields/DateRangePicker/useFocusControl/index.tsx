import { useContext } from 'react'

import { FocusControlContext } from './context'
import { FocusControlProvider } from './FocusControlProvider'

export function useFocusControl() {
  return useContext(FocusControlContext)
}

export { FocusControlProvider }
