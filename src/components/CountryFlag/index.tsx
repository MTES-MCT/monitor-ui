import styled from 'styled-components'

import { FLAG_SOURCES } from './flagSources'
import { COUNTRIES } from '../../entities/Country'

import type { Country } from '../../entities/Country'
import type { ImgHTMLAttributes } from 'react'

export type CountryFlagProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** ISO 3166-1 country code, either alpha-2 (e.g. `FR`) or alpha-3 (e.g. `FRA`). Case-insensitive. */
  code: string
  /**
   * Height in pixels (the width follows the flag's aspect ratio). Default: `16`.
   *
   * Flags are rendered to 48px-high images: they stay sharp up to 24px on high-density screens.
   */
  size?: number | undefined
}

/**
 * Resolves an alpha-2 or alpha-3 ISO 3166-1 code to its country.
 *
 * The alpha-2 and alpha-3 sets never collide (2 vs 3 characters), so matching
 * either field is unambiguous.
 */
const findCountry = (code: string): Country | undefined => {
  const normalizedCode = code.trim().toUpperCase()

  return COUNTRIES.find(country => country.iso3 === normalizedCode || country.iso2 === normalizedCode)
}

/**
 * Renders the country flag matching an ISO 3166-1 code (alpha-2 or alpha-3).
 *
 * The image's `alt` text defaults to the country's French name. Renders nothing for an unknown code.
 *
 * @example
 * <CountryFlag code="FRA" size={16} />
 * <CountryFlag code="FR" size={16} />
 */
export function CountryFlag({ alt, code, size, ...nativeProps }: CountryFlagProps) {
  const country = findCountry(code)
  const source = country ? FLAG_SOURCES[country.iso3] : undefined
  if (!country || !source) {
    // eslint-disable-next-line no-null/no-null
    return null
  }

  return <Image $size={size} alt={alt ?? country.nameFr} src={source} {...nativeProps} />
}

// Flags are rectangular with varying ratios: set the height and let the width follow, so they are never squashed.
const Image = styled.img<{
  $size: number | undefined
}>`
  display: inline-block;
  height: ${p => p.$size ?? 16}px;
  width: auto;
`
