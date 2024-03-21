import { describe, expect, it } from '@jest/globals'

import {
  FAKE_BOOLEAN_OPTIONS,
  FAKE_NUMBER_OPTIONS,
  FAKE_OBJECT_OPTIONS,
  FAKE_STRING_OPTIONS
} from '../../../__mocks__/fake_options'
import { getSelectedOptionFromOptionValue } from '../getSelectedOptionFromOptionValue'

describe('utils/getSelectedOptionFromOptionValue()', () => {
  it('should return undefined for undefined selectedOptionValue', () => {
    const allOptions = FAKE_STRING_OPTIONS
    const selectedOptionValue = undefined

    const result = getSelectedOptionFromOptionValue(allOptions, selectedOptionValue)

    expect(result).toBeUndefined()
  })

  it('should return the correct option for boolean options', () => {
    const allOptions = FAKE_BOOLEAN_OPTIONS
    const selectedOptionValue = FAKE_BOOLEAN_OPTIONS[1]!.value

    const result = getSelectedOptionFromOptionValue(allOptions, selectedOptionValue)

    expect(result).toBe(FAKE_BOOLEAN_OPTIONS[1]!)
  })

  it('should return the correct option for number options', () => {
    const allOptions = FAKE_NUMBER_OPTIONS
    const selectedOptionValue = FAKE_NUMBER_OPTIONS[1]!.value

    const result = getSelectedOptionFromOptionValue(allOptions, selectedOptionValue)

    expect(result).toBe(FAKE_NUMBER_OPTIONS[1]!)
  })

  it('should return the correct option for a object options', () => {
    const allOptions = FAKE_OBJECT_OPTIONS
    const selectedOptionValue = FAKE_OBJECT_OPTIONS[1]!.value
    const optionValueKey = 'id'

    const result = getSelectedOptionFromOptionValue(allOptions, selectedOptionValue, optionValueKey)

    expect(result).toBe(FAKE_OBJECT_OPTIONS[1]!)
  })

  it('should return the correct option for string options', () => {
    const allOptions = FAKE_STRING_OPTIONS
    const selectedOptionValue = FAKE_STRING_OPTIONS[1]!.value

    const result = getSelectedOptionFromOptionValue(allOptions, selectedOptionValue)

    expect(result).toBe(FAKE_STRING_OPTIONS[1]!)
  })

  it('should throw an error with object option when <selectedOptionValue> does NOT exist', () => {
    const allOptions = FAKE_OBJECT_OPTIONS
    const selectedOptionValue = FAKE_OBJECT_OPTIONS[1]!.value
    const optionValueKey = 'non-existent'

    const call = () => getSelectedOptionFromOptionValue(allOptions, selectedOptionValue, optionValueKey as any)

    expect(call).toThrow()
  })
})
