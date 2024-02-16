/* eslint-disable sort-keys-fix/sort-keys-fix */

import { describe, expect, it } from '@jest/globals'

import { getRsuiteTreeItemsFromTreeOptions } from '../utils'

describe('fields/MultiCascader/utils/getRsuiteTreeItemsFromTreeOptions()', () => {
  it('should return an empty array for empty options', () => {
    const options = []

    const result = getRsuiteTreeItemsFromTreeOptions(options)

    expect(result).toStrictEqual([])
  })

  it('should return the expected data from string values', () => {
    const options = [
      { label: 'Option 1', value: 'OPTION_1' },
      { label: 'Option 2', value: 'OPTION_2' }
    ]

    const result = getRsuiteTreeItemsFromTreeOptions(options)

    expect(result).toStrictEqual([
      { label: 'Option 1', optionValue: 'OPTION_1', value: '0' },
      { label: 'Option 2', optionValue: 'OPTION_2', value: '1' }
    ])
  })

  it('should return the expected data from number values', () => {
    const options = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 }
    ]

    const result = getRsuiteTreeItemsFromTreeOptions(options)

    expect(result).toStrictEqual([
      { label: 'Option 1', optionValue: 1, value: '0' },
      { label: 'Option 2', optionValue: 2, value: '1' }
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

    const result = getRsuiteTreeItemsFromTreeOptions(options)

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

  it('should correctly handle options with nested children', () => {
    const options = [
      {
        label: 'Branch',
        children: [
          { label: 'Leaf 1', value: 'LEAF_1' },
          { label: 'Leaf 2', value: 'LEAF_2' }
        ]
      }
    ]

    const result = getRsuiteTreeItemsFromTreeOptions(options)

    expect(result).toStrictEqual([
      {
        label: 'Branch',
        value: '0',
        children: [
          { label: 'Leaf 1', optionValue: 'LEAF_1', value: '0-0' },
          { label: 'Leaf 2', optionValue: 'LEAF_2', value: '0-1' }
        ]
      }
    ])
  })

  it('should correctly handle options with 2 levels of nested children with object values', () => {
    const options = [
      {
        label: 'Branch 1',
        children: [
          {
            label: 'SubBranch 1',
            children: [
              { label: 'Leaf 1', value: { id: 'LEAF_1', name: 'First Leaf' } },
              { label: 'Leaf 2', value: { id: 'LEAF_2', name: 'Second Leaf' } }
            ]
          },
          {
            label: 'SubBranch 2',
            children: []
          }
        ]
      },
      {
        label: 'Branch 2',
        children: [
          {
            label: 'SubBranch 3',
            children: []
          },
          {
            label: 'SubBranch 4',
            children: [
              { label: 'Leaf 3', value: { id: 'LEAF_3', name: 'Third Leaf' } },
              { label: 'Leaf 4', value: { id: 'LEAF_4', name: 'Fourth Leaf' } }
            ]
          }
        ]
      }
    ]

    const result = getRsuiteTreeItemsFromTreeOptions(options)

    expect(result).toStrictEqual([
      {
        label: 'Branch 1',
        value: '0',
        children: [
          {
            label: 'SubBranch 1',
            value: '0-0',
            children: [
              {
                label: 'Leaf 1',
                optionValue: { id: 'LEAF_1', name: 'First Leaf' },
                value: '0-0-0'
              },
              {
                label: 'Leaf 2',
                optionValue: { id: 'LEAF_2', name: 'Second Leaf' },
                value: '0-0-1'
              }
            ]
          },
          {
            label: 'SubBranch 2',
            value: '0-1',
            children: []
          }
        ]
      },
      {
        label: 'Branch 2',
        value: '1',
        children: [
          {
            label: 'SubBranch 3',
            value: '1-0',
            children: []
          },
          {
            label: 'SubBranch 4',
            value: '1-1',
            children: [
              {
                label: 'Leaf 3',
                optionValue: { id: 'LEAF_3', name: 'Third Leaf' },
                value: '1-1-0'
              },
              {
                label: 'Leaf 4',
                optionValue: { id: 'LEAF_4', name: 'Fourth Leaf' },
                value: '1-1-1'
              }
            ]
          }
        ]
      }
    ])
  })
})
