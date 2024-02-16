import { describe, expect, it } from '@jest/globals'

import { ensure } from '../ensure'

describe('utils/ensure()', () => {
  it('should return the value if it is defined', () => {
    const value = 'test'

    expect(ensure(value, 'value')).toBe(value)
  })

  it('should throw an error if the value is undefined', () => {
    expect(() => ensure(undefined, 'value')).toThrow('[monitor-ui] `value` is undefined.')
  })
})
