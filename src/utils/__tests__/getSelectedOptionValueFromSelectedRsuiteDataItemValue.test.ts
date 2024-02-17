import { describe, expect, it } from '@jest/globals'

import { getSelectedOptionValueFromSelectedRsuiteDataItemValue } from '../getSelectedOptionValueFromSelectedRsuiteDataItemValue'

describe('utils/getSelectedOptionValueFromSelectedRsuiteDataItemValue()', () => {
  const FAKE_RSUITE_DATA = [
    {
      label: 'Option 1',
      optionValue: {
        id: 1,
        name: 'Option 1'
      },
      value: '1'
    },
    {
      label: 'Option 2',
      optionValue: {
        id: 2,
        name: 'Option 2'
      },
      value: '2'
    }
  ]

  it('should return undefined for null selectedRsuiteValue', () => {
    const allRsuiteData = FAKE_RSUITE_DATA
    // eslint-disable-next-line no-null/no-null
    const selectedRsuiteValue = null

    const result = getSelectedOptionValueFromSelectedRsuiteDataItemValue(allRsuiteData, selectedRsuiteValue)

    expect(result).toBeUndefined()
  })

  it('should return the correct optionValue for a given selectedRsuiteValue', () => {
    const allRsuiteData = FAKE_RSUITE_DATA
    const selectedRsuiteValue = '2'

    const result = getSelectedOptionValueFromSelectedRsuiteDataItemValue(allRsuiteData, selectedRsuiteValue)

    expect(result).toEqual({
      id: 2,
      name: 'Option 2'
    })
  })

  it('should throw an error if the selectedRsuiteValue does not exist', () => {
    const allRsuiteData = FAKE_RSUITE_DATA
    const selectedRsuiteValue = 'non-existent'

    const call = () => getSelectedOptionValueFromSelectedRsuiteDataItemValue(allRsuiteData, selectedRsuiteValue)

    expect(call).toThrow()
  })
})
