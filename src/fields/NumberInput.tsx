import classnames from 'classnames'
import { useCallback, useMemo, useRef, type FocusEvent } from 'react'
import { Input, type InputProps } from 'rsuite'
import styled, { css } from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './shared/utils'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { usePreventWheelEvent } from '../hooks/usePreventWheelEvent'
import { normalizeString } from '../utils/normalizeString'

import type { CommonFieldStyleProps } from './shared/types'
import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'type' | 'value'> & {
  areArrowsHidden?: boolean | undefined
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
  onChange?: (nextValue: number | undefined) => Promisable<void>
  readOnly?: boolean | undefined
  unit?: string | undefined
  value?: number | undefined
}
export function NumberInput({
  areArrowsHidden = false,
  className,
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
  onBlur,
  onChange,
  onFocus,
  readOnly = false,
  style,
  unit,
  value,
  ...originalProps
}: NumberInputProps) {
  // eslint-disable-next-line no-null/no-null
  const inputRef = useRef<HTMLInputElement | null>(null)

  const controlledClassname = useMemo(() => classnames('Field-NumberInput', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, name])

  const preventWheelEvent = usePreventWheelEvent(inputRef)

  const handleChange = useCallback(
    (nextValue: string) => {
      if (!onChange) {
        return
      }

      const normalizedNextValueAsString = nextValue && nextValue.length ? nextValue : undefined
      const nextValueAsNumber = Number(normalizedNextValueAsString)
      const normalizedNextValue = !Number.isNaN(nextValueAsNumber) ? nextValueAsNumber : undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      event.target.removeEventListener('wheel', preventWheelEvent)

      if (onBlur) {
        onBlur(event)
      }
    },
    [onBlur, preventWheelEvent]
  )

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      event.target.addEventListener('wheel', preventWheelEvent)

      if (onFocus) {
        onFocus(event)
      }
    },
    [onFocus, preventWheelEvent]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, onChange)

  const commonInputProps = {
    $areArrowsHidden: areArrowsHidden,
    $hasError: hasError,
    $isDisabled: disabled,
    $isLight: isLight,
    $isReadOnly: readOnly,
    $isTransparent: isTransparent,
    disabled,
    id: name,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    readOnly,
    ref: inputRef,
    type: 'number',
    value: value ?? '',
    ...originalProps
  }

  return (
    <Field className={controlledClassname} style={style}>
      <Label $isDisabled={disabled} $isHidden={isLabelHidden} $isRequired={isRequired} htmlFor={name}>
        {label}
      </Label>

      {!unit && <InputWithoutUnit key={key} {...commonInputProps} />}
      {!!unit && (
        <InputBoxWithUnit
          key={key}
          $hasError={hasError}
          $isDisabled={disabled}
          $isLight={isLight}
          $isReadOnly={readOnly}
          $isTransparent={isTransparent}
        >
          <InputWithUnit {...commonInputProps} />
          {unit}
        </InputBoxWithUnit>
      )}

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const BaseInput = styled(Input)<
  CommonFieldStyleProps & {
    $areArrowsHidden: boolean
  }
>`
  border-radius: 0;
  color: ${p => p.theme.color.gunMetal};
  ${p => p.$isReadOnly && `cursor: default;`}
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  padding: 3px 8px 6px;
  vertical-align: center;
  width: 100%;

  ${p =>
    p.$areArrowsHidden &&
    css`
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    `}

  &::placeholder {
    color: ${getFieldPlaceholderColorFactoryForState('default')};
  }

  &:hover {
    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('hover')};
    }
  }

  &:active,
  &:focus {
    outline: 0;

    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('focus')};
    }
  }
`

const InputWithoutUnit = styled(BaseInput)<
  CommonFieldStyleProps & {
    $areArrowsHidden: boolean
  }
>`
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};

  &:hover {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('hover')} !important;
  }

  &:active,
  &:focus {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('focus')} !important;
  }
`

const InputBoxWithUnit = styled.div<CommonFieldStyleProps>`
  align-items: center;
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  color: ${p => p.theme.color.slateGray};
  display: flex;
  font-size: 13px;
  line-height: 19px;
  padding-right: 8px;
  user-select: none;
  width: 100%;

  &:hover {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('hover')} !important;
  }

  &:active,
  &:focus {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('focus')} !important;
  }
`

const InputWithUnit = styled(BaseInput)`
  background-color: transparent;
  border: none;
  flex-grow: 1;
`
