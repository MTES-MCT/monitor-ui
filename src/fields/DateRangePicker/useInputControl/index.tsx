import { useContext } from 'react'

import { InputControlContext } from './context'
import { InputControlProvider } from './InputControlProvider'

export function useInputControl() {
  return useContext(InputControlContext)
}

export { InputControlProvider }
