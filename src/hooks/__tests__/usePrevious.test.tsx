import { describe, expect, it } from '@jest/globals'
import { renderHook } from '@testing-library/react'

import { usePrevious } from '../usePrevious'

describe('usePrevious', () => {
  it('should return undefined on initial render', () => {
    const { result } = renderHook(() => usePrevious('initial'))

    expect(result.current).toBeUndefined()
  })

  it('should return the previous value after rerender', () => {
    const { rerender, result } = renderHook(({ value }) => usePrevious(value), { initialProps: { value: 'first' } })

    expect(result.current).toBeUndefined()

    rerender({ value: 'second' })
    expect(result.current).toBe('first')

    rerender({ value: 'third' })
    expect(result.current).toBe('second')
  })

  it('should handle object references correctly', () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }

    const { rerender, result } = renderHook(({ value }) => usePrevious(value), { initialProps: { value: obj1 } })

    expect(result.current).toBeUndefined()

    rerender({ value: obj2 })
    expect(result.current).toBe(obj1)
    expect(result.current).not.toBe(obj2)
  })

  it('should not update when the same value is passed', () => {
    const { rerender, result } = renderHook(({ value }) => usePrevious(value), { initialProps: { value: 'same' } })

    expect(result.current).toBeUndefined()

    rerender({ value: 'same' })
    expect(result.current).toBe('same')

    rerender({ value: 'same' })
    expect(result.current).toBe('same')
  })
})
