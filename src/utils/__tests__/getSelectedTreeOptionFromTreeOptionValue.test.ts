import { describe, expect, it } from '@jest/globals'

// Assuming these mocks are structured similarly to the ones used previously,
// adjusted for tree options
import { LOREM_IPSUM } from '../../../__mocks__/fake_text'
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
    const selectedOptionValue = 4

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue)

    expect(result).toEqual({ label: LOREM_IPSUM, value: 4 })
  })

  it('should return the correct tree option for object values', () => {
    const allOptions = FAKE_OBJECT_TREE_OPTIONS
    const selectedOptionValue = { id: 4, name: 'Chatty Option Name' }
    const optionValueKey = 'id'

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue, optionValueKey)

    expect(result).toEqual({ label: LOREM_IPSUM, value: { id: 4, name: 'Chatty Option Name' } })
  })

  it('should return the correct tree option for string values', () => {
    const allOptions = FAKE_STRING_TREE_OPTIONS
    const selectedOptionValue = 'CHATTY_OPTION'

    const result = getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue)

    expect(result).toEqual({ label: LOREM_IPSUM, value: 'CHATTY_OPTION' })
  })

  it('should throw an error with object option when <selectedOptionValue> does NOT exist', () => {
    const allOptions = FAKE_OBJECT_TREE_OPTIONS
    const selectedOptionValue = { id: 4, name: 'Chatty Option Name' }
    const optionValueKey = 'non-existent'

    const call = () => getSelectedTreeOptionFromTreeOptionValue(allOptions, selectedOptionValue, optionValueKey as any)

    expect(call).toThrow()
  })
})
