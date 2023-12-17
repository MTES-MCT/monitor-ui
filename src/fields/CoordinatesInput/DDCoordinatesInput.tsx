import { useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { useDebouncedCallback } from 'use-debounce'

import { THEME } from '../../theme'
import { isNumeric } from '../../utils/isNumeric'

import type { Coordinates } from '../../types'

type DDCoordinatesInputProps = {
  coordinates: Coordinates | undefined
  disabled: boolean | undefined
  isLight: boolean | undefined
  onChange: (nextCoordinates: Coordinates, coordinates: Coordinates | undefined) => void
}
// TODO This field should return undefined when cleared (i.e.: Select all & Backspace/Delete)
export function DDCoordinatesInput({
  coordinates,
  disabled = false,
  isLight = false,
  onChange
}: DDCoordinatesInputProps) {
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
        latitude: Number(latitude),
        longitude: Number(longitude)
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
        defaultValue={defaultValue ? defaultValue.latitude : undefined}
        disabled={disabled}
        onChange={() => handleChange(coordinates)}
        placeholder="Latitude"
        style={{
          backgroundColor: isLight ? THEME.color.white : THEME.color.gainsboro,
          border: latitudeError ? '1px solid red' : undefined
        }}
      />
      <DDInput
        ref={longitudeInputRef as any}
        data-cy="coordinates-dd-input-lon"
        defaultValue={defaultValue ? defaultValue.longitude : undefined}
        disabled={disabled}
        onChange={() => handleChange(coordinates)}
        placeholder="Longitude"
        style={{
          backgroundColor: isLight ? THEME.color.white : THEME.color.gainsboro,
          border: longitudeError ? '1px solid red' : undefined
        }}
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
  margin-left: 7px;
  color: ${p => p.theme.color.slateGray};
`

const Error = styled.span`
  color: red;
  display: block;
`

const Box = styled.div`
  font-size: 13px;
  text-align: left;
`
