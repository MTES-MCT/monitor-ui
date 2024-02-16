/* eslint-disable sort-keys-fix/sort-keys-fix */

import { describe, expect, it } from '@jest/globals'

import { countTreeDepth } from '../utils'

describe('fields/MultiCascader/utils/countTreeDepth()', () => {
  it('should return 0 for an empty tree', () => {
    const treeOptions = []

    const result = countTreeDepth(treeOptions)

    expect(result).toBe(0)
  })

  it('should return 1 for a tree with only root level options', () => {
    const treeOptions = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ]

    const result = countTreeDepth(treeOptions)

    expect(result).toBe(1)
  })

  it('should return the correct depth for a tree with multiple levels', () => {
    const treeOptions = [
      {
        label: 'Branch 1',
        children: [
          {
            label: 'SubBranch 1-1',
            children: [
              { label: 'Leaf 1-1-1', value: '1-1-1' },
              { label: 'Leaf 1-1-2', value: '1-1-2' }
            ]
          }
        ]
      }
    ]

    const result = countTreeDepth(treeOptions)

    expect(result).toBe(3)
  })
})
