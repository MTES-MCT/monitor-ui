import { describe, expect, it } from '@jest/globals'
import { renderHook } from '@testing-library/react'

import { usePressEscapeEffect } from '../usePressEscapeEffect'

describe('hooks/usePressEscapeEffect()', () => {
  const mockCallback = jest.fn()

  it('calls callback when Escape key is pressed', () => {
    renderHook(() => usePressEscapeEffect(mockCallback))

    const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(escapeEvent)

    expect(mockCallback).toHaveBeenCalledTimes(1)
  })

  it('does not call callback when another key is pressed', () => {
    renderHook(() => usePressEscapeEffect(mockCallback))

    const otherKeyEvent = new KeyboardEvent('keydown', { key: 'Enter' })
    document.dispatchEvent(otherKeyEvent)

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
