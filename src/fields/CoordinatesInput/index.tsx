import { useCallback } from 'react'
import styled from 'styled-components'

import { CoordinatesFormat } from './constants'
import { DDCoordinatesInput } from './DDCoordinatesInput'
import { DMDCoordinatesInput } from './DMDCoordinatesInput'
import { DMSCoordinatesInput } from './DMSCoordinatesInput'

import type { Promisable } from 'type-fest'

export type CoordinatesInputProps = {
  coordinatesFormat: CoordinatesFormat
  defaultValue: number[]
  isLight?: boolean | undefined
  onChange: (nextCoordinates: number[], coordinates: number[]) => Promisable<void>
}
export function CoordinatesInput({
  coordinatesFormat,
  defaultValue,
  isLight = false,
  onChange
}: CoordinatesInputProps) {
  const getCoordinatesInput = useCallback(() => {
    switch (coordinatesFormat) {
      case CoordinatesFormat.DEGREES_MINUTES_SECONDS:
        return (
          <DMSCoordinatesInput
            coordinates={defaultValue}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_SECONDS}
            onChange={onChange}
          />
        )
      case CoordinatesFormat.DEGREES_MINUTES_DECIMALS:
        return (
          <DMDCoordinatesInput
            coordinates={defaultValue}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_DECIMALS}
            onChange={onChange}
          />
        )
      case CoordinatesFormat.DECIMAL_DEGREES:
        return <DDCoordinatesInput coordinates={defaultValue as [number, number]} onChange={onChange} />
      default:
        return undefined
    }
  }, [defaultValue, onChange, coordinatesFormat])

  return <Box $isLight={isLight}>{getCoordinatesInput()}</Box>
}

const Box = styled.div<{
  $isLight: boolean
}>`
  color: ${p => p.theme.color.lightGray};
  font-size: 13px;
  text-align: left;

  input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
    border: none;
    color: ${p => p.theme.color.gunMetal};
    height: 33px;
    padding: 7px 11px;
  }
`
