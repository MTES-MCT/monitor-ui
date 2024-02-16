// Assuming the file is located at src/utils/__tests__/countTreeDepth.test.ts
import { describe, expect, it } from '@jest/globals'

import { countTreeDepth } from '../utils' // Update with the correct import path

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
        children: [
          { label: 'Leaf 1-1', value: '1-1' },
          { label: 'Leaf 1-2', value: '1-2' }
        ],
        label: 'Branch 1'
      },
      {
        children: [
          {
            children: [
              { label: 'Leaf 2-1-1', value: '2-1-1' },
              { label: 'Leaf 2-1-2', value: '2-1-2' }
            ],
            label: 'SubBranch 2-1'
          }
        ],
        label: 'Branch 2'
      }
    ]
    const result = countTreeDepth(treeOptions)
    expect(result).toBe(3)
  })

  it('should handle trees with uneven branch lengths consistently', () => {
    const treeOptions = [
      {
        children: [
          {
            children: [{ label: 'Leaf 1-1-1', value: '1-1-1' }],
            label: 'SubBranch 1-1'
          }
        ],
        label: 'Branch 1'
      },
      {
        label: 'Branch 2',
        value: '2' // This branch has no children, indicating a shallower path
      }
    ]
    const result = countTreeDepth(treeOptions)
    expect(result).toBe(3) // The depth should reflect the deepest branch
  })
})
