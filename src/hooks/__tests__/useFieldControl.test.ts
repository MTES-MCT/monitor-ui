import { describe, expect, it, jest } from '@jest/globals'
import { act, renderHook } from '@testing-library/react'

import { useFieldControl } from '../useFieldControl'

describe('useFieldControl', () => {
  it('should initialize and update the controlled value when changed', () => {
    const onChange = jest.fn<(nextValue: string) => void>()
    const { result } = renderHook(() => useFieldControl<string>('initial', onChange))

    expect(result.current.controlledValue).toBe('initial')

    act(() => {
      result.current.controlledOnChange('updated')
    })

    expect(result.current.controlledValue).toBe('updated')
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(onChange).toHaveBeenCalledWith('updated')
  })

  it('should update the controlled value when the external value changes', () => {
    const { rerender, result } = renderHook(({ value }) => useFieldControl(value, undefined), {
      initialProps: { value: 'initial' }
    })

    act(() => {
      result.current.controlledOnChange('local')
    })
    expect(result.current.controlledValue).toBe('local')

    rerender({ value: 'external' })

    expect(result.current.controlledValue).toBe('external')
  })

  it('should keep the internally changed value when the external value is unchanged', () => {
    const { rerender, result } = renderHook(({ value }) => useFieldControl(value, undefined), {
      initialProps: { value: 'initial' }
    })

    act(() => {
      result.current.controlledOnChange('local')
    })
    rerender({ value: 'initial' })

    expect(result.current.controlledValue).toBe('local')
  })

  it('should use the default value when the external value is undefined', () => {
    const { rerender, result } = renderHook(({ value }) => useFieldControl(value, undefined, 'default'), {
      initialProps: { value: undefined as string | undefined }
    })

    expect(result.current.controlledValue).toBe('default')

    rerender({ value: 'provided' })

    expect(result.current.controlledValue).toBe('provided')
  })

  it('should update the controlled value when no onChange callback is provided', () => {
    const { result } = renderHook(() => useFieldControl('initial', undefined))

    act(() => {
      result.current.controlledOnChange('updated')
    })

    expect(result.current.controlledValue).toBe('updated')
  })
})
