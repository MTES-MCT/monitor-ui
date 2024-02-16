/* eslint-disable sort-keys-fix/sort-keys-fix */

import { describe, expect, it } from '@jest/globals'

import { getRsuiteDataItemsFromOptions } from '../getRsuiteDataItemsFromOptions'

describe('utils/getRsuiteDataItemsFromOptions()', () => {
  it('should return an empty array for empty options', () => {
    const options = []

    const result = getRsuiteDataItemsFromOptions(options)

    expect(result).toStrictEqual([])
  })

  it('should return the expected data from string values', () => {
    const options = [
      { label: 'Option 1', value: 'OPTION_1' },
      { label: 'Option 2', value: 'OPTION_2' }
    ]

    const result = getRsuiteDataItemsFromOptions(options)

    expect(result).toStrictEqual([
      { label: 'Option 1', optionValue: 'OPTION_1', value: 'OPTION_1' },
      { label: 'Option 2', optionValue: 'OPTION_2', value: 'OPTION_2' }
    ])
  })

  it('should return the expected data from number values', () => {
    const options = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 }
    ]

    const result = getRsuiteDataItemsFromOptions(options)

    expect(result).toStrictEqual([
      { label: 'Option 1', optionValue: 1, value: '1' },
      { label: 'Option 2', optionValue: 2, value: '2' }
    ])
  })

  it('should return the expected data from object values', () => {
    const options = [
      {
        label: 'Option 1',
        value: {
          id: 0,
          name: 'First Option'
        }
      },
      {
        label: 'Option 2',
        value: {
          id: 1,
          name: 'Second Option'
        }
      }
    ]
    const optionValueKey = 'id'

    const result = getRsuiteDataItemsFromOptions(options, optionValueKey)

    expect(result).toStrictEqual([
      {
        label: 'Option 1',
        optionValue: {
          id: 0,
          name: 'First Option'
        },
        value: '0'
      },
      {
        label: 'Option 2',
        optionValue: {
          id: 1,
          name: 'Second Option'
        },
        value: '1'
      }
    ])
  })
})
