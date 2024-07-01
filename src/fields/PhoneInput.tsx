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
  isRequired?: boolean
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

const defaultFormat = { definitions: { '#': /[1-9]/ }, mask: '*00 000 000 000 000 000' }

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ disabled, error, isRequired, isUndefinedWhenDisabled, label, name, onChange, value, ...props }, ref) => {
    useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, onChange)

    return (
      <Field className="Field-PhoneInput">
        <Label $isRequired={isRequired} disabled={disabled} htmlFor={name}>
          {label}
        </Label>
        <StyledIMaskInput
          ref={ref}
          $hasError={!!error}
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
          unmask
          value={value}
          {...props}
        />
        {!!error && <FieldError>{error}</FieldError>}
      </Field>
    )
  }
)

const StyledIMaskInput = styled(IMaskInput)`
  ${inputStyle}
`
