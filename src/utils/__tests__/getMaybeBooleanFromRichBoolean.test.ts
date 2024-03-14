import { describe, expect, it } from '@jest/globals'

import { RichBoolean } from '../../constants'
import { getMaybeBooleanFromRichBoolean } from '../getMaybeBooleanFromRichBoolean'

describe('utils/getMaybeBooleanFromRichBoolean()', () => {
  it('should return `true` for `RichBoolean.TRUE`', () => {
    const result = getMaybeBooleanFromRichBoolean(RichBoolean.TRUE)

    expect(result).toBe(true)
  })

  it('should return `false` for `RichBoolean.FALSE`', () => {
    const result = getMaybeBooleanFromRichBoolean(RichBoolean.FALSE)

    expect(result).toBe(false)
  })

  it('should return `undefined` for `RichBoolean.BOTH`', () => {
    const result = getMaybeBooleanFromRichBoolean(RichBoolean.BOTH)

    expect(result).toBeUndefined()
  })

  it('should return `undefined` for `undefined`', () => {
    const result = getMaybeBooleanFromRichBoolean(undefined)

    expect(result).toBeUndefined()
  })
})
