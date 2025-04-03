import { describe, expect, it } from '@jest/globals'

import { computeDisabledValues, fromRsuiteValue, getTreeOptionsBySelectedValues, toRsuiteValue } from '../utils'

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

    expect(result).toEqual([
      { children: [], label: 'Éducation et sensibilisation', value: 'education_sensibilisation' }
    ])
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

  it('should return undefined when input is undefined', () => {
    expect(toRsuiteValue(undefined)).toBeUndefined()
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
