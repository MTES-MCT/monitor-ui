import { expect } from '@jest/globals'

import { pluralize } from '../pluralize'

describe('pluralize()', () => {
  it('should add an "s" to the text when <count> is greater than 1', () => {
    const text = 'apple'
    const count = 5

    const result = pluralize(text, count)

    expect(result).toBe('apples')
  })

  it('should not add an "s" to the text when <count> is 1', () => {
    const text = 'car'
    const count = 1

    const result = pluralize(text, count)

    expect(result).toBe('car')
  })

  it('should not add an "s" to the text when <count> is 0', () => {
    const text = 'dog'
    const count = 0

    const result = pluralize(text, count)

    expect(result).toBe('dog')
  })

  it('should handle an empty string', () => {
    const text = ''
    const count = 3

    const result = pluralize(text, count)

    expect(result).toBe('')
  })

  it('should handle an empty string with trailing spaces', () => {
    const text = '  '
    const count = 3

    const result = pluralize(text, count)

    expect(result).toBe('')
  })
})
