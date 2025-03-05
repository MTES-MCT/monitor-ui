import { describe, expect, it } from '@jest/globals'

import { fromRsuiteValue, findItemByValue, toRsuiteValue } from '../utils'

import type { TreeOption } from '../types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

describe('findItemByValue', () => {
  const options: TreeOption[] = [
    { children: [{ label: 'Child 1', value: 'c1' }], label: 'Parent 1', value: 'p1' },
    { children: [{ label: 'Child 2', value: 'c2' }], label: 'Parent 2', value: 'p2' }
  ]

  it('should find item and its parent', () => {
    const result = findItemByValue(options, 'c1')
    expect(result).toEqual({
      item: { label: 'Child 1', value: 'c1' },
      parent: { children: [{ label: 'Child 1', value: 'c1' }], label: 'Parent 1', value: 'p1' }
    })
  })

  it('should return undefined if value not found', () => {
    const result = findItemByValue(options, 'not_found')
    expect(result).toBeUndefined()
  })

  it('should find root level item without parent', () => {
    const result = findItemByValue(options, 'p1')
    expect(result).toEqual({
      item: { children: [{ label: 'Child 1', value: 'c1' }], label: 'Parent 1', value: 'p1' },
      parent: undefined
    })
  })
})

describe('fromRsuiteValue', () => {
  const options: TreeOption[] = [
    { children: [{ label: 'Child 1', value: 'c1' }], label: 'Parent 1', value: 'p1' },
    { children: [{ label: 'Child 2', value: 'c2' }], label: 'Parent 2', value: 'p2' }
  ]

  it('should return structured tree from values', () => {
    const values: ValueType = ['c1']
    const result = fromRsuiteValue(values, options)

    expect(result).toEqual([
      {
        children: [{ label: 'Child 1', value: 'c1' }],
        label: 'Parent 1',
        value: 'p1'
      }
    ])
  })

  it('should return undefined when no values are selected', () => {
    const result = fromRsuiteValue([], options)
    expect(result).toBeUndefined()
  })

  it('should handle unselect', () => {
    const values: ValueType = ['p1']
    const previousValues: ValueType = ['p1', 'c1']
    const result = fromRsuiteValue(values, options, previousValues)

    expect(result).toEqual([
      {
        children: [],
        label: 'Parent 1',
        value: 'p1'
      }
    ])
  })
})

describe('toRsuiteValue', () => {
  it('should flatten values from structured tree', () => {
    const uiValues: TreeOption[] = [
      {
        children: [{ label: 'Child 1', value: 'c1' }],
        label: 'Parent 1',
        value: 'p1'
      }
    ]

    const result = toRsuiteValue(uiValues)
    expect(result).toEqual(['p1', 'c1'])
  })

  it('should return undefined when input is undefined', () => {
    expect(toRsuiteValue(undefined)).toBeUndefined()
  })

  it('should handle multiple parents with children', () => {
    const uiValues: TreeOption[] = [
      {
        children: [{ label: 'Child 1', value: 'c1' }],
        label: 'Parent 1',
        value: 'p1'
      },
      {
        children: [{ label: 'Child 2', value: 'c2' }],
        label: 'Parent 2',
        value: 'p2'
      }
    ]

    const result = toRsuiteValue(uiValues)
    expect(result).toEqual(expect.arrayContaining(['p1', 'c1', 'p2', 'c2']))
    expect(result).toHaveLength(4)
  })
})
