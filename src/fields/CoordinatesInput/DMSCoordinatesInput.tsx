import { isEmpty } from 'ramda'
import { useCallback, useMemo } from 'react'
import CoordinateInput from 'react-coordinate-input'
import styled from 'styled-components'

import type { CoordinatesFormat } from '../../constants'
import type { Coordinates } from '../../types'

type DMSCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  coordinatesFormat: CoordinatesFormat
  disabled: boolean | undefined
  onChange: (nextCoordinates: Coordinates | undefined, coordinates: Coordinates | undefined) => void
}
export function DMSCoordinatesInput({
  coordinates,
  coordinatesFormat,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  onChange
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
        onChange={(_, { dd }) => update(dd)}
        // TODO Use `defaultValue` here.
        value={defaultValue}
      />
      <CoordinatesType>(DMS)</CoordinatesType>
    </Box>
  )
}

const CoordinatesType = styled.span`
  margin-left: 7px;
  color: ${p => p.theme.color.slateGray};
`

const Box = styled.div`
  font-size: 13px;
  text-align: left;
`
