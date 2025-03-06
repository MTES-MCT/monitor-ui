import { useEffect, useState, type ChangeEvent } from 'react'
import styled from 'styled-components'
import { useDebouncedCallback } from 'use-debounce'

import { isNumeric } from '../../utils/isNumeric'

import type { Coordinates } from '../../types/definitions'

const DECIMAL_PRECISION = 6

type DDCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  disabled: boolean
  name: string
  onChange: (nextCoordinates: Coordinates | undefined) => void
  readOnly: boolean
}

function isValueTooLong(value: string | undefined) {
  return isNumeric(value) && (value?.split('.')?.[1]?.length ?? 0) > DECIMAL_PRECISION
}

// TODO This field should return undefined when cleared (i.e.: Select all & Backspace/Delete)
export function DDCoordinatesInput({ coordinates, disabled, name, onChange, readOnly }: DDCoordinatesInputProps) {
  const [latitude, setLatitude] = useState<string | undefined>()
  const [longitude, setLongitude] = useState<string | undefined>()
  const [latitudeError, setLatitudeError] = useState<string | undefined>(undefined)
  const [longitudeError, setLongitudeError] = useState<string | undefined>(undefined)

  const debouncedChange = useDebouncedCallback(
    (nextLatitude: string | undefined, nextLongitude: string | undefined) => {
      if (latitudeError ?? longitudeError) {
        setLongitudeError(undefined)
        setLatitudeError(undefined)
      }

      if (!isNumeric(latitude) && !!latitude) {
        setLatitudeError('Champ Latitude incorrect')

        return undefined
      }

      if (!isNumeric(longitude) && !!longitude) {
        setLongitudeError('Champ Longitude incorrect')

        return undefined
      }

      if (!nextLatitude || !nextLongitude) {
        return onChange(undefined)
      }

      return onChange([Number(latitude), Number(longitude)])
    },
    300
  )

  useEffect(() => {
    debouncedChange(latitude ?? String(coordinates?.[0]), longitude ?? String(coordinates?.[1]))

    // we don't want to run this effect on every coordinates changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedChange, latitude, longitude])

  const handleLatitudeChange = (nextValue: ChangeEvent<HTMLInputElement>) => {
    const { value } = nextValue.target
    if (isValueTooLong(value)) {
      return
    }

    setLatitude(value)
  }

  const handleLongitudeChange = (nextValue: ChangeEvent<HTMLInputElement>) => {
    const { value } = nextValue.target
    if (isValueTooLong(value)) {
      return
    }

    setLongitude(value)
  }

  const formattedLatitude = (() => {
    if (latitude) {
      return latitude
    }

    const latitudeValue = coordinates?.[0]

    if (!latitudeValue) {
      return undefined
    }

    if (isValueTooLong(String(coordinates?.[0]))) {
      return Number(coordinates?.[0]).toFixed(DECIMAL_PRECISION)
    }

    return latitudeValue
  })()

  const formattedLongitude = (() => {
    if (longitude) {
      return longitude
    }

    if (!coordinates?.[1]) {
      return undefined
    }

    if (isValueTooLong(String(coordinates?.[1]))) {
      return Number(coordinates?.[1]).toFixed(DECIMAL_PRECISION)
    }

    return coordinates?.[1]
  })()

  return (
    <Box>
      <DDInput
        data-cy="coordinates-dd-input-lat"
        disabled={disabled}
        name={`${name}-latitude`}
        onChange={handleLatitudeChange}
        placeholder="Latitude"
        readOnly={readOnly}
        value={formattedLatitude}
      />
      <DDInput
        data-cy="coordinates-dd-input-lon"
        disabled={disabled}
        name={`${name}-longitude`}
        onChange={handleLongitudeChange}
        placeholder="Longitude"
        readOnly={readOnly}
        value={formattedLongitude}
      />
      <CoordinatesType>(DD)</CoordinatesType>
      <Error>{latitudeError}</Error>
      <Error>{longitudeError}</Error>
    </Box>
  )
}

const DDInput = styled.input`
  margin-right: 5px !important;
  width: 100px;
`

const CoordinatesType = styled.span`
  color: ${p => p.theme.color.slateGray};
  font-size: 13px !important;
  margin-left: 7px !important;
`

const Error = styled.span`
  color: red;
  display: block;
`

const Box = styled.div`
  font-size: 13px;
  text-align: left;
`
