import { describe, expect, it } from '@jest/globals'

import { getSelectedOptionValuesFromSelectedRsuiteDataItemValues } from '../getSelectedOptionValuesFromSelectedRsuiteDataItemValues'

describe('getSelectedOptionValuesFromSelectedRsuiteDataItemValues', () => {
  it('returns the correct option values for given Rsuite data item values', () => {
    const allRsuiteData = [
      { label: 'Option 1', optionValue: 'value1', value: '0' },
      { label: 'Option 2', optionValue: 'value2', value: '1' },
      { label: 'Option 3', optionValue: 'value3', value: '2' }
    ]
    const selectedRsuiteValues = ['0', '2']

    const result = getSelectedOptionValuesFromSelectedRsuiteDataItemValues(allRsuiteData, selectedRsuiteValues)

    expect(result).toEqual(['value1', 'value3'])
  })

  it('returns an empty array if no Rsuite data item values match', () => {
    const allRsuiteData = [
      { label: 'Option 1', optionValue: 'value1', value: '0' },
      { label: 'Option 2', optionValue: 'value2', value: '1' }
    ]
    const selectedRsuiteValues = ['3', '4']

    const result = getSelectedOptionValuesFromSelectedRsuiteDataItemValues(allRsuiteData, selectedRsuiteValues)

    expect(result).toEqual([])
  })
})
