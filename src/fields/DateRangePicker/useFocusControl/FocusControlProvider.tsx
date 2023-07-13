import { set } from 'lodash/fp'
import { useRef, useCallback, type RefObject, type KeyboardEvent, type ReactNode, useMemo } from 'react'

import { FocusControlContext } from './context'

import type { NumberInputIndex } from './types'

export type FocusControlProviderProps = {
  children: ReactNode
}
export function FocusControlProvider({ children }: FocusControlProviderProps) {
  const inputsRef = useRef<Array<RefObject<HTMLInputElement>>>([])

  const focusInput = useCallback((currentFocusedInputRef: RefObject<HTMLInputElement>, direction: -1 | 1) => {
    const currentFocusedInputIndex = inputsRef.current.findIndex(inputRef => inputRef === currentFocusedInputRef)
    const nextFocusedInputIndex = currentFocusedInputIndex + direction
    if (nextFocusedInputIndex < 0 || nextFocusedInputIndex >= inputsRef.current.length) {
      return
    }

    const nextFocusedInputRef = inputsRef.current[nextFocusedInputIndex]
    if (!nextFocusedInputRef || !nextFocusedInputRef.current) {
      return
    }

    nextFocusedInputRef.current.focus()
  }, [])

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>, inputRef: RefObject<HTMLInputElement>, filledLength: number) => {
      if (
        (event.key === 'ArrowRight' && event.currentTarget.selectionStart === event.currentTarget.value.length) ||
        (event.currentTarget.value.length === filledLength &&
          // We don't want to focus the next input when the user is trying to delete or move within the input
          !['ArrowLeft', 'ArrowRight', 'Backspace', 'Delete', 'Tab'].includes(event.key))
      ) {
        focusInput(inputRef, 1)
      } else if (
        (event.key === 'ArrowLeft' &&
          // The caret must be at the beginning of the input
          event.currentTarget.selectionStart === 0) ||
        (event.key === 'Backspace' && event.currentTarget.value === '')
      ) {
        focusInput(inputRef, -1)
      }
    },
    [focusInput]
  )

  const registerInput = useCallback((inputRef: RefObject<HTMLInputElement>, index: NumberInputIndex) => {
    inputsRef.current = set(index, inputRef, inputsRef.current)
  }, [])

  const value = useMemo(() => ({ handleKeyUp, registerInput }), [handleKeyUp, registerInput])

  return <FocusControlContext.Provider value={value}>{children}</FocusControlContext.Provider>
}
