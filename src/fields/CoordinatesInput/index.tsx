import classnames from 'classnames'
import { noop } from 'lodash/fp'
import { useCallback, useMemo } from 'react'
import styled from 'styled-components'

import { DDCoordinatesInput } from './DDCoordinatesInput'
import { DMDCoordinatesInput } from './DMDCoordinatesInput'
import { DMSCoordinatesInput } from './DMSCoordinatesInput'
import { CoordinatesFormat } from '../../constants'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { normalizeString } from '../../utils/normalizeString'

import type { FieldsetProps } from '../../elements/Fieldset'
import type { Coordinates } from '../../types'
import type { Promisable } from 'type-fest'

export type CoordinatesInputProps = FieldsetProps & {
  coordinatesFormat: CoordinatesFormat
  defaultValue?: Coordinates | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  onChange?:
    | ((nextCoordinates: Coordinates | undefined, coordinates: Coordinates | undefined) => Promisable<void>)
    | undefined
}
export function CoordinatesInput({
  className,
  coordinatesFormat,
  defaultValue,
  error,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange = noop,
  ...nativeProps
}: CoordinatesInputProps) {
  const controlledClassName = classnames('Field-CoordinatesInput', className)
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const getCoordinatesInput = useCallback(() => {
    switch (coordinatesFormat) {
      case CoordinatesFormat.DEGREES_MINUTES_SECONDS:
        return (
          <DMSCoordinatesInput
            coordinates={defaultValue}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_SECONDS}
            disabled={nativeProps.disabled}
            onChange={onChange}
          />
        )

      case CoordinatesFormat.DEGREES_MINUTES_DECIMALS:
        return (
          <DMDCoordinatesInput
            coordinates={defaultValue}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_DECIMALS}
            disabled={nativeProps.disabled}
            onChange={onChange}
          />
        )

      case CoordinatesFormat.DECIMAL_DEGREES:
        return (
          <DDCoordinatesInput
            coordinates={defaultValue as [number, number]}
            disabled={nativeProps.disabled}
            onChange={onChange}
          />
        )

      default:
        return undefined
    }
  }, [defaultValue, nativeProps.disabled, onChange, coordinatesFormat])

  // TODO We must add a `handleDisable()` callback here to effectively empty the inputs when disabling this field.
  useFieldUndefineEffect(nativeProps.disabled, onChange /* , handleDisable */)

  return (
    <StyledFieldset
      className={controlledClassName}
      isLegendHidden={isLabelHidden}
      isLight={isLight}
      legend={label}
      {...nativeProps}
    >
      {getCoordinatesInput()}

      {hasError && <FieldError>{controlledError}</FieldError>}
    </StyledFieldset>
  )
}

const StyledFieldset = styled(Fieldset as any)`
  input {
    background-color: ${p => (p.isLight ? p.theme.color.white : p.theme.color.gainsboro)};
    border: ${p => (p.isLight ? `1px solid ${p.theme.color.lightGray}` : 'none')};
    color: ${p => p.theme.color.gunMetal};
    height: 33px;
    padding: 7px 11px;
  }
`
