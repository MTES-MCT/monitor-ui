import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { Label } from '@elements/Label'
import { inputStyle } from '@fields/shared/StyledInputBox'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { forwardRef, type ComponentProps } from 'react'
import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

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
  value: string | undefined
} & Omit<ComponentProps<'input'>, 'onChange' | 'value'>

const internationalFormat = {
  definitions: { '#': /[1-9]/, '@': /0/ },
  mask: '@@ #[00] 000 000 000 000'
}

const frenchFormat = { definitions: { '#': /[1-9]/, '@': /0/ }, mask: '@# 00 00 00 00' }

const defaultFormat = { definitions: { '#': /[1-9]/, '+': /[+\d]/ }, mask: '+00 000 000 000 000 000' }

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
      value,
      ...props
    },
    ref
  ) => {
    useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, undefined, () => onChange(''))

    return (
      <Field className="Field-PhoneInput">
        <Label $isRequired={isRequired} disabled={disabled} htmlFor={name} isHidden={isLabelHidden}>
          {label}
        </Label>
        <StyledIMaskInput
          ref={ref}
          $hasError={!!error}
          $isDisabled={disabled}
          $isLight={isLight}
          $isTransparent={isTransparent}
          disabled={disabled}
          dispatch={(appended, dynamicMasked) => {
            const phoneNumber = (dynamicMasked.value + appended).replace(/\s+/g, '')

            if (phoneNumber.startsWith('00')) {
              return dynamicMasked.compiledMasks[0]
            }
            if (phoneNumber.startsWith('0') && value && value.length <= 10 && phoneNumber === value) {
              return dynamicMasked.compiledMasks[1]
            }

            return dynamicMasked.compiledMasks[2]
          }}
          id={name}
          mask={[internationalFormat, frenchFormat, defaultFormat]}
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

const StyledIMaskInput = styled(IMaskInput)`
  ${inputStyle}
`
