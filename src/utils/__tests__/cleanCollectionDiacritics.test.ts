import { describe, expect, it } from '@jest/globals'

import { cleanCollectionDiacritics } from '../cleanCollectionDiacritics'

const TEST_COLLECTION = [
  { code: 'ME', description: 'mémo', ignored: 'mémo', other: { prop: 'mémo' } },
  { code: 'MF', description: 'mémoire', ignored: 'mémoire', other: { prop: 'mémoire' } },
  { code: 'MG', description: 'mémorisable', ignored: 'mémorisable', other: { prop: 'mémorisable' } },
  { code: 'MH', description: 'mémoriser', ignored: 'mémoriser', other: { prop: 'mémoriser' } }
]

describe('utils/cleanCollectionDiacritics()', () => {
  it('should return the expected result', () => {
    const keys = [
      {
        name: 'code',
        weight: 2
      },
      'description',
      'other.prop'
    ]

    const result = cleanCollectionDiacritics(TEST_COLLECTION, keys)

    expect(result[0]).toMatchObject({ code: 'ME', description: 'memo', other: { prop: 'memo' } })
  })
})
