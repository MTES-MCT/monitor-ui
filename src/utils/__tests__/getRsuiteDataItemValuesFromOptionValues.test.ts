import { describe, expect, it } from '@jest/globals'

import { getRsuiteDataItemValuesFromOptionValues } from '../getRsuiteDataItemValuesFromOptionValues'

describe('utils/getRsuiteDataItemValuesFromOptionValues()', () => {
  it('should return an empty array for undefined input', () => {
    const optionValues = undefined

    const result = getRsuiteDataItemValuesFromOptionValues(optionValues)

    expect(result).toEqual([])
  })

  it('should correctly convert an array of string values without <optionValueKey>', () => {
    const optionValues = ['Test1', 'Test2']

    const result = getRsuiteDataItemValuesFromOptionValues(optionValues)

    expect(result).toEqual(['Test1', 'Test2'])
  })

  it('should correctly convert an array of number values without <optionValueKey>', () => {
    const optionValues = [1, 2]

    const result = getRsuiteDataItemValuesFromOptionValues(optionValues)

    expect(result).toEqual(['1', '2'])
  })

  it('should correctly convert an array of object values with <optionValueKey>', () => {
    const optionValues = [
      { id: 1, name: 'Test1' },
      { id: 2, name: 'Test2' }
    ]

    const result = getRsuiteDataItemValuesFromOptionValues(optionValues, 'name')

    expect(result).toEqual(['Test1', 'Test2'])
  })

  it('should throw an error for array of object values without <optionValueKey>', () => {
    const optionValues = [{ id: 1, name: 'Test Name' }]

    const call = () => getRsuiteDataItemValuesFromOptionValues(optionValues)

    expect(call).toThrow()
  })

  it('should throw an error for array of object values with an invalid <optionValueKey>', () => {
    const optionValues = [{ id: 1, name: 'Test Name' }]

    const call = () => getRsuiteDataItemValuesFromOptionValues(optionValues, 'invalidKey' as any)

    expect(call).toThrow()
  })
})
