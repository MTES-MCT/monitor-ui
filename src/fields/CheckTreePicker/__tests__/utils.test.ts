import { describe, expect, it } from '@jest/globals'

import {
  computeDisabledValues,
  deepCloneExtensible,
  fromRsuiteValue,
  getOptionsToDisplay,
  getParentRsuiteValue,
  getTreeOptionsBySelectedValues,
  hasThreeLevels,
  toRsuiteValue
} from '../utils'

import type { TreeOption } from '../types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'

describe('getTreeOptionsBySelectedValues', () => {
  const options: TreeOption[] = [
    {
      children: [
        { label: 'Acidification des océans', value: 'acidification_oceans' },
        { label: 'Réchauffement des eaux', value: 'rechauffement_eaux' },
        { label: 'Blanchissement des coraux', value: 'blanchissement_coraux' }
      ],
      label: 'Changement climatique et océan',
      value: 'changement_climatique_ocean'
    },
    {
      children: [
        { label: 'Déchets plastiques', value: 'dechets_plastiques' },
        { label: 'Pollution chimique', value: 'pollution_chimique' }
      ],
      label: 'Pollution marine',
      value: 'pollution_marine'
    }
  ]

  it('should return filtered options with selected children only', () => {
    const selectedValues = ['acidification_oceans', 'pollution_chimique']

    const result = getTreeOptionsBySelectedValues(selectedValues, options)

    expect(result).toEqual([
      {
        children: [{ label: 'Acidification des océans', value: 'acidification_oceans' }],
        label: 'Changement climatique et océan',
        value: 'changement_climatique_ocean'
      },
      {
        children: [{ label: 'Pollution chimique', value: 'pollution_chimique' }],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ])
  })

  it('should return an empty array if no selected values match', () => {
    const selectedValues: string[] = []

    const result = getTreeOptionsBySelectedValues(selectedValues, options)

    expect(result).toEqual([])
  })

  it('should return top-level options if their value matches', () => {
    const selectedValues = ['changement_climatique_ocean']

    const result = getTreeOptionsBySelectedValues(selectedValues, options)

    expect(result).toEqual([
      {
        children: [
          { label: 'Acidification des océans', value: 'acidification_oceans' },
          { label: 'Réchauffement des eaux', value: 'rechauffement_eaux' },
          { label: 'Blanchissement des coraux', value: 'blanchissement_coraux' }
        ],
        label: 'Changement climatique et océan',
        value: 'changement_climatique_ocean'
      }
    ])
  })

  it('should handle undefined selectedValues by returning an empty array', () => {
    const selectedValues = undefined

    const result = getTreeOptionsBySelectedValues(selectedValues, options)

    expect(result).toEqual([])
  })

  it('should handle options without children and still match top-level values', () => {
    const optionsWithNoChildren: TreeOption[] = [
      { label: 'Éducation et sensibilisation', value: 'education_sensibilisation' }
    ]

    const selectedValues = ['education_sensibilisation']

    const result = getTreeOptionsBySelectedValues(selectedValues, optionsWithNoChildren)

    expect(result).toEqual([{ label: 'Éducation et sensibilisation', value: 'education_sensibilisation' }])
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
})

describe('toRsuiteValue', () => {
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

  it('should flatten children values and childless values from structured tree', () => {
    const uiValues: TreeOption[] = [
      {
        children: [
          { label: 'Child 1', value: 'c1' },
          { label: 'Child 2', value: 'c2' }
        ],
        label: 'Parent 1',
        value: 'p1'
      },
      {
        label: 'Parent 2',
        value: 'p2'
      }
    ]

    const result = toRsuiteValue(uiValues)
    expect(result).toEqual(['p2', 'c1', 'c2'])
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

describe('computeDisabledValues', () => {
  const uiValues: TreeOption[] = [
    {
      children: [
        { label: 'Child 1', value: 'c1' },
        { label: 'Child 2', value: 'c2' }
      ],
      label: 'Parent 1',
      value: 'p1'
    },
    {
      label: 'Parent 2',
      value: 'p2'
    }
  ]

  it('should return empty array if multi-select is true', () => {
    const result = computeDisabledValues(true, ['p1'], uiValues, 'children')
    expect(result).toEqual([])
  })

  it('should disable non-selected options and their children when multi-select is false', () => {
    const result = computeDisabledValues(false, ['p1'], uiValues, 'children')
    // B, C, B1 are not selected
    expect(result).toEqual(['p2'])
  })

  it('should handle case when selected option has no children', () => {
    const result = computeDisabledValues(false, ['p2'], uiValues, 'children')
    // A, B, A1, A2, B1 are not selected
    expect(result).toEqual(['p1', 'c1', 'c2'])
  })
})

describe('getOptionsToDisplay', () => {
  const allOptions: TreeOption[] = [
    {
      children: [
        { label: 'Child 1', value: 'child1' },
        { label: 'Child 2', value: 'child2' }
      ],
      label: 'Parent 1',
      value: 'parent1'
    },
    {
      children: [
        { label: 'Child 3', value: 'child3' },
        { label: 'Child 4', value: 'child4' }
      ],
      label: 'Parent 2',
      value: 'parent2'
    },
    {
      label: 'Orphan Option',
      value: 'orphan'
    }
  ]

  it('returns parent if all children are selected', () => {
    const selected = [
      { label: 'Child 1', value: 'child1' },
      { label: 'Child 2', value: 'child2' }
    ]

    const result = getOptionsToDisplay(allOptions, selected)
    expect(result).toEqual([
      {
        children: [
          { label: 'Child 1', value: 'child1' },
          { label: 'Child 2', value: 'child2' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      }
    ])
  })

  it('returns orphan child if its parent is not fully selected', () => {
    const selected = [
      { label: 'Child 3', value: 'child3' } // child4 is missing
    ]

    const result = getOptionsToDisplay(allOptions, selected)
    expect(result).toEqual([{ label: 'Child 3', value: 'child3' }])
  })

  it('returns mixed: one parent complete, one orphan child', () => {
    const selected = [
      { label: 'Child 1', value: 'child1' },
      { label: 'Child 2', value: 'child2' },
      { label: 'Child 3', value: 'child3' }
    ]

    const result = getOptionsToDisplay(allOptions, selected)
    expect(result).toEqual([
      {
        children: [
          { label: 'Child 1', value: 'child1' },
          { label: 'Child 2', value: 'child2' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      },
      { label: 'Child 3', value: 'child3' }
    ])
  })

  it('returns ungrouped option if selected and has no parent', () => {
    const selected = [{ label: 'Orphan Option', value: 'orphan' }]
    const result = getOptionsToDisplay(allOptions, selected)
    expect(result).toEqual([{ label: 'Orphan Option', value: 'orphan' }])
  })

  it('returns empty array if selectedOptions is empty', () => {
    const result = getOptionsToDisplay(allOptions, [])
    expect(result).toEqual([])
  })

  it('returns empty array if allOptions is empty', () => {
    const result = getOptionsToDisplay([], [{ label: 'Child 1', value: 'child1' }])
    expect(result).toEqual([])
  })
})

describe('getParentRsuiteValue', () => {
  it('returns an empty array if options are empty', () => {
    const result = getParentRsuiteValue(undefined)
    expect(result).toEqual([])
  })

  it('returns an empty array none of the nodes got child', () => {
    const options = [{ value: '1' }, { value: '2' }]
    const result = getParentRsuiteValue(options)
    expect(result).toEqual([])
  })

  it('return value of node that got children', () => {
    const options = [
      { children: [{ value: '1.1' }], value: '1' },
      { value: '2' },
      { children: [{ value: '3.1' }, { value: '3.2' }], value: '3' }
    ]
    const result = getParentRsuiteValue(options)
    expect(result).toEqual(['1', '3'])
  })

  it('should use custom key if specified', () => {
    const options = [{ customChildren: [{ customValue: 'A.1' }], customValue: 'A' }, { customValue: 'B' }]
    const result = getParentRsuiteValue(options as TreeOption[], 'customValue', 'customChildren')
    expect(result).toEqual(['A'])
  })

  it('ignore childless nodes', () => {
    const options = [
      { children: [], value: '1' },
      { children: undefined, value: '2' },
      { children: [{ value: '3.1' }], value: '3' }
    ]
    const result = getParentRsuiteValue(options)
    expect(result).toEqual(['3'])
  })

  describe('deepCloneExtensible', () => {
    it('should clone an object with extensible properties', () => {
      const obj = { a: 1, b: 2 }
      const cloned = deepCloneExtensible(obj)
      expect(cloned).toEqual(obj)
      expect(Object.isExtensible(cloned)).toBe(true)
    })

    it('should clone nested objects', () => {
      const obj = { a: { b: 2 }, c: 3 }
      const cloned = deepCloneExtensible(obj)
      expect(cloned).toEqual(obj)
      expect(Object.isExtensible(cloned.a)).toBe(true)
    })
  })
})

describe('hasThreeLevels', () => {
  it('should return true when data has 3 levels', () => {
    const options: TreeOption[] = [
      {
        children: [
          {
            children: [{ label: 'Level 3', value: 'level3' }],
            label: 'Level 2',
            value: 'level2'
          }
        ],
        label: 'Level 1',
        value: 'level1'
      }
    ]

    const result = hasThreeLevels(options)
    expect(result).toBe(true)
  })

  it('should return false when data has only 2 levels', () => {
    const options: TreeOption[] = [
      {
        children: [{ label: 'Level 2', value: 'level2' }],
        label: 'Level 1',
        value: 'level1'
      }
    ]

    const result = hasThreeLevels(options)
    expect(result).toBe(false)
  })

  it('should return false when data has only 1 level', () => {
    const options: TreeOption[] = [{ label: 'Level 1', value: 'level1' }]

    const result = hasThreeLevels(options)
    expect(result).toBe(false)
  })

  it('should return false when options are empty', () => {
    const options: TreeOption[] = []

    const result = hasThreeLevels(options)
    expect(result).toBe(false)
  })

  it('should return true when one branch has 3 levels among multiple branches', () => {
    const options: TreeOption[] = [
      {
        children: [{ label: 'Level 2 A', value: 'level2a' }],
        label: 'Level 1 A',
        value: 'level1a'
      },
      {
        children: [
          {
            children: [{ label: 'Level 3 B', value: 'level3b' }],
            label: 'Level 2 B',
            value: 'level2b'
          }
        ],
        label: 'Level 1 B',
        value: 'level1b'
      }
    ]

    const result = hasThreeLevels(options)
    expect(result).toBe(true)
  })

  it('should work with custom childrenKey', () => {
    const options: any[] = [
      {
        customChildren: [
          {
            customChildren: [{ label: 'Level 3', value: 'level3' }],
            label: 'Level 2',
            value: 'level2'
          }
        ],
        label: 'Level 1',
        value: 'level1'
      }
    ]

    const result = hasThreeLevels(options, 'customChildren')
    expect(result).toBe(true)
  })
})
