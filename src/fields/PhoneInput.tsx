import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { Label } from '@elements/Label'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { forwardRef, type ComponentProps } from 'react'
import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './shared/utils'

import type { CommonFieldStyleProps } from './shared/types'
import type { Promisable } from 'type-fest'

export type PhoneInputProps = {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean
  isLight?: boolean
  isRequired?: boolean
  isTransparent?: boolean
  isUndefinedWhenDisabled?: boolean
  label: string
  name: string
  onChange: (nextValue: string | undefined) => Promisable<void>
  readOnly?: boolean
  value: string | undefined
} & Omit<ComponentProps<'input'>, 'onChange' | 'value'>

const internationalFormat = {
  definitions: { '#': /[1-9]/, '@': /0/ },
  mask: '`@@ #[00] 000 000 000 000'
}

const internationalFrenchFormat = {
  definitions: { '@': /0/ },
  mask: '`@@ 00 00 00 00 00'
}

const frenchFormat = { definitions: { '#': /[1-9]/, '@': /0/ }, mask: '`@# 00 00 00 00' }

const defaultFormat = { definitions: { '#': /[1-9]/, '+': /[+\d]/ }, mask: '`+00 000 000 000 000 000' }

/**
 * FIXME (01/07/2024): This lib has probably a bug, I opened an issue : https://github.com/uNmAnNeR/imaskjs/issues/1053
 */
export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
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
      value,
      ...props
    },
    ref
  ) => {
    useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, undefined, () => onChange(''))

    return (
      <Field className="Field-PhoneInput">
        <Label $isDisabled={disabled} $isHidden={isLabelHidden} $isRequired={isRequired} htmlFor={name}>
          {label}
        </Label>
        <StyledIMaskInput
          ref={ref}
          $hasError={!!error}
          $isDisabled={disabled}
          $isLight={isLight}
          $isReadOnly={readOnly}
          $isTransparent={isTransparent}
          disabled={disabled}
          dispatch={(appended, dynamicMasked) => {
            const phoneNumber = (dynamicMasked.unmaskedValue + appended).replace(/\s+/g, '')

            if (phoneNumber.startsWith('00')) {
              if (value && value.length === 12 && phoneNumber === value) {
                return dynamicMasked.compiledMasks[1]
              }

              return dynamicMasked.compiledMasks[0]
            }
            if (phoneNumber.startsWith('0') && value && value.length <= 10 && phoneNumber === value) {
              return dynamicMasked.compiledMasks[2]
            }

            return dynamicMasked.compiledMasks[3]
          }}
          id={name}
          mask={[internationalFormat, internationalFrenchFormat, frenchFormat, defaultFormat]}
          onAccept={(nextValue: string) => {
            onChange(nextValue || undefined)
          }}
          overwrite={false}
          type="tel"
          unmask
          value={value}
          {...props}
        />
        {!isErrorMessageHidden && !!error && <FieldError>{error}</FieldError>}
      </Field>
    )
  }
)

const StyledIMaskInput = styled(IMaskInput)<CommonFieldStyleProps>`
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  border-radius: 0;
  color: ${p => p.theme.color.gunMetal};
  cursor: default;
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
