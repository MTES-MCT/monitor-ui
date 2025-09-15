import { isEmpty } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import CoordinateInput from 'react-coordinate-input'
import styled from 'styled-components'

import type { CoordinatesFormat } from '@constants'
import type { Coordinates } from '@types_/definitions'

const DECIMAL_PRECISION = 6

type DMSCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  coordinatesFormat: CoordinatesFormat
  disabled: boolean
  id: string
  name: string
  onChange: (nextCoordinates: Coordinates | undefined, coordinates: Coordinates | undefined) => void
  readOnly: boolean
}
export function DMSCoordinatesInput({
  coordinates,
  coordinatesFormat,
  disabled,
  id,
  name,
  onChange,
  readOnly
}: DMSCoordinatesInputProps) {
  /** Convert the coordinates to the [latitude, longitude] string format */
  const defaultValue = useMemo(() => {
    if (!coordinates?.length || !coordinatesFormat) {
      return ''
    }

    const roundedCoordinates = [coordinates[0].toFixed(DECIMAL_PRECISION), coordinates[1].toFixed(DECIMAL_PRECISION)]

    return roundedCoordinates.join(', ') || ''
  }, [coordinates, coordinatesFormat])

  const update = useCallback(
    nextCoordinates => {
      const normalizedNextCoordinates = !isEmpty(nextCoordinates) ? nextCoordinates : undefined

      onChange(normalizedNextCoordinates, coordinates)
    },
    [coordinates, onChange]
  )

  return (
    <Box>
      <CoordinateInput
        data-cy="dms-coordinates-input"
        ddPrecision={DECIMAL_PRECISION}
        disabled={disabled}
        id={id}
        name={name}
        onChange={(_, { dd }) => update(dd)}
        readOnly={readOnly}
        // TODO Use `defaultValue` here.
        value={defaultValue}
      />
      <CoordinatesType>(DMS)</CoordinatesType>
    </Box>
  )
}

const CoordinatesType = styled.span`
  color: ${p => p.theme.color.slateGray};
  font-size: 13px !important;
  margin-left: 7px !important;
`

const Box = styled.div`
  text-align: left;
`
