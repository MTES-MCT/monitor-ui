import { expect } from '@jest/globals'

import { getHashFromCollection } from '../getHashFromCollection'

describe('utils/getHashFromCollection()', () => {
  it('should return consistent hashes for collections with the same content', () => {
    const firstCollection = [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ]
    const secondCollection = [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ]

    const firstResult = getHashFromCollection(firstCollection)
    const secondResult = getHashFromCollection(secondCollection)

    expect(firstResult).toBe(secondResult)
  })

  it('should return different hashes for collections with different content', () => {
    const firstCollection = [{ id: 1, name: 'Item A' }]
    const secondCollection = [{ id: 2, name: 'Item B' }]

    const firstResult = getHashFromCollection(firstCollection)
    const secondResult = getHashFromCollection(secondCollection)

    expect(firstResult).not.toBe(secondResult)
  })

  it('should return consistent hashes regardless of item order when using `sortingKey`', () => {
    const firstCollection = [
      { id: 2, name: 'Item B' },
      { id: 1, name: 'Item A' }
    ]
    const secondCollection = [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ]

    const firstResult = getHashFromCollection(firstCollection, 'id')
    const secondResult = getHashFromCollection(secondCollection, 'id')

    expect(firstResult).toBe(secondResult)
  })

  it('should return different hashes based on item order when no `sortingKey` is provided', () => {
    const firstCollection = [
      { id: 2, name: 'Item B' },
      { id: 1, name: 'Item A' }
    ]
    const secondCollection = [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ]

    const firstResult = getHashFromCollection(firstCollection)
    const secondResult = getHashFromCollection(secondCollection)

    expect(firstResult).not.toBe(secondResult)
  })

  it('should return "0" for an empty collection', () => {
    const collection = []

    const result = getHashFromCollection(collection)

    expect(result).toBe('0')
  })
})
