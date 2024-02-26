import { describe, expect, it } from '@jest/globals'

import { assert } from '../assert'

describe('utils/assert()', () => {
  it('should not throw an error if the value is defined', () => {
    const value = 'test'

    expect(() => assert(value, 'value')).not.toThrow()
  })

  it('should throw a FrontendError if the value is undefined', () => {
    expect(() => assert(undefined, 'value')).toThrow('[monitor-ui] `value` is undefined.')
  })
})
