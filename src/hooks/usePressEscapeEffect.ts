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

    globalContainer.addEventListener('keydown', handleKeyDown)

    return () => {
      globalContainer.removeEventListener('keydown', handleKeyDown)
    }
  }, [baseContainer, handleKeyDown])
}
