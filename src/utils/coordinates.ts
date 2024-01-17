import { transform } from 'ol/proj'

import { isNumeric } from './isNumeric'
import { CoordinatesFormat, WSG84_PROJECTION } from '../constants'

enum CoordinateLatLon {
  LATITUDE = 'LATITUDE',
  LONGITUDE = 'LONGITUDE'
}

/**
 * Get coordinates in the specified format
 * @param {number[]} coordinates - Coordinates ([longitude, latitude]) in decimal format.
 * @param {string} projection - The project of the entered coordinates.
 * @param {string} coordinatesFormat - The wanted format of the returned coordinates (DMS, DMD or DD)
 * @param {boolean} isForPrint - If it's for print or not. Default to true
 * @returns {string[]} coordinates - The [latitude, longitude] coordinates
 */
export const getCoordinates = (coordinates, projection, coordinatesFormat, isForPrint = true) => {
  if (!coordinates) {
    return ['', '']
  }
  const transformedCoordinates = transform(coordinates, projection, WSG84_PROJECTION)

  switch (coordinatesFormat) {
    case CoordinatesFormat.DEGREES_MINUTES_SECONDS:
      return getDMSCoordinates(transformedCoordinates)
    case CoordinatesFormat.DEGREES_MINUTES_DECIMALS:
      return getDMDCoordinates(transformedCoordinates)
    case CoordinatesFormat.DECIMAL_DEGREES:
      return getDDCoordinates(transformedCoordinates, isForPrint)
    default:
      return ['', '']
  }
}

/**
 * Get coordinates in DD format
 * @param {number[]} transformedCoordinates - Coordinates ([longitude, latitude]) in DD format.
 * @param {boolean} isForPrint - If it's for print or not
 * @returns {string[]} coordinates - The [latitude, longitude] coordinates in DD format
 */
function getDDCoordinates(transformedCoordinates: number[], isForPrint: boolean): string[] {
  if (
    !Array.isArray(transformedCoordinates) ||
    transformedCoordinates.length !== 2 ||
    !transformedCoordinates[0] ||
    !transformedCoordinates[1]
  ) {
    return []
  }

  const isNegative = Math.sign(transformedCoordinates[0]) === -1
  const [longitudeInteger, longitudeDecimals] = transformedCoordinates[0].toString().split('.')
  const precision = isForPrint ? 4 : 6

  if (!isNumeric(longitudeInteger)) {
    return []
  }
  let longitude = longitudeInteger.toString().trim().replace(/-/g, '')
  const decimals = longitudeDecimals?.substring(0, precision) ?? '000000'
  longitude = `${isNegative ? '-' : ''}${getPaddedDegrees(longitude, CoordinateLatLon.LONGITUDE)}.${decimals}`

  return [`${transformedCoordinates[1].toFixed(precision)}°`, `${longitude}°`]
}

/**
 * Get coordinates in DMD format
 * @param transformedCoordinates - Coordinates ([longitude, latitude]) in decimal format.
 * @returns coordinates - The [latitude, longitude] coordinates in DMD format
 */
function getDMDCoordinates(transformedCoordinates: number[]): string[] {
  const [longitude, latitude] = transformedCoordinates
  if (!isNumeric(latitude) || !isNumeric(longitude)) {
    return []
  }

  const latitudeDMD = getDMDFromDecimal(latitude, CoordinateLatLon.LATITUDE)
  const longitudeDMD = getDMDFromDecimal(longitude, CoordinateLatLon.LONGITUDE)

  return [latitudeDMD, longitudeDMD]
}

/**
 * Get coordinates in DMS format
 * @param transformedCoordinates - Coordinates ([longitude, latitude]) in decimal format.
 * @returns coordinates - The [latitude, longitude] coordinates in DMS format
 */
function getDMSCoordinates(transformedCoordinates: number[]): string[] {
  const [longitude, latitude] = transformedCoordinates
  if (!isNumeric(latitude) || !isNumeric(longitude)) {
    return []
  }

  const latitudeDMS = getDMSFromDecimal(latitude, CoordinateLatLon.LATITUDE)
  const longitudeDMS = getDMSFromDecimal(longitude, CoordinateLatLon.LONGITUDE)

  return [latitudeDMS, longitudeDMS]
}

function getDMDFromDecimal(dd: number, latitudeOrLongitude: CoordinateLatLon): string {
  const hemisphere = getHemisphere(dd, latitudeOrLongitude)

  // Get the decimal degrees as an absolute value
  const absoluteDecimalDegrees = Math.abs(dd)
  const degrees = truncate(absoluteDecimalDegrees)
  const [minutesInteger, minuteDecimals] = getMinutes(absoluteDecimalDegrees, degrees)

  const formattedDegrees = getPaddedDegrees(degrees, latitudeOrLongitude)
  const formattedMinutes = minutesInteger.padStart(2, '0')
  const formattedDecimal = minuteDecimals.padStart(3, '0').substring(0, 3)

  return `${formattedDegrees}° ${formattedMinutes}.${formattedDecimal}′ ${hemisphere}`
}

function getDMSFromDecimal(dd: number, latitudeOrLongitude: CoordinateLatLon) {
  const hemisphere = getHemisphere(dd, latitudeOrLongitude)

  // Get the decimal degrees as an absolute value
  const absoluteDecimalDegrees = Math.abs(dd)
  const degrees = truncate(absoluteDecimalDegrees)
  const [minutesInteger, minutesDecimal] = getMinutes(absoluteDecimalDegrees, degrees)

  // Get the seconds by multiplying the decimal part by 60
  const seconds = (Number(minutesDecimal) * 1e-3 * 60).toFixed(0)

  const formattedDegrees = getPaddedDegrees(degrees, latitudeOrLongitude)
  const formattedMinutes = minutesInteger.padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  return `${formattedDegrees}° ${formattedMinutes}′ ${formattedSeconds}″${hemisphere ? ` ${hemisphere}` : ''}`
}

/**
 * Get the minutes
 * @return - the minutes as an array of [minutesInteger, minuteDecimals]
 */
const getMinutes = (absoluteDecimalDegrees: number, degrees: number): [string, string] => {
  // Get the minutes by multiplying the decimal part by 60
  let minutes = Number((absoluteDecimalDegrees - degrees) * 60).toFixed(3)
  if (minutes.split('.').length < 1) {
    minutes += '.000'
  }

  const [minutesInteger, minuteDecimals] = minutes.split('.')
  if (!minutesInteger || !minuteDecimals) {
    throw new Error('`minutesInteger` or `minuteDecimals` are undefined.')
  }

  return [minutesInteger, minuteDecimals]
}

const getHemisphere = (dd: number, latitudeOrLongitude: CoordinateLatLon) => {
  if (dd === 0) {
    return ''
  }

  switch (latitudeOrLongitude) {
    case CoordinateLatLon.LATITUDE: {
      return dd < 0 ? 'S' : 'N'
    }
    case CoordinateLatLon.LONGITUDE: {
      return dd < 0 ? 'W' : 'E'
    }
    default:
      return ''
  }
}

const getPaddedDegrees = (degrees: number | string, latitudeOrLongitude: CoordinateLatLon): string => {
  switch (latitudeOrLongitude) {
    case CoordinateLatLon.LATITUDE: {
      return degrees.toString().padStart(2, '0')
    }
    case CoordinateLatLon.LONGITUDE: {
      return degrees.toString().padStart(3, '0')
    }
    default:
      return ''
  }
}

/**
 * If n > 0
 * - Get the largest integer less than or equal to n
 * - Else, rounds n to the next largest integer.
 * @param n - number
 */
function truncate(n: number): number {
  return n > 0 ? Math.floor(n) : Math.ceil(n)
}

/**
 * Check if coordinates are the same or roughly the same (to the 0.000001 decimal degree - to avoid infinite rounding loop)
 * @param nextCoordinates - Next coordinates ([longitude, latitude]) in decimal format.
 * @param coordinates - Coordinates ([longitude, latitude]) in decimal format.
 */
export const coordinatesAreDistinct = (nextCoordinates: number[], coordinates: number[]): boolean => {
  const roundingDifference = 0.000002
  const [nextLongitude, nextLatitude] = nextCoordinates
  const [longitude, latitude] = coordinates

  if (!isNumeric(nextLongitude) || !isNumeric(nextLatitude) || !isNumeric(longitude) || !isNumeric(latitude)) {
    return false
  }

  return (
    (longitude !== nextLongitude || latitude !== nextLatitude) &&
    (Math.abs(nextLongitude - longitude) > roundingDifference || Math.abs(nextLatitude - latitude) > roundingDifference)
  )
}
