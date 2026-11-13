import { describe, expect, test } from '@jest/globals'

import { COUNTRIES } from '../../../entities/Country'
import { FLAG_SOURCES } from '../flagSources'

// Flags are displayed at ~16px high and pre-rendered to WebP by `scripts/flags/generateFlags.js`: 1-2 KB is enough.
// Raw SVG flags weighed up to 250 KB each, and every flag ends up in the bundle of `CountryFlag` users.
const MAX_FLAG_SIZE_IN_BYTES = 4 * 1024

const flags = Object.entries(FLAG_SOURCES).map(([code, dataUrl]) => ({ code, dataUrl }))

describe('Flags budget', () => {
  test('should have a flag for every country', () => {
    const countriesWithoutFlag = COUNTRIES.filter(country => !FLAG_SOURCES[country.iso3]).map(country => country.iso3)

    expect(countriesWithoutFlag).toEqual([])
  })

  test('should embed every flag as a WebP image', () => {
    const nonWebpFlags = flags
      .filter(({ dataUrl }) => !dataUrl.startsWith('data:image/webp;base64,'))
      .map(({ code }) => code)

    expect(nonWebpFlags).toEqual([])
  })

  test('should keep every flag small, as they are all bundled', () => {
    const oversizedFlags = flags
      .map(({ code, dataUrl }) => ({ code, size: Buffer.from(dataUrl.split(',')[1] ?? '', 'base64').length }))
      .filter(({ size }) => size > MAX_FLAG_SIZE_IN_BYTES)
      .map(({ code, size }) => `${code} (${Math.round(size / 1024)} KB)`)

    expect(oversizedFlags).toEqual([])
  })
})
