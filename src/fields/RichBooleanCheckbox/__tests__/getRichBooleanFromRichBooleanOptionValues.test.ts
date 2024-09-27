import { RichBoolean } from '@constants'
import { describe, expect, test } from '@jest/globals'

import { getRichBooleanFromRichBooleanOptionValues } from '../utils'

import type { RichBooleanOptionValue } from '../types'

describe('src/fields/RichBooleanCheckbox/utils/getRichBooleanFromRichBooleanOptionValues()', () => {
  test('returns BOTH for [FALSE, TRUE]', () => {
    const optionValues: RichBooleanOptionValue[] = [RichBoolean.FALSE, RichBoolean.TRUE]

    const result = getRichBooleanFromRichBooleanOptionValues(optionValues)

    expect(result).toBe(RichBoolean.BOTH)
  })

  test('returns BOTH for [TRUE, FALSE]', () => {
    const optionValues: RichBooleanOptionValue[] = [RichBoolean.TRUE, RichBoolean.FALSE]

    const result = getRichBooleanFromRichBooleanOptionValues(optionValues)

    expect(result).toBe(RichBoolean.BOTH)
  })

  test('returns FALSE for [FALSE]', () => {
    const optionValues: RichBooleanOptionValue[] = [RichBoolean.FALSE]

    const result = getRichBooleanFromRichBooleanOptionValues(optionValues)

    expect(result).toBe(RichBoolean.FALSE)
  })

  test('returns TRUE for [TRUE]', () => {
    const optionValues: RichBooleanOptionValue[] = [RichBoolean.TRUE]

    const result = getRichBooleanFromRichBooleanOptionValues(optionValues)

    expect(result).toBe(RichBoolean.TRUE)
  })

  test('returns undefined for undefined', () => {
    const optionValues = undefined

    const result = getRichBooleanFromRichBooleanOptionValues(optionValues)

    expect(result).toBeUndefined()
  })

  test('throws for invalid values', () => {
    const wrongOptionValues: RichBooleanOptionValue[] = [RichBoolean.TRUE, RichBoolean.TRUE, RichBoolean.FALSE]

    const call = () => getRichBooleanFromRichBooleanOptionValues(wrongOptionValues)

    expect(call).toThrow()
  })
})
