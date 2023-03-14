import { expect } from '@jest/globals'

import { toggleInCollection } from '../toggleInCollection'

describe('utils/toggleInCollection()', () => {
  it('should add the item to a collection missing it', () => {
    const item = { a: 0, b: 1 }
    const collection = []

    const result = toggleInCollection(item, collection)

    expect(result).toStrictEqual([{ a: 0, b: 1 }])
  })

  it('should remove the item from a collection including it', () => {
    const item = { a: 0, b: 1 }
    const collection = [{ a: 0, b: 1 }]

    const result = toggleInCollection(item, collection)

    expect(result).toStrictEqual([])
  })

  it("should remove the item from a collection including it when props sorting doesn't match", () => {
    const item = { a: 0, b: 1 }
    const collection = [{ a: 0, b: 1 }]

    const result = toggleInCollection(item, collection)

    expect(result).toStrictEqual([])
  })
})
