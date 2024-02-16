/* eslint-disable sort-keys-fix/sort-keys-fix */

import { describe, expect, it } from '@jest/globals'

import { getSelectedTreePositionsFromSelectedOptionValues } from '../utils'

import type { RsuiteTreeItem } from '@types_/internals'

describe('fields/MultiCascader/utils/getSelectedTreePositionsFromSelectedOptionValues()', () => {
  it('should return correct tree positions for given option values', () => {
    const treeOptionsAsRsuiteDataItems: RsuiteTreeItem[] = [
      {
        label: 'Branch 1',
        value: '0',
        children: [
          { label: 'Leaf 1-1', optionValue: 'First Leaf', value: '0-0' },
          { label: 'Leaf 1-2', optionValue: 'Second Leaf', value: '0-1' }
        ]
      },
      {
        label: 'Branch 2',
        value: '1',
        children: [
          { label: 'Leaf 2-1', optionValue: 'Third Leaf', value: '1-0' },
          { label: 'Leaf 2-2', optionValue: 'Fourth Leaf', value: '1-1' }
        ]
      }
    ]
    const optionValues = ['First Leaf', 'Fourth Leaf']

    const result = getSelectedTreePositionsFromSelectedOptionValues(treeOptionsAsRsuiteDataItems, optionValues)

    expect(result).toEqual(['0-0', '1-1'])
  })

  it('should handle cases where option values are not found', () => {
    const treeOptionsAsRsuiteDataItems: RsuiteTreeItem[] = [
      {
        label: 'Branch 1',
        value: '0',
        children: [
          { label: 'Leaf 1-1', optionValue: '1-1', value: 'First Leaf' },
          { label: 'Leaf 1-2', optionValue: '1-2', value: 'Second Leaf' }
        ]
      }
    ]
    const optionValues = ['Third Leaf', 'Fourth Leaf']

    const result = getSelectedTreePositionsFromSelectedOptionValues(treeOptionsAsRsuiteDataItems, optionValues)

    expect(result).toEqual([])
  })

  it('should correctly identify positions for deeply nested option values', () => {
    const treeOptionsAsRsuiteDataItems: RsuiteTreeItem[] = [
      {
        label: 'Branch 1',
        value: '0',
        children: [
          {
            label: 'SubBranch 1-1',
            value: '0-0',
            children: [
              { label: 'Leaf 1-1-1', optionValue: '1-1-1', value: '0-0-0' },
              { label: 'Leaf 1-1-2', optionValue: '1-1-2', value: '0-0-1' }
            ]
          },
          { label: 'Leaf 1-2', optionValue: '1-2', value: '0-1' }
        ]
      }
    ]
    const optionValues = ['1-1-1', '1-2']

    const result = getSelectedTreePositionsFromSelectedOptionValues(treeOptionsAsRsuiteDataItems, optionValues)

    expect(result).toEqual(['0-0-0', '0-1'])
  })
})
