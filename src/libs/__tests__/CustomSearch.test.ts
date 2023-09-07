import { expect } from '@jest/globals'

import { CustomSearch } from '../CustomSearch'

function shuffle<T = any>(array: T[]): T[] {
  const clonedArray = [...array]

  let m = clonedArray.length
  let t
  let i
  while (m) {
    // eslint-disable-next-line no-plusplus
    i = Math.floor(Math.random() * m--)
    t = clonedArray[m]
    // eslint-disable-next-line no-param-reassign
    clonedArray[m] = clonedArray[i] as T
    // eslint-disable-next-line no-param-reassign
    clonedArray[i] = t
  }

  return clonedArray
}

const TEST_COLLECTION = [
  { code: 'ME', description: 'mémo', ignored: 'mémo', other: { prop: 'mémo' } },
  { code: 'MF', description: 'mémoire', ignored: 'mémoire', other: { prop: 'mémoire' } },
  { code: 'MG', description: 'mémorisable', ignored: 'mémorisable', other: { prop: 'mémorisable' } },
  { code: 'MH', description: 'mémoriser', ignored: 'mémoriser', other: { prop: 'mémoriser' } }
]

describe('libs/CustomSearch.cleanCollectionDiacritics()', () => {
  it('should return the expected result', () => {
    const keys = [
      {
        name: 'code',
        weight: 2
      },
      'description',
      'other.prop'
    ]

    const result = CustomSearch.cleanCollectionDiacritics(TEST_COLLECTION, keys)

    expect(result[0]).toMatchObject({ code: 'ME', description: 'memo', other: { prop: 'memo' } })
  })
})

describe('libs/CustomSearch.find()', () => {
  // We shuffle the collection to ensure that test results are independant from array order
  const shuffledTestCollection = shuffle(TEST_COLLECTION)

  it('should return the expected first item when searching for a weighted prop', () => {
    const keys = [
      {
        name: 'code',
        weight: 2
      },
      'description',
      'other.prop'
    ]

    const customSearch = new CustomSearch(shuffledTestCollection, keys)

    const result = customSearch.find('me')

    expect(result[0]).toMatchObject({ code: 'ME', description: 'mémo' })
  })

  it('should return the expected length and first item when searching with/without diacritics', () => {
    const keys = ['description']

    const customSearch = new CustomSearch(shuffledTestCollection, keys)
    const firstResult = customSearch.find('emoi')

    expect(firstResult).toHaveLength(4)
    expect(firstResult[0]).toMatchObject({ code: 'MF', description: 'mémoire' })

    const secondResult = customSearch.find('ÊMOÏ')

    expect(secondResult).toHaveLength(4)
    expect(secondResult[0]).toMatchObject({ code: 'MF', description: 'mémoire' })
  })

  it('should return the expected length and item when enabling `isStrict`', () => {
    const keys = ['description']
    const options = {
      isStrict: true
    }

    const customSearch = new CustomSearch(shuffledTestCollection, keys, options)
    const result = customSearch.find('emoi')

    expect(result).toHaveLength(1)
    expect(result).toMatchObject([{ code: 'MF', description: 'mémoire' }])
  })

  it('should return all the matching items by default', () => {
    const keys = ['description']

    const customSearch = new CustomSearch(shuffledTestCollection, keys)
    const result = customSearch.find('e')

    expect(result).toHaveLength(4)
  })

  it('should return the expected length when specifying <limit> parameter', () => {
    const keys = ['description']

    const customSearch = new CustomSearch(shuffledTestCollection, keys)
    const result = customSearch.find('e', 1)

    expect(result).toHaveLength(1)
  })

  it('should return both lower and upper case items by default', () => {
    const collection = [{ name: 'Avec Majuscule' }, { name: 'sans majuscule' }]
    const keys = ['name']

    const customSearch = new CustomSearch(collection, keys)
    const result = customSearch.find('M')

    expect(result).toHaveLength(2)
    expect(result).toMatchObject([{ name: 'Avec Majuscule' }, { name: 'sans majuscule' }])
  })

  it('should return the expected case items when enabling `isCaseSensitive`', () => {
    const collection = [{ name: 'Avec Majuscule' }, { name: 'sans majuscule' }]
    const keys = ['name']
    const options = {
      isCaseSensitive: true
    }

    const customSearch = new CustomSearch(collection, keys, options)
    const result = customSearch.find('M')

    expect(result).toHaveLength(1)
    expect(result).toMatchObject([{ name: 'Avec Majuscule' }])
  })

  it('should return both lower and upper case items when enabling `isStrict`', () => {
    const collection = [{ name: 'Avec Majuscule' }, { name: 'sans majuscule' }]
    const keys = ['name']
    const options = {
      isStrict: true
    }

    const customSearch = new CustomSearch(collection, keys, options)
    const result = customSearch.find('M')

    expect(result).toHaveLength(2)
    expect(result).toMatchObject([{ name: 'Avec Majuscule' }, { name: 'sans majuscule' }])
  })
})
