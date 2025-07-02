import { usePrevious } from '@hooks/usePrevious'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

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

function toControlledValue(value: string | number | undefined): string | undefined {
  if (isValueTooLong(`${value}`) && isNumeric(value)) {
    return (+value).toFixed(DECIMAL_PRECISION)
  }

  return value ? `${value}` : undefined
}

export function DDCoordinatesInput({ coordinates, disabled, name, onChange, readOnly }: DDCoordinatesInputProps) {
  const [latitude, setLatitude] = useState<string | undefined>(coordinates?.[0]?.toString())
  const [longitude, setLongitude] = useState<string | undefined>(coordinates?.[1]?.toString())
  const [latitudeError, setLatitudeError] = useState<string | undefined>(undefined)
  const [longitudeError, setLongitudeError] = useState<string | undefined>(undefined)

  const previousCoordinates = usePrevious(coordinates)

  useEffect(() => {
    if (!coordinates || coordinates === previousCoordinates) {
      return
    }

    const stringLatitude = coordinates?.[0]?.toString()
    setLatitude(stringLatitude)

    const stringLongitude = coordinates?.[1]?.toString()
    setLongitude(stringLongitude)
  }, [coordinates, previousCoordinates])

  const handleLatitudeChange = (value: string) => {
    setLatitudeError(undefined)

    if (isValueTooLong(value)) {
      return
    }
    setLatitude(value)

    if (!!value && !isNumeric(value)) {
      setLatitudeError('Champ Latitude incorrect')
      onChange(undefined)

      return
    }

    if (isNumeric(longitude) && isNumeric(value)) {
      if (!value.endsWith('.')) {
        onChange([+value, +longitude])
      }
    } else {
      onChange(undefined)
    }
  }

  const handleLongitudeChange = (value: string) => {
    setLongitudeError(undefined)

    if (isValueTooLong(value)) {
      return
    }

    setLongitude(value)

    if (!!value && !isNumeric(value)) {
      setLongitudeError('Champ Longitude incorrect')
      onChange(undefined)

      return
    }

    if (isNumeric(latitude) && isNumeric(value)) {
      if (!value.endsWith('.')) {
        onChange([+latitude, +value])
      }
    } else {
      onChange(undefined)
    }
  }

  return (
    <Box>
      <DDInput
        data-cy="coordinates-dd-input-lat"
        disabled={disabled}
        name={`${name}-latitude`}
        onChange={e => handleLatitudeChange(e.target.value)}
        placeholder="Latitude"
        readOnly={readOnly}
        value={toControlledValue(latitude) ?? ''}
      />
      <DDInput
        data-cy="coordinates-dd-input-lon"
        disabled={disabled}
        name={`${name}-longitude`}
        onChange={e => handleLongitudeChange(e.target.value)}
        placeholder="Longitude"
        readOnly={readOnly}
        value={toControlledValue(longitude) ?? ''}
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
