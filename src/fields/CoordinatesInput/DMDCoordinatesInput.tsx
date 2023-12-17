import { useEffect, useState } from 'react'
import { dmsToDecimal } from 'react-coordinate-input'
import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

import { CoordinatesFormat, WSG84_PROJECTION } from '../../constants'
import { THEME } from '../../theme'
import { getCoordinates } from '../../utils/coordinates'
import { isNumeric } from '../../utils/isNumeric'

import type { Coordinates } from '../../types'

// TODO Remove that once the fix is added and released.
// Open issue: https://github.com/uNmAnNeR/imaskjs/issues/761
const UntypedIMaskInput: any = IMaskInput

type DMDCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  coordinatesFormat: CoordinatesFormat
  disabled: boolean | undefined
  isLight: boolean | undefined
  onChange: (nextCoordinates: Coordinates, coordinates: Coordinates | undefined) => void
}
// TODO This field should return undefined when cleared (i.e.: Select all & Backspace/Delete)
export function DMDCoordinatesInput({
  coordinates,
  coordinatesFormat,
  disabled = false,
  isLight,
  onChange
}: DMDCoordinatesInputProps) {
  const [error, setError] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    if (coordinates?.length && coordinatesFormat) {
      const nextValue = getCoordinates(
        [coordinates[1], coordinates[0]],
        WSG84_PROJECTION,
        CoordinatesFormat.DEGREES_MINUTES_DECIMALS
      )
        .map(coordinate => coordinate.replace(/[°′. ]/g, ''))
        .join('')

      setValue(nextValue)
    } else {
      setValue('')
    }
  }, [coordinates, coordinatesFormat])

  function completeCoordinates(mask) {
    setError('')

    // eslint-disable-next-line no-underscore-dangle
    const latitude = mask._unmaskedValue.substring(0, 7)
    // eslint-disable-next-line no-underscore-dangle
    const longitude = mask._unmaskedValue.substring(7, mask._unmaskedValue.length)
    const NS = latitude[latitude.length - 1].toUpperCase()
    if (!['N', 'S'].includes(NS)) {
      setError('La latitude doit être N ou S')

      return
    }
    const latitudeDegrees = parseInt(latitude.substring(0, 2), 10)
    if (latitudeDegrees < 0 || latitudeDegrees > 90) {
      setError('La latitude doit être comprise entre 0 et 90°')

      return
    }
    const latitudeMinutes = parseInt(latitude.substring(2, 4), 10)
    const latitudeSeconds = parseInt(latitude.substring(4, 6), 10)

    const EW = longitude[longitude.length - 1].toUpperCase()
    if (!['E', 'W'].includes(EW)) {
      setError('La longitude doit être E ou W')

      return
    }
    const longitudeDegrees = parseInt(longitude.substring(0, 3), 10)
    if (longitudeDegrees < 0 || longitudeDegrees > 180) {
      setError('La longitude doit être comprise entre 0 et 180°')

      return
    }
    const longitudeMinutes = parseInt(longitude.substring(3, 5), 10)
    const longitudeSeconds = parseInt(longitude.substring(5, 7), 10)

    const dLatitude = dmsToDecimal(latitudeDegrees, latitudeMinutes + 10 ** -2 * latitudeSeconds, 0, NS, 6)
    const dLongitude = dmsToDecimal(longitudeDegrees, longitudeMinutes + 10 ** -2 * longitudeSeconds, 0, EW, 6)

    if (isNumeric(dLatitude) && isNumeric(dLongitude)) {
      onChange([dLatitude as number, dLongitude as number], coordinates)
    } else {
      setError('Format lat/long invalide')
    }
  }

  return (
    <Box>
      <UntypedIMaskInput
        data-cy="dmd-coordinates-input"
        disabled={disabled}
        lazy={false}
        mask="00° 00.00′ a 000° 00.00′ a"
        // @ts-ignore
        onAccept={(_, mask) => setValue(mask.value)}
        onComplete={(_, mask) => completeCoordinates(mask)}
        placeholder="__° __.___′ _ ___° __.___′"
        radix="."
        style={{
          backgroundColor: isLight ? THEME.color.white : THEME.color.gainsboro,
          border: error ? '1px solid red' : undefined
        }}
        // TODO Use `defaultValue` here.
        value={value}
      />
      <CoordinatesType>(DMD)</CoordinatesType>
      <Error>{error}</Error>
    </Box>
  )
}

const CoordinatesType = styled.span`
  margin-left: 7px;
  color: ${p => p.theme.color.slateGray};
`

const Error = styled.span`
  color: ${p => p.theme.color.maximumRed};
  display: inline-block;
`

const Box = styled.div`
  font-size: 13px;
  text-align: left;
`
