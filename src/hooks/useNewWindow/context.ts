import { createContext } from 'react'

import type { NewWindowContextValue } from './types'

export const NewWindowContext = createContext<NewWindowContextValue>({
  newWindowContainerRef: {
    // It seems monitor-ui bundle can eager-evaluate `NewWindowContext`
    // in contexts which don't have `window` global defined.
    // This any-forced `undefined` should never impact the real webapp initialization.
    current: typeof window !== 'undefined' ? window.document.createElement('div') : (undefined as any)
  }
})
