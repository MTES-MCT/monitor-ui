import { describe, expect, it } from '@jest/globals'

import { remove } from '../remove'

describe('utils/remove()', () => {
  it('should return the expected result', () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8]

    const result = remove(2, 3, list)

    expect(result).toEqual([1, 2, 6, 7, 8])
    // The original list should not be mutated.
    expect(list).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})
