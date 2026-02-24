import { useCallback, useEffect } from 'react'

export function usePressEscapeEffect(callback: () => void, baseContainer?: Document | HTMLDivElement | null): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        callback()
      }
    },
    [callback]
  )

  useEffect(() => {
    const globalContainer = (baseContainer ?? window.document) as Document

    // Use capture phase so the event is caught before any stopPropagation in bubbling phase
    globalContainer.addEventListener('keydown', handleKeyDown, true)

    return () => {
      globalContainer.removeEventListener('keydown', handleKeyDown, true)
    }
  }, [baseContainer, handleKeyDown])
}
