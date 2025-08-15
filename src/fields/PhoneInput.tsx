import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { Label } from '@elements/Label'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { forwardRef, useId, type ComponentProps } from 'react'

import { StyledIMaskInput } from './shared/StyledIMaskInput'

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
    const phoneInputId = useId()
    useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, undefined, () => onChange(''))

    return (
      <Field className="Field-PhoneInput">
        <Label $isDisabled={disabled} $isHidden={isLabelHidden} $isRequired={isRequired} htmlFor={phoneInputId}>
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
          id={phoneInputId}
          mask={[internationalFormat, internationalFrenchFormat, frenchFormat, defaultFormat]}
          name={name}
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
