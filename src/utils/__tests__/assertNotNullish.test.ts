import { describe, expect, it } from '@jest/globals'

import { mockConsole } from './utils'
import { assertNotNullish } from '../assertNotNullish'

describe('utils/assertNotNullish()', () => {
  mockConsole()

  it('should not throw an error if the value is defined', () => {
    const value = 'test'

    const call = () => assertNotNullish(value)

    expect(call).not.toThrow()
  })

  it('should throw a FrontendError if the value is null', () => {
    // eslint-disable-next-line no-null/no-null
    const value = null

    const call = () => assertNotNullish(value)

    expect(call).toThrow(Error)
    expect(call).toThrow('The value is null.')
  })

  it('should throw a FrontendError if the value is undefined', () => {
    const value = undefined

    const call = () => assertNotNullish(value)

    expect(call).toThrow(Error)
    expect(call).toThrow('The value is undefined.')
  })
})
