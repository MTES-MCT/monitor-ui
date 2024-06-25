import { Field } from '@elements/Field'
import { Label } from '@elements/Label'
import { inputStyle } from '@fields/shared/StyledInputBox'
import { forwardRef, useId, type ComponentProps } from 'react'
import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

import type { Promisable } from 'type-fest'

export type PhoneInputProps = {
  error?: string
  label: string
  onChange: (nextValue: string | undefined) => Promisable<void>
  value: string | undefined
} & Omit<ComponentProps<'input'>, 'onChange' | 'value'>

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({ label, onChange, value, ...props }, ref) => {
  const id = useId()

  return (
    <Field>
      <Label htmlFor={id}>{label}</Label>
      <StyledIMaskInput
        ref={ref}
        id={id}
        mask={[
          { definitions: { '#': /[6-7]/, '@': /0/ }, mask: '@# 00 00 00 00' },
          { definitions: { '#': /[1-9]/, '+': /[\\+]/ }, mask: '+#[000] 000 000 000 000 000' }
        ]}
        onAccept={(nextValue: string) => {
          onChange(nextValue)
        }}
        unmask
        value={value}
        {...props}
      />
    </Field>
  )
})

const StyledIMaskInput = styled(IMaskInput)`
  ${inputStyle}
`
