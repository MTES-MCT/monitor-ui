import { describe, expect, it } from '@jest/globals'

import { getFilteredCollection } from '../getFilteredCollection'

import type { Filter } from '../../types/definitions'

describe('utils/getFilteredCollection()', () => {
  it('should return the collection with 0 filter', () => {
    type Item = { id: number; name: string }

    const collection = [{ id: 1, name: 'Item A' }] as Item[] | undefined
    const filters: Array<Filter<Item>> = []

    const result = getFilteredCollection(collection, filters)

    expect(result).toEqual(collection)
  })

  it('should filter the collection with 1 filter', () => {
    type Item = { id: number; name: string }

    const collection = [
      { id: 1, name: 'Item A' },
      { id: 2, name: 'Item B' }
    ] as Item[] | undefined
    const filters: Array<Filter<Item>> = [items => items.filter(item => item.id === 1)]

    const result = getFilteredCollection(collection, filters)

    expect(result).toEqual([{ id: 1, name: 'Item A' }])
  })

  it('should filter the collection with 2 filters', () => {
    type Item = { id: number; isActive: boolean; name: string }

    const collection = [
      { id: 1, isActive: true, name: 'Item A' },
      { id: 2, isActive: false, name: 'Item B' },
      { id: 3, isActive: true, name: 'Item C' }
    ] as Item[] | undefined
    const filters: Array<Filter<Item>> = [
      items => items.filter(item => item.isActive),
      items => items.filter(item => item.id > 1)
    ]

    const result = getFilteredCollection(collection, filters)

    expect(result).toEqual([{ id: 3, isActive: true, name: 'Item C' }])
  })

  it('should return `undefined` with an undefined collection', () => {
    type Item = { id: number; name: string }

    const collection = undefined as Item[] | undefined
    const filters: Array<Filter<Item>> = [items => items.filter(item => item.id === 1)]

    const result = getFilteredCollection(collection, filters)

    expect(result).toBeUndefined()
  })
})
