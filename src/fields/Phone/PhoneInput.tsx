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
          id={name}
          lazy={false}
          mask={[
            {
              definitions: { '#': /[1-9]/, '@': /0/ },
              mask: '@@ #[000] 00 00 00 00 00 00 00 00',
              startsWith: '00'
            },
            { definitions: { '#': /[1-9]/, '@': /0/ }, mask: '@# 00 00 00 00', startsWith: '0' }
          ]}
          onAccept={(nextValue: string) => {
            onChange(nextValue || undefined)
          }}
          placeholder="01 23 45 67 89 ou 00 594 12 34 56 78 90"
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
