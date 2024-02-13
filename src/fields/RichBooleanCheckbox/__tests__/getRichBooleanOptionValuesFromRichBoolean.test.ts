import { describe, expect, test } from '@jest/globals'

import { RichBoolean } from '../../../constants'
import { getRichBooleanOptionValuesFromRichBoolean } from '../utils'

describe('src/fields/RichBooleanCheckbox/utils/getRichBooleanOptionValuesFromRichBoolean()', () => {
  test('returns [FALSE, TRUE] for BOTH', () => {
    const value: RichBoolean = RichBoolean.BOTH

    const result = getRichBooleanOptionValuesFromRichBoolean(value)

    expect(result).toEqual([RichBoolean.FALSE, RichBoolean.TRUE])
  })

  test('returns [FALSE] for FALSE', () => {
    const value: RichBoolean = RichBoolean.FALSE

    const result = getRichBooleanOptionValuesFromRichBoolean(value)

    expect(result).toEqual([RichBoolean.FALSE])
  })

  test('returns [TRUE] for TRUE', () => {
    const value: RichBoolean = RichBoolean.TRUE

    const result = getRichBooleanOptionValuesFromRichBoolean(value)

    expect(result).toEqual([RichBoolean.TRUE])
  })

  test('returns undefined for undefined', () => {
    const value = undefined

    const result = getRichBooleanOptionValuesFromRichBoolean(value)

    expect(result).toBeUndefined()
  })
})
