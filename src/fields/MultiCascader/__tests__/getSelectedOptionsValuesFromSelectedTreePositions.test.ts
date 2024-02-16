/* eslint-disable sort-keys-fix/sort-keys-fix */

import { describe, expect, it } from '@jest/globals'

import { getSelectedOptionsValuesFromSelectedTreePositions } from '../utils'

import type { TreeBranchOption } from '../../../types/definitions'

describe('fields/MultiCascader/utils/getSelectedOptionsValuesFromSelectedTreePositions()', () => {
  it('should correctly identify selected options for uniform depth tree options', () => {
    const treeOptions: TreeBranchOption[] = [
      {
        label: 'Branch 1',
        children: [
          { label: 'Leaf 0-0', value: '0-0' },
          { label: 'Leaf 0-1', value: '0-1' }
        ]
      },
      {
        label: 'Branch 2',
        children: [
          { label: 'Leaf 1-0', value: '1-0' },
          { label: 'Leaf 1-1', value: '1-1' }
        ]
      }
    ]
    const rsuiteTreePaths = ['0-0', '1-1']

    const result = getSelectedOptionsValuesFromSelectedTreePositions(treeOptions, rsuiteTreePaths)

    expect(result).toEqual(['0-0', '1-1'])
  })

  it('should return all leaves when selecting the root of a uniform depth tree', () => {
    const treeOptions: TreeBranchOption[] = [
      {
        label: 'Branch 1',
        children: [
          { label: 'Leaf 0-0', value: '0-0' },
          { label: 'Leaf 0-1', value: '0-1' }
        ]
      }
    ]
    const rsuiteTreePaths = ['0']

    const result = getSelectedOptionsValuesFromSelectedTreePositions(treeOptions, rsuiteTreePaths)

    expect(result).toEqual(['0-0', '0-1'])
  })

  it('should handle empty paths correctly', () => {
    const treeOptions: TreeBranchOption[] = [
      {
        label: 'Branch 1',
        children: [
          { label: 'Leaf 0-0', value: '0-0' },
          { label: 'Leaf 0-1', value: '0-1' }
        ]
      }
    ]
    const rsuiteTreePaths: string[] = []

    const result = getSelectedOptionsValuesFromSelectedTreePositions(treeOptions, rsuiteTreePaths)

    expect(result).toEqual([])
  })

  it('should correctly identify selected options for three levels of depth', () => {
    const treeOptions: TreeBranchOption[] = [
      {
        label: 'Branch 1',
        children: [
          {
            label: 'SubBranch 0-0',
            children: [
              { label: 'Leaf 0-0-0', value: '0-0-0' },
              { label: 'Leaf 0-0-1', value: '0-0-1' }
            ]
          },
          {
            label: 'SubBranch 0-1',
            children: [
              { label: 'Leaf 0-1-0', value: '0-1-0' },
              { label: 'Leaf 0-1-1', value: '0-1-1' }
            ]
          }
        ]
      },
      {
        label: 'Branch 2',
        children: [
          {
            label: 'SubBranch 1-0',
            children: [
              { label: 'Leaf 1-0-0', value: '1-0-0' },
              { label: 'Leaf 1-0-1', value: '1-0-1' }
            ]
          }
        ]
      }
    ]
    const rsuiteTreePaths = ['0-0', '0-1-0', '1-0-0']

    const result = getSelectedOptionsValuesFromSelectedTreePositions(treeOptions, rsuiteTreePaths)

    expect(result).toEqual(['0-0-0', '0-0-1', '0-1-0', '1-0-0'])
  })
})
