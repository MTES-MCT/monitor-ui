import { describe, expect, it } from '@jest/globals'

// Assuming these mocks are structured similarly to the ones used previously,
// adjusted for tree options
import {
  FAKE_NUMBER_TREE_OPTIONS,
  FAKE_OBJECT_TREE_OPTIONS,
  FAKE_STRING_TREE_OPTIONS
} from '../../../__mocks__/fake_tree_options'
import { getSelectedTreeOptionFromTreeOptionValue } from '../getSelectedTreeOptionFromTreeOptionValue'

describe('utils/getSelectedTreeOptionFromTreeOptionValue()', () => {
  it('should return undefined for undefined selectedOptionValue', () => {
    const allOptions = FAKE_STRING_TREE_OPTIONS
    const selectedOptionValue = undefined

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue)

    expect(result).toBeUndefined()
  })

  it('should return the correct tree option for number values', () => {
    const allOptions = FAKE_NUMBER_TREE_OPTIONS
    const selectedOptionValue = FAKE_NUMBER_TREE_OPTIONS[1]!.children![1]!.value

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue)

    expect(result).toBe(FAKE_NUMBER_TREE_OPTIONS[1]!.children![1]!)
  })

  it('should return the correct tree option for object values', () => {
    const allOptions = FAKE_OBJECT_TREE_OPTIONS
    const selectedOptionValue = FAKE_OBJECT_TREE_OPTIONS[1]!.children![1]!.value
    const optionValueKey = 'id'

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue, optionValueKey)

    expect(result).toBe(FAKE_OBJECT_TREE_OPTIONS[1]!.children![1]!)
  })

  it('should return the correct tree option for string values', () => {
    const allOptions = FAKE_STRING_TREE_OPTIONS
    const selectedOptionValue = FAKE_STRING_TREE_OPTIONS[1]!.children![1]!.value

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue)

    expect(result).toBe(FAKE_STRING_TREE_OPTIONS[1]!.children![1]!)
  })

  it('should throw an error with object option when <selectedOptionValue> does NOT exist', () => {
    const allOptions = FAKE_OBJECT_TREE_OPTIONS
    const selectedOptionValue = FAKE_OBJECT_TREE_OPTIONS[1]!.children![1]!.value
    const optionValueKey = 'non-existent'

    const call = () => getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue, optionValueKey as any)

    expect(call).toThrow()
  })
})
