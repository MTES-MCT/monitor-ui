import { useContext } from 'react'

import { NewWindowContext } from './context'

import type { NewWindowContextValue } from './types'

export { NewWindowContext }

export function useNewWindow(): NewWindowContextValue {
  const contextValue = useContext(NewWindowContext)

  return contextValue
}

export type { NewWindowContextValue }
