import { expect } from '@jest/globals'

import { isDefined } from '../isDefined'

describe('isDefined', () => {
  it('should return true for a defined value', () => {
    const value = 0

    const result = isDefined(value)

    expect(result).toBe(true)
  })

  it('should return false for a nonexitent value', () => {
    const result = isDefined()

    expect(result).toBe(false)
  })

  it('should return false for an undefined value', () => {
    const value = undefined

    const result = isDefined(value)

    expect(result).toBe(false)
  })

  it('should return false for a null value', () => {
    // eslint-disable-next-line no-null/no-null
    const value = null

    const result = isDefined(value)

    expect(result).toBe(false)
  })
})
