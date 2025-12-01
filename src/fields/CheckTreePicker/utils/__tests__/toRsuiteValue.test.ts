import { describe, expect, it } from '@jest/globals'

import { toRsuiteValue } from '../../utils'

import type { TreeOption } from '../../types'

describe('CheckTreePicker/utils/toRsuiteValue', () => {
  it('should return undefined for undefined input', () => {
    const result = toRsuiteValue(undefined)

    expect(result).toBeUndefined()
  })

  it('should return undefined for empty array', () => {
    const result = toRsuiteValue([])

    expect(result).toBeUndefined()
  })

  it('should extract leaf node values from 2-level tree', () => {
    const tree: TreeOption[] = [
      {
        children: [
          { label: 'Child 1', value: 'c1' },
          { label: 'Child 2', value: 'c2' }
        ],
        label: 'Parent 1',
        value: 'p1'
      }
    ]

    const result = toRsuiteValue(tree)

    expect(result).toEqual(['c1', 'c2'])
  })

  it('should extract leaf node values from 3-level tree', () => {
    const tree: TreeOption[] = [
      {
        children: [
          {
            children: [
              { label: 'Level 3a', value: 'l3a' },
              { label: 'Level 3b', value: 'l3b' }
            ],
            label: 'Level 2',
            value: 'l2'
          }
        ],
        label: 'Level 1',
        value: 'l1'
      }
    ]

    const result = toRsuiteValue(tree)

    expect(result).toEqual(['l3a', 'l3b'])
  })

  it('should handle mixed leaf and parent nodes', () => {
    const tree: TreeOption[] = [
      { label: 'Leaf 1', value: 'leaf1' },
      {
        children: [
          { label: 'Child 1', value: 'child1' },
          { label: 'Child 2', value: 'child2' }
        ],
        label: 'Parent',
        value: 'parent'
      }
    ]

    const result = toRsuiteValue(tree)

    expect(result).toEqual(['leaf1', 'child1', 'child2'])
  })

  it('should work with custom childrenKey', () => {
    const tree: TreeOption[] = [
      {
        label: 'Parent',
        subItems: [{ label: 'Child', value: 'child' }],
        value: 'parent'
      }
    ]

    const result = toRsuiteValue(tree, 'subItems')

    expect(result).toEqual(['child'])
  })

  it('should work with custom valueKey', () => {
    const tree: TreeOption[] = [
      {
        children: [{ id: 'child', label: 'Child' }],
        id: 'parent',
        label: 'Parent'
      }
    ]

    const result = toRsuiteValue(tree, 'children', 'id')

    expect(result).toEqual(['child'])
  })

  it('should handle deeply nested 4-level tree', () => {
    const tree: TreeOption[] = [
      {
        children: [
          {
            children: [
              {
                children: [
                  { label: 'L4a', value: 'l4a' },
                  { label: 'L4b', value: 'l4b' }
                ],
                label: 'L3',
                value: 'l3'
              }
            ],
            label: 'L2',
            value: 'l2'
          }
        ],
        label: 'L1',
        value: 'l1'
      }
    ]

    const result = toRsuiteValue(tree)

    expect(result).toEqual(['l4a', 'l4b'])
  })

  it('should handle multiple branches', () => {
    const tree: TreeOption[] = [
      {
        children: [
          { label: 'B1-C1', value: 'b1c1' },
          { label: 'B1-C2', value: 'b1c2' }
        ],
        label: 'Branch 1',
        value: 'b1'
      },
      {
        children: [{ label: 'B2-C1', value: 'b2c1' }],
        label: 'Branch 2',
        value: 'b2'
      }
    ]

    const result = toRsuiteValue(tree)

    expect(result).toEqual(['b1c1', 'b1c2', 'b2c1'])
  })

  it('should handle real-world fishing regulations data', () => {
    const tree: TreeOption[] = [
      {
        id: 'mesures_techniques_conservation',
        name: 'Mesures techniques et de conservation',
        subThemes: [
          {
            id: 'autorisation_debarquement',
            name: 'Autorisation Débarquement',
            subThemes: [
              {
                id: '27718',
                name: '27718 – Débarquement'
              }
            ]
          }
        ]
      }
    ]

    const result = toRsuiteValue(tree, 'subThemes', 'id')

    expect(result).toEqual(['27718'])
  })
})
