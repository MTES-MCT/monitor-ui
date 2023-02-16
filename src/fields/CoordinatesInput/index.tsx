import { useCallback } from 'react'
import styled from 'styled-components'

import { CoordinatesFormat } from './constants'
import { DDCoordinatesInput } from './DDCoordinatesInput'
import { DMDCoordinatesInput } from './DMDCoordinatesInput'
import { DMSCoordinatesInput } from './DMSCoordinatesInput'

export type CoordinatesInputProps = {
  coordinates: number[]
  coordinatesFormat: CoordinatesFormat
  onChange: (nextCoordinates: number[], coordinates: number[]) => void
}
export function CoordinatesInput({ coordinates, coordinatesFormat, onChange }: CoordinatesInputProps) {
  const getCoordinatesInput = useCallback(() => {
    switch (coordinatesFormat) {
      case CoordinatesFormat.DEGREES_MINUTES_SECONDS:
        return (
          <DMSCoordinatesInput
            coordinates={coordinates}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_SECONDS}
            onChange={onChange}
          />
        )
      case CoordinatesFormat.DEGREES_MINUTES_DECIMALS:
        return (
          <DMDCoordinatesInput
            coordinates={coordinates}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_DECIMALS}
            onChange={onChange}
          />
        )
      case CoordinatesFormat.DECIMAL_DEGREES:
        return <DDCoordinatesInput coordinates={coordinates as any} onChange={onChange} />
      default:
        return undefined
    }
  }, [coordinates, onChange, coordinatesFormat])

  return <Body>{getCoordinatesInput()}</Body>
}

const Body = styled.div`
  color: ${p => p.theme.color.lightGray};
  font-size: 13px;
  text-align: left;

  input {
    background: ${p => p.theme.color.gainsboro};
    border: none;
    color: ${p => p.theme.color.gunMetal};
    height: 27px;
    margin-top: 7px;
    padding-left: 8px;
  }
`
