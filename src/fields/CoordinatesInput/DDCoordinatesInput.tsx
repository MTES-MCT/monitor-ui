import { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDebouncedCallback } from 'use-debounce'

import { isNumeric } from '../../utils/isNumeric'

import type { Coordinates } from '../../types/definitions'

const DECIMAL_PRECISION = 6

type DDCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  disabled: boolean
  name: string
  onChange: (nextCoordinates: Coordinates, coordinates: Coordinates | undefined) => void
  readOnly: boolean
}
// TODO This field should return undefined when cleared (i.e.: Select all & Backspace/Delete)
export function DDCoordinatesInput({ coordinates, disabled, name, onChange, readOnly }: DDCoordinatesInputProps) {
  const latitudeInputRef = useRef<HTMLInputElement>()
  const longitudeInputRef = useRef<HTMLInputElement>()

  const [latitudeError, setLatitudeError] = useState('')
  const [longitudeError, setLongitudeError] = useState('')

  const defaultValue = useMemo(() => {
    if (!coordinates) {
      return undefined
    }

    const [latitude, longitude] = coordinates

    if (isNumeric(latitude) && isNumeric(longitude)) {
      return {
        latitude: Number(latitude).toFixed(DECIMAL_PRECISION),
        longitude: Number(longitude).toFixed(DECIMAL_PRECISION)
      }
    }

    return {
      latitude: undefined,
      longitude: undefined
    }
  }, [coordinates])

  const handleChange = useDebouncedCallback((nextCoordinates: [number, number] | undefined) => {
    if (!latitudeInputRef.current || !longitudeInputRef.current) {
      return
    }

    const latitudeAsString = latitudeInputRef.current.value
    const longitudeAsString = longitudeInputRef.current.value

    setLongitudeError('')
    setLatitudeError('')

    if (!isNumeric(latitudeAsString)) {
      setLatitudeError('Champ Latitude incorrect')

      return
    }

    if (!isNumeric(longitudeAsString)) {
      setLongitudeError('Champ Longitude incorrect')

      return
    }

    const latitude = Number(latitudeAsString)
    const longitude = Number(longitudeAsString)

    onChange([latitude, longitude], nextCoordinates)
  }, 500)

  return (
    <Box>
      <DDInput
        ref={latitudeInputRef as any}
        data-cy="coordinates-dd-input-lat"
        disabled={disabled}
        name={`${name}-latitude`}
        onChange={() => handleChange(coordinates)}
        placeholder="Latitude"
        readOnly={readOnly}
        value={defaultValue ? defaultValue.latitude : undefined}
      />
      <DDInput
        ref={longitudeInputRef as any}
        data-cy="coordinates-dd-input-lon"
        disabled={disabled}
        name={`${name}-longitude`}
        onChange={() => handleChange(coordinates)}
        placeholder="Longitude"
        readOnly={readOnly}
        value={defaultValue ? defaultValue.longitude : undefined}
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
