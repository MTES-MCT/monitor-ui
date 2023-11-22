import { describe, expect, it } from '@jest/globals'

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

  it('should return consistent hashes regardless of items or props order', () => {
    const firstCollection = [
      { id: 2, name: 'Item B' },
      { id: 1, name: 'Item A' }
    ]
    const secondCollection = [
      { id: 1, name: 'Item A' },
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      { name: 'Item B', id: 2 }
    ]

    const firstResult = getHashFromCollection(firstCollection)
    const secondResult = getHashFromCollection(secondCollection)

    expect(firstResult).toBe(secondResult)
  })
})
