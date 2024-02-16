import { describe, expect, it } from '@jest/globals'

import { getRsuiteDataItemValueFromOptionValue } from '../getRsuiteDataItemValueFromOptionValue'

describe('utils/getRsuiteDataItemValueFromOptionValue()', () => {
  it('should convert string values without <optionValueKey>', () => {
    const optionValue = 'Test'

    const result = getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(result).toBe('Test')
  })

  it('should convert number values without <optionValueKey>', () => {
    const optionValue = 123

    const result = getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(result).toBe('123')
  })

  it('should convert object values with <optionValueKey>', () => {
    const optionValue = { id: 1, name: 'Test Name' }

    const result = getRsuiteDataItemValueFromOptionValue(optionValue, 'name')

    expect(result).toBe('Test Name')
  })

  it('should throw an error for object values without <optionValueKey>', () => {
    const optionValue = { id: 1, name: 'Test Name' }

    const call = () => getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(call).toThrow()
  })

  it('should throw an error for object values with an invalid <optionValueKey>', () => {
    const optionValue = { id: 1, name: 'Test Name' }

    const call = () => getRsuiteDataItemValueFromOptionValue(optionValue)

    expect(call).toThrow()
  })
})
