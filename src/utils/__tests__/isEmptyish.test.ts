import { describe, expect, it } from '@jest/globals'

import { isEmptyish } from '../isEmptyish'

describe('utils/isEmptyish()', () => {
  it('should return `true` for an empty string', () => {
    expect(isEmptyish('')).toBe(true)
  })

  it('should return `true` for a string with only whitespace', () => {
    expect(isEmptyish('   ')).toBe(true)
  })

  it('should return `false` for a non-empty string', () => {
    expect(isEmptyish('hello')).toBe(false)
  })
})
