import { expect, describe, it } from '@jest/globals'

import { isNumeric } from '../isNumeric'

describe('utils/isNumeric()', () => {
  it.each([10, 0xf10b, '10', 0, '0'])('should return true When value is %p', value => {
    // When
    const isNumericResult = isNumeric(value)

    // Then
    expect(isNumericResult).toBeTruthy()
  })

  // eslint-disable-next-line no-null/no-null
  it.each(['Hello', '', undefined, null, () => {}, [80, 85, 75], {}])('should return false When value is %p', value => {
    // When
    const isNumericResult = isNumeric(value)

    // Then
    expect(isNumericResult).toBeFalsy()
  })
})
