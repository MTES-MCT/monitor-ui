import { isEmpty } from 'ramda'
import { useCallback, useMemo } from 'react'
import CoordinateInput from 'react-coordinate-input'
import styled from 'styled-components'

import type { CoordinatesFormat } from '../../constants'
import type { Coordinates } from '../../types/definitions'

type DMSCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  coordinatesFormat: CoordinatesFormat
  disabled: boolean
  name: string
  onChange: (nextCoordinates: Coordinates | undefined, coordinates: Coordinates | undefined) => void
  readOnly: boolean
}
export function DMSCoordinatesInput({
  coordinates,
  coordinatesFormat,
  disabled,
  name,
  onChange,
  readOnly
}: DMSCoordinatesInputProps) {
  /** Convert the coordinates to the [latitude, longitude] string format */
  const defaultValue = useMemo(() => {
    if (!coordinates?.length || !coordinatesFormat) {
      return ''
    }

    return coordinates?.join(', ') || ''
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
        ddPrecision={6}
        disabled={disabled}
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
