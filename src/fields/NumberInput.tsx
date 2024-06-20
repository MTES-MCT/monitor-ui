import classnames from 'classnames'
import { useCallback, useMemo, useRef } from 'react'
import { Input, type InputProps } from 'rsuite'
import styled from 'styled-components'

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
import { normalizeString } from '../utils/normalizeString'

import type { CommonFieldStyleProps } from './shared/types'
import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'type' | 'value'> & {
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
  value?: number | undefined
}
export function NumberInput({
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
  onChange,
  readOnly = false,
  style,
  value,
  ...originalProps
}: NumberInputProps) {
  // eslint-disable-next-line no-null/no-null
  const inputRef = useRef<HTMLInputElement | null>(null)

  const controlledClassname = useMemo(() => classnames('Field-NumberInput', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, name])

  const handleChange = useCallback(
    (nextValue: string) => {
      if (!onChange) {
        return
      }
      if (nextValue === '') {
        onChange(undefined)
      }

      const normalizedNextValueAsString = nextValue && nextValue.length ? nextValue : undefined
      const nextValueAsNumber = Number(normalizedNextValueAsString)
      if (Number.isNaN(nextValueAsNumber)) {
        return
      }
      onChange(nextValueAsNumber)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, onChange)

  return (
    <Field className={controlledClassname} style={style}>
      <Label $isRequired={isRequired} disabled={disabled} htmlFor={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledInput
        key={key}
        ref={inputRef}
        $hasError={hasError}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        disabled={disabled}
        id={name}
        inputMode="numeric"
        maxLength="12"
        onChange={handleChange}
        readOnly={readOnly}
        type="text"
        value={value ?? ''}
        {...originalProps}
      />

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(Input as any)<CommonFieldStyleProps>`
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  border-radius: 0;
  color: ${p => p.theme.color.gunMetal};
  ${p => p.$isReadOnly && `cursor: default;`}
  font-size: 13px;
  font-weight: 500;
  line-height: 19px;
  padding: 3px 8px 6px;
  vertical-align: center;
  width: 100%;

  &::placeholder {
    color: ${getFieldPlaceholderColorFactoryForState('default')};
  }

  &:hover {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('hover')} !important;

    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('hover')};
    }
  }

  &:active,
  &:focus {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('focus')} !important;
    outline: 0;

    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('focus')};
    }
  }
`
