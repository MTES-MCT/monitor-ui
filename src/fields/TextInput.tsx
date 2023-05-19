import classnames from 'classnames'
import { type FunctionComponent, useCallback, useMemo } from 'react'
import { Input } from 'rsuite'
import styled from 'styled-components'

import { Size } from '../constants'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { THEME } from '../theme'
import { normalizeString } from '../utils/normalizeString'

import type { IconProps } from '../types'
import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type TextInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'size' | 'type' | 'value'> & {
  Icon?: FunctionComponent<IconProps> | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: string | undefined) => Promisable<void>) | undefined
  size?: Size | undefined
  value?: string | undefined
}
export function TextInput({
  className,
  error,
  Icon,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  size = Size.NORMAL,
  style,
  value,
  ...originalProps
}: TextInputProps) {
  const controlledClassname = useMemo(() => classnames('Field-TextInput', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([originalProps.disabled, originalProps.name])

  const handleChange = useCallback(
    (nextValue: string | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = nextValue && nextValue.trim().length ? nextValue : undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && originalProps.disabled, onChange)

  return (
    <Field className={controlledClassname} style={style}>
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <InputBox $size={size}>
        <StyledInput
          key={key}
          $hasError={hasError}
          $hasIcon={!!Icon}
          $isLight={isLight}
          $size={size}
          id={originalProps.name}
          onChange={handleChange}
          type="text"
          value={value || ''}
          {...originalProps}
        />

        {Icon && <Icon color={THEME.color.slateGray} />}
      </InputBox>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const PADDING: Record<Size, string> = {
  [Size.LARGE]: '8px 16px 11px',
  [Size.NORMAL]: '3px 8px 6px',
  [Size.SMALL]: '3px 8px 6px'
}
const PADDING_WITH_ICON: Record<Size, string> = {
  [Size.LARGE]: '8px 40px 11px 16px',
  [Size.NORMAL]: '3px 38px 6px 8px',
  [Size.SMALL]: '3px 38px 6px 8px'
}
const StyledInput = styled(Input)<{
  $hasError: boolean
  $hasIcon: boolean
  $isLight: boolean
  $size: Size
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: solid 1px ${p => p.theme.color.blueYonder[100]};
  border-radius: 0;
  font-size: 13px;
  /* TODO It should be 18px but computed line-height is stuck to min. 18.5px. Investigate that. */
  line-height: 19px;
  outline: ${p => (p.$hasError ? `1px solid ${p.theme.color.maximumRed}` : 0)};
  padding: ${p => (p.$hasIcon ? PADDING_WITH_ICON[p.$size] : PADDING[p.$size])};
  vertical-align: center;
  width: 100%;

  ::placeholder {
    color: ${p => (p.$isLight ? p.theme.color.slateGray : p.theme.color.slateGray)};
  }
`

const InputBox = styled.div<{
  $size: Size
}>`
  position: relative;
  width: 100%;

  > .Element-IconBox {
    position: absolute;
    right: 10px;
    top: ${p => (p.$size === Size.LARGE ? '10px' : '5px')};
  }
`
