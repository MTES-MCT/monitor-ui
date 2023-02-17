import { useCallback, useMemo } from 'react'
import CoordinateInput from 'react-coordinate-input'
import styled from 'styled-components'

import type { CoordinatesFormat } from './constants'

type DMSCoordinatesInputProps = {
  coordinates: number[]
  coordinatesFormat: CoordinatesFormat
  onChange: (nextCoordinates: number[], coordinates: number[]) => void
}
export function DMSCoordinatesInput({ coordinates, coordinatesFormat, onChange }: DMSCoordinatesInputProps) {
  /** Convert the coordinates to the [latitude, longitude] string format */
  const showedValue = useMemo(() => {
    if (!coordinates?.length || !coordinatesFormat) {
      return ''
    }

    return coordinates?.join(', ') || ''
  }, [coordinates, coordinatesFormat])

  const update = useCallback(
    nextCoordinates => {
      onChange(nextCoordinates, coordinates)
    },
    [coordinates, onChange]
  )

  return (
    <Box>
      <CoordinateInput
        data-cy="dms-coordinates-input"
        ddPrecision={6}
        onChange={(_, { dd }) => update(dd)}
        value={showedValue}
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
