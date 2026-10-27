import { describe, expect, it } from '@jest/globals'
import { renderHook } from '@testing-library/react'

import { useKey } from '../useKey'

describe('useKey', () => {
  it('should return the same key when dependencies are deeply equal', () => {
    const { rerender, result } = renderHook(({ deps }) => useKey(deps), {
      initialProps: { deps: [{ id: 1 }] }
    })
    const initialKey = result.current

    rerender({ deps: [{ id: 1 }] })

    expect(result.current).toBe(initialKey)
  })

  it('should return a new key when dependencies change', () => {
    const { rerender, result } = renderHook(({ deps }) => useKey(deps), {
      initialProps: { deps: ['first'] }
    })
    const initialKey = result.current

    rerender({ deps: ['second'] })

    expect(result.current).not.toBe(initialKey)
  })

  it('should return a string key on the initial render', () => {
    const { result } = renderHook(() => useKey([]))

    expect(typeof result.current).toBe('string')
    expect(result.current.length).toBeGreaterThan(0)
  })
})
