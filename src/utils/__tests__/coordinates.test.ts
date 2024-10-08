import { CoordinatesFormat, OPENLAYERS_PROJECTION, WSG84_PROJECTION } from '@constants'
import { describe, expect, it } from '@jest/globals'

import { getCoordinates } from '../coordinates'

describe('utils/getCoordinates()', () => {
  it('should get DMS coordinates for a dummy lon/lat', async () => {
    const coordinates = getCoordinates([-4.276, 46.947], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_SECONDS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('46° 56′ 49″ N')
    expect(coordinates[1]).toEqual('004° 16′ 34″ W')
  })

  it('should get DMS with hemisphere S coordinates for a dummy lon/lat', async () => {
    const coordinates = getCoordinates([4.591, -33.56], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_SECONDS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('33° 33′ 36″ S')
    expect(coordinates[1]).toEqual('004° 35′ 28″ E')
  })

  it('should get DMS coordinates for a 0 longitude', async () => {
    const coordinates = getCoordinates([0, 49.6167], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_SECONDS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('49° 37′ 00″ N')
    expect(coordinates[1]).toEqual('000° 00′ 00″')
  })

  it('should get DD coordinates for an East longitude', async () => {
    const coordinates = getCoordinates(
      [881004.7140361258, 6076231.889001969],
      OPENLAYERS_PROJECTION,
      CoordinatesFormat.DECIMAL_DEGREES
    )

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('47.8156°')
    expect(coordinates[1]).toEqual('007.9142°')
  })

  it('should get DD coordinates for a West longitude', async () => {
    const coordinates = getCoordinates(
      [-881004.7140361258, 6076231.889001969],
      OPENLAYERS_PROJECTION,
      CoordinatesFormat.DECIMAL_DEGREES
    )

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('47.8156°')
    expect(coordinates[1]).toEqual('-007.9142°')
  })

  it('should get DMS with coordinates for another dummy lon/lat', async () => {
    const coordinates = getCoordinates([-17.4144, -2.986], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_SECONDS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('02° 59′ 10″ S')
    expect(coordinates[1]).toEqual('017° 24′ 52″ W')
  })

  it('should get DMD with coordinates for a dummy lon/lat with seconds under 100', async () => {
    const coordinates = getCoordinates(
      [48.883917, -5.563333],
      WSG84_PROJECTION,
      CoordinatesFormat.DEGREES_MINUTES_DECIMALS
    )

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('05° 33.800′ S')
    expect(coordinates[1]).toEqual('048° 53.035′ E')
  })

  it('should get DMD with coordinates for another dummy lon/lat', async () => {
    const coordinates = getCoordinates([-17.4144, -2.986], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_DECIMALS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('02° 59.160′ S')
    expect(coordinates[1]).toEqual('017° 24.864′ W')
  })

  it('should get DMS with coordinates for another² dummy lon/lat', async () => {
    const coordinates = getCoordinates([-5.1756, 47.4658], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_SECONDS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('47° 27′ 57″ N')
    expect(coordinates[1]).toEqual('005° 10′ 32″ W')
  })

  it('should get DMS with coordinates for another³ dummy lon/lat', async () => {
    const coordinates = getCoordinates(
      [-7.433333, 47.183333],
      WSG84_PROJECTION,
      CoordinatesFormat.DEGREES_MINUTES_SECONDS
    )

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('47° 11′ 00″ N')
    expect(coordinates[1]).toEqual('007° 26′ 00″ W')
  })

  it('should get DMD with coordinates for another² dummy lon/lat', async () => {
    const coordinates = getCoordinates([-5.1756, 47.4658], WSG84_PROJECTION, CoordinatesFormat.DEGREES_MINUTES_DECIMALS)

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('47° 27.948′ N')
    expect(coordinates[1]).toEqual('005° 10.536′ W')
  })

  it('should get DMD with coordinates for another³ dummy lon/lat', async () => {
    const coordinates = getCoordinates(
      [-7.433333, 47.183333],
      WSG84_PROJECTION,
      CoordinatesFormat.DEGREES_MINUTES_DECIMALS
    )

    expect(coordinates).not.toBeUndefined()
    expect(coordinates[0]).toEqual('47° 11.000′ N')
    expect(coordinates[1]).toEqual('007° 26.000′ W')
  })
})
