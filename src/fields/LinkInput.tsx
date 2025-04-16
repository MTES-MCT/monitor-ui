import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { Label } from '@elements/Label'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { forwardRef, type ComponentProps } from 'react'

import { StyledIMaskInput } from './shared/StyledIMaskInput'

import type { Promisable } from 'type-fest'

export type LinkInputProps = {
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

/**
 * FIXME (01/07/2024): This lib has probably a bug, I opened an issue : https://github.com/uNmAnNeR/imaskjs/issues/1053
 */
export const LinkInput = forwardRef<HTMLInputElement, LinkInputProps>(
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
      <Field className="Field-LinkInput">
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
          blocks={{
            r: {
              mask: '*',
              repeat: Infinity
            }
          }}
          disabled={disabled}
          id={name}
          lazy
          mask="https://www.r"
          onAccept={(nextValue: string) => {
            onChange(nextValue || undefined)
          }}
          overwrite={false}
          type="text"
          unmask={false}
          value={value}
          {...props}
        />
        {!isErrorMessageHidden && !!error && <FieldError>{error}</FieldError>}
      </Field>
    )
  }
)
