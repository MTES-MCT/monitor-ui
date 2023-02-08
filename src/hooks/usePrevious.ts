import { useEffect, useRef } from 'react'

export function usePrevious<T = any>(value: T): T | undefined {
  const ref = useRef<T | undefined>()

  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  return ref.current
}
