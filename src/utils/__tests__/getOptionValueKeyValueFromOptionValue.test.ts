import { describe, expect, it } from '@jest/globals'

import { getOptionValueKeyValueFromOptionValue } from '../getOptionValueKeyValueFromOptionValue'

describe('utils/getOptionValueKeyValueFromOptionValue()', () => {
  it('should return the boolean option value directly without optionValueKey', () => {
    const optionValue = true

    const result = getOptionValueKeyValueFromOptionValue(optionValue)

    expect(result).toBe(true)
  })

  it('should return the number option value directly without optionValueKey', () => {
    const optionValue = 42

    const result = getOptionValueKeyValueFromOptionValue(optionValue)

    expect(result).toBe(42)
  })

  it('should return the string option value directly without optionValueKey', () => {
    const optionValue = 'Test String'

    const result = getOptionValueKeyValueFromOptionValue(optionValue)

    expect(result).toBe('Test String')
  })

  it('should return the specified property value from an object option value with optionValueKey', () => {
    const optionValue = { id: 'uniqueId', label: 'Option Label' }

    const result = getOptionValueKeyValueFromOptionValue(optionValue, 'id')

    expect(result).toBe('uniqueId')
  })

  it('should throw an error for an object option value without optionValueKey', () => {
    const optionValue = { id: 'uniqueId', label: 'Option Label' }

    const call = () => getOptionValueKeyValueFromOptionValue(optionValue)

    expect(call).toThrow()
  })

  it('should throw an error for an object option value with non-existent optionValueKey', () => {
    const optionValue = { id: 'uniqueId', label: 'Option Label' }
    const call = () => getOptionValueKeyValueFromOptionValue(optionValue, 'nonExistentKey' as keyof typeof optionValue)

    expect(call).toThrow()
  })
})
