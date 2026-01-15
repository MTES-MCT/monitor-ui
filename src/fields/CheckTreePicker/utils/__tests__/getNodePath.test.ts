import { describe, expect, it } from '@jest/globals'

import { formatNodePath, getFormattedNodePath, getNodePath } from '../getNodePath'

import type { TreeOption } from '../../types'

const MOCK_TREE: TreeOption[] = [
  {
    children: [
      {
        children: [
          {
            label: "7061 – Pêche maritime d'une espèce dans une zone ou sa pêche est interdite",
            value: '7061'
          },
          {
            label: '7062 – Autre restriction',
            value: '7062'
          }
        ],
        label: 'Zone interdite',
        value: 'zone_interdite'
      },
      {
        children: [
          {
            label: "27718 – Débarquement hors d'un port désigné",
            value: '27718'
          }
        ],
        label: 'Autorisation Débarquement',
        value: 'autorisation_debarquement'
      }
    ],
    label: 'Mesures techniques et de conservation',
    value: 'mesures_techniques_conservation'
  },
  {
    children: [
      {
        children: [
          {
            label: '10001 – AIS requirement',
            value: '10001'
          }
        ],
        label: 'AIS',
        value: 'ais'
      }
    ],
    label: 'Obligation déclaratives',
    value: 'obligation_declaratives'
  }
]

describe('CheckTreePicker/utils/getNodePath', () => {
  describe('getNodePath()', () => {
    it('should return empty array when value is not found', () => {
      const result = getNodePath('non_existent', MOCK_TREE)

      expect(result).toEqual([])
    })

    it('should return path to level 1 node', () => {
      const result = getNodePath('mesures_techniques_conservation', MOCK_TREE)

      expect(result).toHaveLength(1)
      expect(result[0]?.value).toBe('mesures_techniques_conservation')
      expect(result[0]?.label).toBe('Mesures techniques et de conservation')
    })

    it('should return path to level 2 node', () => {
      const result = getNodePath('zone_interdite', MOCK_TREE)

      expect(result).toHaveLength(2)
      expect(result[0]?.value).toBe('mesures_techniques_conservation')
      expect(result[1]?.value).toBe('zone_interdite')
    })

    it('should return complete path to level 3 node', () => {
      const result = getNodePath('7061', MOCK_TREE)

      expect(result).toHaveLength(3)
      expect(result[0]?.value).toBe('mesures_techniques_conservation')
      expect(result[1]?.value).toBe('zone_interdite')
      expect(result[2]?.value).toBe('7061')
      expect(result[2]?.label).toBe("7061 – Pêche maritime d'une espèce dans une zone ou sa pêche est interdite")
    })

    it('should return correct path for nodes with same label in different branches', () => {
      const result = getNodePath('10001', MOCK_TREE)

      expect(result).toHaveLength(3)
      expect(result[0]?.value).toBe('obligation_declaratives')
      expect(result[1]?.value).toBe('ais')
      expect(result[2]?.value).toBe('10001')
    })

    it('should support custom childrenKey', () => {
      const customTree: TreeOption[] = [
        {
          label: 'Level 1',
          subThemes: [
            {
              label: 'Level 2',
              subThemes: [{ label: 'Level 3', value: 'l3' }],
              value: 'l2'
            }
          ],
          value: 'l1'
        }
      ]

      const result = getNodePath('l3', customTree, 'subThemes')

      expect(result).toHaveLength(3)
      expect(result[0]?.value).toBe('l1')
      expect(result[1]?.value).toBe('l2')
      expect(result[2]?.value).toBe('l3')
    })

    it('should support custom valueKey', () => {
      const customTree: TreeOption[] = [
        {
          children: [
            {
              children: [{ id: 'l3', label: 'Level 3' }],
              id: 'l2',
              label: 'Level 2'
            }
          ],
          id: 'l1',
          label: 'Level 1'
        }
      ]

      const result = getNodePath('l3', customTree, 'children', 'id')

      expect(result).toHaveLength(3)
      expect(result[2]?.id).toBe('l3')
    })

    it('should find node when searching with number for string value', () => {
      const result = getNodePath(7061 as any, MOCK_TREE)

      expect(result).toHaveLength(3)
      expect(result[0]?.value).toBe('mesures_techniques_conservation')
      expect(result[1]?.value).toBe('zone_interdite')
      expect(result[2]?.value).toBe('7061')
    })

    it('should find node when searching with string for number value', () => {
      const treeWithNumbers: TreeOption[] = [
        {
          children: [
            {
              children: [{ label: 'Item 1', value: 123 }],
              label: 'Category',
              value: 100
            }
          ],
          label: 'Root',
          value: 1
        }
      ]

      const result = getNodePath('123', treeWithNumbers)

      expect(result).toHaveLength(3)
      expect(result[2]?.value).toBe(123)
    })

    it('should find node with hash suffix when searching without suffix', () => {
      const treeWithHashSuffix: TreeOption[] = [
        {
          children: [
            {
              children: [
                {
                  label: 'Item with hash',
                  value: '27718_123' // Value with hash suffix
                }
              ],
              label: 'Category',
              value: 'cat_456'
            }
          ],
          label: 'Root',
          value: 'root_789'
        }
      ]

      // Search without hash suffix
      const result = getNodePath('27718', treeWithHashSuffix)

      expect(result).toHaveLength(3)
      expect(result[2]?.value).toBe('27718_123')
      expect(result[2]?.label).toBe('Item with hash')
    })

    it('should find correct node among duplicates with hash suffixes', () => {
      const treeWithDuplicates: TreeOption[] = [
        {
          children: [
            {
              children: [{ label: 'First occurrence', value: '27718_1' }],
              label: 'Category 1',
              value: 'cat1'
            }
          ],
          label: 'Root 1',
          value: 'root1'
        },
        {
          children: [
            {
              children: [{ label: 'Second occurrence', value: '27718_2' }],
              label: 'Category 2',
              value: 'cat2'
            }
          ],
          label: 'Root 2',
          value: 'root2'
        }
      ]

      // Should find the first occurrence
      const result = getNodePath('27718', treeWithDuplicates)

      expect(result).toHaveLength(3)
      expect(result[0]?.value).toBe('root1')
      expect(result[1]?.value).toBe('cat1')
      expect(result[2]?.value).toBe('27718_1')
      expect(result[2]?.label).toBe('First occurrence')
    })
  })

  describe('formatNodePath()', () => {
    it('should format single node path', () => {
      const path: TreeOption[] = [{ label: 'Root', value: 'root' }]

      const result = formatNodePath(path)

      expect(result).toBe('Root')
    })

    it('should format multi-level path with default delimiter', () => {
      const path: TreeOption[] = [
        { label: 'Level 1', value: 'l1' },
        { label: 'Level 2', value: 'l2' },
        { label: 'Level 3', value: 'l3' }
      ]

      const result = formatNodePath(path)

      expect(result).toBe('Level 1 / Level 2 / Level 3')
    })

    it('should format path with custom delimiter', () => {
      const path: TreeOption[] = [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' }
      ]

      const result = formatNodePath(path, 'label', ' > ')

      expect(result).toBe('A > B > C')
    })

    it('should support custom labelKey', () => {
      const path: TreeOption[] = [
        { name: 'Level 1', value: 'l1' },
        { name: 'Level 2', value: 'l2' }
      ]

      const result = formatNodePath(path, 'name')

      expect(result).toBe('Level 1 / Level 2')
    })

    it('should handle empty path', () => {
      const result = formatNodePath([])

      expect(result).toBe('')
    })
  })

  describe('getFormattedNodePath()', () => {
    it('should return formatted path string for level 3 node', () => {
      const result = getFormattedNodePath('7061', MOCK_TREE)

      expect(result).toBe(
        "Mesures techniques et de conservation / Zone interdite / 7061 – Pêche maritime d'une espèce dans une zone ou sa pêche est interdite"
      )
    })

    it('should return formatted path with custom delimiter', () => {
      const result = getFormattedNodePath('27718', MOCK_TREE, 'children', 'value', 'label', ' > ')

      expect(result).toBe(
        "Mesures techniques et de conservation > Autorisation Débarquement > 27718 – Débarquement hors d'un port désigné"
      )
    })

    it('should return empty string for non-existent value', () => {
      const result = getFormattedNodePath('non_existent', MOCK_TREE)

      expect(result).toBe('')
    })

    it('should return formatted path for level 1 node', () => {
      const result = getFormattedNodePath('obligation_declaratives', MOCK_TREE)

      expect(result).toBe('Obligation déclaratives')
    })

    it('should return formatted path for level 2 node', () => {
      const result = getFormattedNodePath('ais', MOCK_TREE)

      expect(result).toBe('Obligation déclaratives / AIS')
    })

    it('should work with custom subThemes, id, name keys', () => {
      const customData = [
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
                  name: "27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné"
                }
              ]
            }
          ]
        }
      ]

      const result = getFormattedNodePath('27718', customData, 'subThemes', 'id', 'name')

      expect(result).toBe(
        "Mesures techniques et de conservation / Autorisation Débarquement / 27718 – Débarquement de produits de la pêche maritime et de l'aquaculture marine hors d'un port désigné"
      )
    })

    it('should return formatted path when searching with number for string value', () => {
      const result = getFormattedNodePath(27718 as any, MOCK_TREE)

      expect(result).toBe(
        "Mesures techniques et de conservation / Autorisation Débarquement / 27718 – Débarquement hors d'un port désigné"
      )
    })

    it('should return formatted path for node with hash suffix', () => {
      const treeWithHashSuffix: TreeOption[] = [
        {
          children: [
            {
              children: [
                {
                  label: "27718 – Débarquement hors d'un port désigné",
                  value: '27718_123' // Value with hash suffix
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

      // Search without hash suffix
      const result = getFormattedNodePath('27718', treeWithHashSuffix)

      expect(result).toBe(
        "Mesures techniques et de conservation / Autorisation Débarquement / 27718 – Débarquement hors d'un port désigné"
      )
    })
  })
})
