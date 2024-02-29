import { describe, expect, it } from '@jest/globals'

import { getRsuiteDataItemValueFromOptionValue } from '../getRsuiteDataItemValueFromOptionValue'

describe('utils/getRsuiteDataItemValueFromOptionValue()', () => {
  it('should convert a boolean option value without <optionValueKey>', () => {
    const optionValue = true

    const result = getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(result).toBe('true')
  })

  it('should convert a number option value without <optionValueKey>', () => {
    const optionValue = 123

    const result = getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(result).toBe('123')
  })

  it('should convert a string option value without <optionValueKey>', () => {
    const optionValue = 'Test'

    const result = getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(result).toBe('Test')
  })

  it('should convert an object value with <optionValueKey>', () => {
    const optionValue = { id: 1, name: 'Test Name' }

    const result = getRsuiteDataItemValueFromOptionValue(optionValue, 'name')

    expect(result).toBe('Test Name')
  })

  it('should throw an error for an object option value without <optionValueKey>', () => {
    const optionValue = { id: 1, name: 'Test Name' }

    const call = () => getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(call).toThrow()
  })

  it('should throw an error for an object option value with <optionValueKey> when it does NOT exist', () => {
    const optionValue = { id: 1, name: 'Test Name' }

    const call = () => getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(call).toThrow()
  })
})
