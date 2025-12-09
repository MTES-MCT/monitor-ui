import { describe, expect, it } from '@jest/globals'

import { FISHING_REGULATIONS_UNIQUE } from '../../../../.storybook/data/FISHING_REGULATIONS_UNIQUE'
import {
  computeDisabledValues,
  deepCloneExtensible,
  flattenAllDescendants,
  fromRsuiteValue,
  generateUniqueIds,
  getOptionsToDisplay,
  getParentRsuiteValue,
  getTreeOptionsBySelectedValues,
  hasThreeLevels,
  mergeResultsByParent,
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

  it('should return filtered options with numbers', () => {
    const numberOptions: TreeOption[] = [
      {
        children: [
          { label: 'Acidification des océans', value: '123_1511' },
          { label: 'Réchauffement des eaux', value: '456_1511' },
          { label: 'Blanchissement des coraux', value: '789_1511' }
        ],
        label: 'Changement climatique et océan',
        value: 'changement_climatique_ocean'
      },
      {
        children: [
          { label: 'Déchets plastiques', value: '458_1235' },
          { label: 'Pollution chimique', value: '568_151' }
        ],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ]
    const selectedValues = ['123_1511', '458_1235']

    const result = getTreeOptionsBySelectedValues(selectedValues, numberOptions, true)

    expect(result).toEqual([
      {
        children: [{ label: 'Acidification des océans', value: 123 }],
        label: 'Changement climatique et océan',
        value: 'changement_climatique_ocean'
      },
      {
        children: [{ label: 'Déchets plastiques', value: 458 }],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ])
  })

  it('should return filtered options with string and spaces', () => {
    const numberOptions: TreeOption[] = [
      {
        children: [
          {
            children: [
              {
                label: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors",
                value: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors_1511"
              },
              {
                label: "27715 – Débarquement sans autorisation de produits de la pêche maritime et de l'aquaculture",
                value:
                  "27715 – Débarquement sans autorisation de produits de la pêche maritime et de l'aquaculture_1511"
              },
              {
                label: "27721 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors",
                value: "27721 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors_1511"
              }
            ],
            label: 'Sous-groupe 1',
            value: 'Sous-groupe 1'
          },
          {
            children: [
              {
                label: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors",
                value: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors_9865"
              },
              {
                label: "27715 – Débarquement sans autorisation de produits de la pêche maritime et de l'aquaculture",
                value:
                  "27715 – Débarquement sans autorisation de produits de la pêche maritime et de l'aquaculture_9865"
              },
              {
                label: "27721 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors",
                value: "27721 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors_9865"
              }
            ],
            label: 'Sous-groupe 2',
            value: 'Sous-groupe 2'
          }
        ],
        label: 'Changement climatique et océan',
        value: 'changement_climatique_ocean'
      },
      {
        children: [
          {
            children: [
              { label: 'Déchets plastiques', value: 'Déchets plastiques_1235' },
              { label: 'Pollution chimique', value: 'Pollution chimique_151' }
            ],
            label: 'Sous-groupe 1',
            value: 'Sous-groupe 1'
          }
        ],
        label: 'Pollution marine',
        value: 'pollution_marine'
      }
    ]
    const selectedValues = [
      "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors_1511"
    ]

    const result = getTreeOptionsBySelectedValues(selectedValues, numberOptions, true)

    expect(result).toEqual([
      {
        children: [
          {
            children: [
              {
                label: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors",
                value: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors"
              }
            ],
            label: 'Sous-groupe 1',
            value: 'Sous-groupe 1'
          }
        ],
        label: 'Changement climatique et océan',
        value: 'changement_climatique_ocean'
      }
    ])
  })

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

  it('should return leaf values of three levels options', () => {
    const selectedValues = ['27718_1585249700']

    const result = getTreeOptionsBySelectedValues(selectedValues, FISHING_REGULATIONS_UNIQUE(), true)

    expect(result).toEqual([
      {
        children: [
          {
            children: [
              {
                label:
                  "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné",
                value: 27718
              }
            ],
            label: 'Autorisation Débarquement',
            value: 'autorisation_debarquement'
          }
        ],
        label: 'Mesures techniques et de conservation',
        value: 'mesures_techniques_conservation'
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
    const treeValue: TreeOption[] = [
      {
        children: [
          {
            children: [
              {
                label:
                  "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné",
                value: '27718'
              }
            ],
            label: 'Autorisation Débarquement',
            value: 'autorisation_debarquement'
          }
        ],
        label: 'Mesures techniques et de conservation',
        value: 'mesures_techniques_conservation'
      }
    ]

    const result = toRsuiteValue(treeValue, FISHING_REGULATIONS_UNIQUE())

    expect(result).toEqual(['27718_1585249700'])
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

    const result = toRsuiteValue(tree, undefined, 'subItems')

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

    const result = toRsuiteValue(tree, [], 'children', 'id')

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

  it('returns orphan child if its parent is not fully selected When value is string', () => {
    const selected = [
      { label: 'Child 3', value: 'Child 3_456789' } // child4 is missing
    ]
    const allOptionsWithString: TreeOption[] = [
      {
        children: [
          { label: 'Child 1', value: 'Child 1_123456' },
          { label: 'Child 2', value: 'Child 2_123456' }
        ],
        label: 'Parent 1',
        value: 'Parent 1'
      },
      {
        children: [
          { label: 'Child 3', value: 'Child 3_456789' },
          { label: 'Child 4', value: 'Child 4_456789' }
        ],
        label: 'Parent 2',
        value: 'Parent 2'
      },
      {
        label: 'Orphan Option',
        value: 'Orphan Option'
      }
    ]

    const result = getOptionsToDisplay(allOptionsWithString, selected)
    expect(result).toEqual([{ label: 'Child 3', value: 'Child 3_456789' }])
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

  it('returns options with three level node', () => {
    const fishingOptionsUnique = FISHING_REGULATIONS_UNIQUE()
    const result = getOptionsToDisplay(fishingOptionsUnique, [
      {
        label:
          "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné",
        value: '27718_1585249700'
      },
      {
        label:
          "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné",
        value: '27718_3033183864'
      }
    ])

    // With unique ID support, duplicate values are now allowed (supporting same leaf in multiple parents)
    expect(result).toEqual([
      {
        label:
          "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné",
        value: '27718_1585249700'
      },
      {
        label:
          "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné",
        value: '27718_3033183864'
      }
    ])
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

describe('generateUniqueIds', () => {
  describe('two-level node structure', () => {
    it('should generate unique IDs by concatenating parent and child values', () => {
      const options: TreeOption[] = [
        {
          children: [
            { label: 'Item 1', value: 'item1' },
            { label: 'Item 2', value: 'item2' }
          ],
          label: 'Category 1',
          value: 'cat1'
        },
        {
          children: [{ label: 'Item 3', value: 'item3' }],
          label: 'Category 2',
          value: 'cat2'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result).toEqual([
        {
          children: [
            { label: 'Item 1', value: 'item1_2933931776' },
            { label: 'Item 2', value: 'item2_2933931776' }
          ],
          label: 'Category 1',
          value: 'cat1'
        },
        {
          children: [{ label: 'Item 3', value: 'item3_2950709392' }],
          label: 'Category 2',
          value: 'cat2'
        }
      ])
    })

    it('should preserve labels while updating values', () => {
      const options: TreeOption[] = [
        {
          children: [{ label: 'Original Label', value: 'child' }],
          label: 'Parent',
          value: 'parent'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result[0]?.children?.[0].label).toBe('Original Label')
      expect(result[0]?.children?.[0].value).toBe('child_1323991664')
    })

    it('should handle multiple categories with overlapping child values', () => {
      const options: TreeOption[] = [
        {
          children: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
          ],
          label: 'Fruits',
          value: 'fruits'
        },
        {
          children: [
            { label: 'Apple', value: 'apple' }, // Same value, different category
            { label: 'Carrot', value: 'carrot' }
          ],
          label: 'Vegetables',
          value: 'vegetables'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result[0]?.children?.[0].value).toBe('apple_61751600')
      expect(result[1]?.children?.[0].value).toBe('apple_3899441852')
    })
  })

  describe('three_level node structure', () => {
    it('should generate nested unique IDs across three levels', () => {
      const options: TreeOption[] = [
        {
          children: [
            {
              children: [
                { label: 'Level 3A', value: 'l3a' },
                { label: 'Level 3B', value: 'l3b' }
              ],
              label: 'Level 2A',
              value: 'l2a'
            },
            {
              children: [{ label: 'Level 3C', value: 'l3c' }],
              label: 'Level 2B',
              value: 'l2b'
            }
          ],
          label: 'Level 1',
          value: 'l1'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result).toEqual([
        {
          children: [
            {
              children: [
                { label: 'Level 3A', value: 'l3a_1422926260' },
                { label: 'Level 3B', value: 'l3b_1422926260' }
              ],
              label: 'Level 2A',
              value: 'l2a_973861232'
            },
            {
              children: [{ label: 'Level 3C', value: 'l3c_1439703878' }],
              label: 'Level 2B',
              value: 'l2b_973861232'
            }
          ],
          label: 'Level 1',
          value: 'l1'
        }
      ])
    })

    it('should handle multiple three_level branches independently', () => {
      const options: TreeOption[] = [
        {
          children: [
            {
              children: [{ label: 'Item A1', value: 'itemA1' }],
              label: 'Sub A1',
              value: 'subA1'
            }
          ],
          label: 'Branch A',
          value: 'branchA'
        },
        {
          children: [
            {
              children: [{ label: 'Item B1', value: 'itemB1' }],
              label: 'Sub B1',
              value: 'subB1'
            }
          ],
          label: 'Branch B',
          value: 'branchB'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result[0]?.children?.[0].children?.[0].value).toBe('itemA1_1191707679')
      expect(result[1]?.children?.[0].children?.[0].value).toBe('itemB1_3456833339')
    })

    it('should handle mixed two and three level structures in the same tree', () => {
      const options: TreeOption[] = [
        {
          children: [{ label: 'Child', value: 'child' }],
          label: 'TwoLevel',
          value: 'two'
        },
        {
          children: [
            {
              children: [{ label: 'DeepChild', value: 'deepChild' }],
              label: 'Middle',
              value: 'middle'
            }
          ],
          label: 'ThreeLevel',
          value: 'three'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result[0]?.children?.[0].value).toBe('child_3914105676')
      expect(result[1]?.children?.[0].children?.[0].value).toBe('deepChild_1275583012')
    })
  })

  describe('custom keys', () => {
    it('should work with custom childrenKey', () => {
      const options: any[] = [
        {
          label: 'Parent',
          subItems: [{ label: 'Child', value: 'child' }],
          value: 'parent'
        }
      ]

      const result = generateUniqueIds(options, 'subItems')

      expect(result[0]?.subItems?.[0].value).toBe('child_1323991664')
    })

    it('should work with custom valueKey and labelKey', () => {
      const options: any[] = [
        {
          children: [{ id: 'child_id', name: 'Child' }],
          id: 'parent_id',
          name: 'Parent'
        }
      ]

      const result = generateUniqueIds(options, 'children', 'id', 'name')

      expect(result[0]?.children?.[0].id).toBe('child_id_1676928284')
    })
  })

  describe('edge cases', () => {
    it('should handle empty children array', () => {
      const options: TreeOption[] = [
        {
          children: [],
          label: 'Parent',
          value: 'parent'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result[0]?.children).toEqual([])
    })

    it('should handle nodes without children', () => {
      const options: TreeOption[] = [{ label: 'Leaf', value: 'leaf' }]

      const result = generateUniqueIds(options)

      expect(result[0]?.value).toBe('leaf')
      expect(result[0]?.children).toBeUndefined()
    })

    it('should preserve additional properties on nodes', () => {
      const options: any[] = [
        {
          children: [{ extra: 'info', label: 'Child', value: 'child' }],
          custom: 'data',
          disabled: true,
          label: 'Parent',
          value: 'parent'
        }
      ]

      const result = generateUniqueIds(options)

      expect(result[0]?.disabled).toBe(true)
      expect(result[0]?.custom).toBe('data')
      expect(result[0]?.children?.[0].extra).toBe('info')
    })
  })
})

describe('flattenAllDescendants', () => {
  it('should return empty array for nodes without children', () => {
    const nodes: TreeOption[] = [
      { label: 'Leaf 1', value: 'leaf1' },
      { label: 'Leaf 2', value: 'leaf2' }
    ]
    const result = flattenAllDescendants(nodes)
    expect(result).toEqual([])
  })

  it('should flatten 2-level tree', () => {
    const nodes: TreeOption[] = [
      {
        children: [
          { label: 'Child 1', value: 'child1' },
          { label: 'Child 2', value: 'child2' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      }
    ]

    const result = flattenAllDescendants(nodes)

    expect(result).toEqual([
      { label: 'Child 1', value: 'child1' },
      { label: 'Child 2', value: 'child2' }
    ])
  })

  it('should flatten 3-level tree with all descendants', () => {
    const nodes: TreeOption[] = [
      {
        children: [
          {
            children: [
              { label: 'Grandchild 1', value: 'gc1' },
              { label: 'Grandchild 2', value: 'gc2' }
            ],
            label: 'Child 1',
            value: 'child1'
          }
        ],
        label: 'Parent',
        value: 'parent'
      }
    ]

    const result = flattenAllDescendants(nodes)

    expect(result).toEqual([
      {
        children: [
          { label: 'Grandchild 1', value: 'gc1' },
          { label: 'Grandchild 2', value: 'gc2' }
        ],
        label: 'Child 1',
        value: 'child1'
      },
      { label: 'Grandchild 1', value: 'gc1' },
      { label: 'Grandchild 2', value: 'gc2' }
    ])
  })
})

describe('mergeResultsByParent', () => {
  it('should merge items with the same parent value', () => {
    const items: TreeOption[] = [
      {
        children: [{ label: 'Child A', value: 'childA' }],
        label: 'Parent 1',
        value: 'parent1'
      },
      {
        children: [{ label: 'Child B', value: 'childB' }],
        label: 'Parent 1',
        value: 'parent1'
      }
    ]

    const result = mergeResultsByParent(items)

    expect(result).toEqual([
      {
        children: [
          { label: 'Child A', value: 'childA' },
          { label: 'Child B', value: 'childB' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      }
    ])
  })

  it('should not duplicate children with the same value', () => {
    const items: TreeOption[] = [
      {
        children: [
          { label: 'Child A', value: 'childA' },
          { label: 'Child B', value: 'childB' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      },
      {
        children: [
          { label: 'Child A', value: 'childA' },
          { label: 'Child C', value: 'childC' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      }
    ]

    const result = mergeResultsByParent(items)

    expect(result).toEqual([
      {
        children: [
          { label: 'Child A', value: 'childA' },
          { label: 'Child B', value: 'childB' },
          { label: 'Child C', value: 'childC' }
        ],
        label: 'Parent 1',
        value: 'parent1'
      }
    ])
  })

  it('should handle 3-level tree structure', () => {
    const items: TreeOption[] = [
      {
        children: [
          {
            children: [
              { label: 'Leaf 1A', value: 'leaf1A' },
              { label: 'Leaf 1B', value: 'leaf1B' }
            ],
            label: 'Middle 1',
            value: 'middle1'
          }
        ],
        label: 'Root',
        value: 'root'
      },
      {
        children: [
          {
            children: [{ label: 'Leaf 2A', value: 'leaf2A' }],
            label: 'Middle 1',
            value: 'middle1'
          }
        ],
        label: 'Root',
        value: 'root'
      },
      {
        children: [
          {
            children: [{ label: 'Leaf 3A', value: 'leaf3A' }],
            label: 'Middle 2',
            value: 'middle2'
          }
        ],
        label: 'Root',
        value: 'root'
      }
    ]

    const result = mergeResultsByParent(items)

    expect(result).toEqual([
      {
        children: [
          {
            children: [
              { label: 'Leaf 1A', value: 'leaf1A' },
              { label: 'Leaf 1B', value: 'leaf1B' },
              { label: 'Leaf 2A', value: 'leaf2A' }
            ],
            label: 'Middle 1',
            value: 'middle1'
          },
          {
            children: [{ label: 'Leaf 3A', value: 'leaf3A' }],
            label: 'Middle 2',
            value: 'middle2'
          }
        ],
        label: 'Root',
        value: 'root'
      }
    ])
  })

  it('should handle items without children', () => {
    const items: TreeOption[] = [
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' }
    ]

    const result = mergeResultsByParent(items)

    expect(result).toEqual([
      { label: 'Item 1', value: 'item1' },
      { label: 'Item 2', value: 'item2' }
    ])
  })

  it('should handle empty array', () => {
    const items: TreeOption[] = []
    const result = mergeResultsByParent(items)
    expect(result).toEqual([])
  })

  it('should work with custom keys', () => {
    const items: any[] = [
      {
        customLabel: 'Parent 1',
        customValue: 'parent1',
        subItems: [{ customLabel: 'Child A', customValue: 'childA' }]
      },
      {
        customLabel: 'Parent 1',
        customValue: 'parent1',
        subItems: [{ customLabel: 'Child B', customValue: 'childB' }]
      }
    ]

    const result = mergeResultsByParent(items, 'subItems', 'customValue', 'customLabel')

    expect(result).toEqual([
      {
        customLabel: 'Parent 1',
        customValue: 'parent1',
        subItems: [
          { customLabel: 'Child A', customValue: 'childA' },
          { customLabel: 'Child B', customValue: 'childB' }
        ]
      }
    ])
  })

  it('should skip items with empty or undefined value', () => {
    const items: TreeOption[] = [
      {
        children: [{ label: 'Child A', value: 'childA' }],
        label: 'Parent 1',
        value: ''
      },
      {
        children: [{ label: 'Child B', value: 'childB' }],
        label: 'Parent 2',
        value: 'parent2'
      }
    ]

    const result = mergeResultsByParent(items)

    expect(result).toEqual([
      {
        children: [{ label: 'Child B', value: 'childB' }],
        label: 'Parent 2',
        value: 'parent2'
      }
    ])
  })
})
