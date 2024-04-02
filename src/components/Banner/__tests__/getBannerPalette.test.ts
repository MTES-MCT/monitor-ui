import { describe, expect, test } from '@jest/globals'

import { Level } from '../../../constants'
import { THEME } from '../../../theme'
import { getBannerPalette } from '../utils'

describe('getBannerPalette', () => {
  test('should return a red palette for the Error level', () => {
    expect(getBannerPalette(Level.ERROR)).toStrictEqual({
      backgroundColor: THEME.color.maximumRed15,
      borderColor: THEME.color.maximumRed,
      color: THEME.color.maximumRed
    })
  })
  test('should return a yellow palette for the Warning level', () => {
    expect(getBannerPalette(Level.WARNING)).toStrictEqual({
      backgroundColor: THEME.color.goldenPoppy25,
      borderColor: THEME.color.goldenPoppy,
      color: THEME.color.charcoal
    })
  })
  test('should return a green palette for the success level', () => {
    expect(getBannerPalette(Level.SUCCESS)).toStrictEqual({
      backgroundColor: THEME.color.mediumSeaGreen25,
      borderColor: THEME.color.mediumSeaGreen,
      color: THEME.color.mediumSeaGreen
    })
  })
})
