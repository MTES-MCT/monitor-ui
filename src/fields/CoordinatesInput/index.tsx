import { useKey } from '@hooks/useKey'
import classnames from 'classnames'
import { getFieldBackgroundColorFactory, getFieldBorderColorFactoryForState } from 'fields/shared/utils'
import { noop } from 'lodash'
import { useCallback, useMemo, useState, type CSSProperties } from 'react'
import styled from 'styled-components'

import { DDCoordinatesInput } from './DDCoordinatesInput'
import { DMDCoordinatesInput } from './DMDCoordinatesInput'
import { DMSCoordinatesInput } from './DMSCoordinatesInput'
import { CoordinatesFormat } from '../../constants'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { normalizeString } from '../../utils/normalizeString'

import type { Coordinates } from '../../types/definitions'
import type { CommonFieldStyleProps } from 'fields/shared/types'
import type { Promisable } from 'type-fest'

export type CoordinatesInputProps = {
  className?: string | undefined
  coordinatesFormat: CoordinatesFormat
  defaultValue?: Coordinates | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextCoordinates: Coordinates | undefined, coordinates: Coordinates | undefined) => Promisable<void>
  readOnly?: boolean | undefined
  style?: CSSProperties | undefined
}
export function CoordinatesInput({
  className,
  coordinatesFormat,
  defaultValue,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange = noop,
  readOnly = false,
  style
}: CoordinatesInputProps) {
  const [clearCounter, setClearCounter] = useState(0)

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([clearCounter, name])

  const controlledClassName = classnames('Field-CoordinatesInput', className)

  const getCoordinatesInput = useCallback(() => {
    switch (coordinatesFormat) {
      case CoordinatesFormat.DEGREES_MINUTES_SECONDS:
        return (
          <DMSCoordinatesInput
            key={key}
            coordinates={defaultValue}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_SECONDS}
            disabled={disabled}
            name={name}
            onChange={onChange}
            readOnly={readOnly}
          />
        )

      case CoordinatesFormat.DEGREES_MINUTES_DECIMALS:
        return (
          <DMDCoordinatesInput
            key={key}
            coordinates={defaultValue}
            coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_DECIMALS}
            disabled={disabled}
            name={name}
            onChange={onChange}
            readOnly={readOnly}
          />
        )

      case CoordinatesFormat.DECIMAL_DEGREES:
        return (
          <DDCoordinatesInput
            key={key}
            coordinates={defaultValue as [number, number]}
            disabled={disabled}
            name={name}
            onChange={onChange}
            readOnly={readOnly}
          />
        )

      default:
        return undefined
    }
  }, [defaultValue, disabled, key, onChange, coordinatesFormat, name, readOnly])

  const clearField = useCallback(() => {
    setClearCounter(count => count + 1)
  }, [])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, clearField)

  return (
    <StyledFieldset
      $hasError={hasError}
      $isDisabled={disabled}
      $isLight={isLight}
      $isReadOnly={readOnly}
      $isRequired={isRequired}
      $isTransparent={isTransparent}
      className={controlledClassName}
      isLegendHidden={isLabelHidden}
      legend={label}
      style={style}
    >
      {getCoordinatesInput()}

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </StyledFieldset>
  )
}

const StyledFieldset = styled(Fieldset)<CommonFieldStyleProps>`
  * {
    box-sizing: border-box;
  }

  input {
    background-color: ${getFieldBackgroundColorFactory()};
    border: 1px solid ${getFieldBorderColorFactoryForState('default')};
    color: ${p => p.theme.color.gunMetal};
    font-size: 13px;
    font-weight: 500;
    height: 30px;
    padding: 4.5px 8px 7.5px;

    &:hover,
    &._hover {
      border: 1px solid ${getFieldBorderColorFactoryForState('hover')};
    }

    &:active,
    &._active,
    &:focus,
    &._focus {
      background-color: ${getFieldBackgroundColorFactory()};
      border: 1px solid ${getFieldBorderColorFactoryForState('focus')};
    }
    &:focus-visible {
      outline: 0;
    }
    ${p =>
      p.$isRequired &&
      `
        :after {
            content:" *";
            color: ${p.theme.color.maximumRed};
          }`}
  }
`
