import classnames from 'classnames'
import { useCallback, useMemo, useRef, type FocusEvent } from 'react'
import { Input, type InputProps } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'type' | 'value'> & {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: number | undefined) => Promisable<void>) | undefined
  value?: number | undefined
}
export function NumberInput({
  className,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  style,
  value,
  ...originalProps
}: NumberInputProps) {
  // eslint-disable-next-line no-null/no-null
  const inputRef = useRef<HTMLInputElement | null>(null)

  const controlledClassname = useMemo(() => classnames('Field-NumberInput', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([originalProps.disabled, originalProps.name])

  /**
   * Prevent any wheel event from emitting while allowing page scroll when focused.
   *
   * @description
   * We want to prevent the number input from changing when the user accidentally scrolls up or down.
   * That's why we prevent the default behavior of wheel events when it is focused.
   *
   * We also want to allow the user to be able to scroll the page while focused on a number input,
   * That's why we blur this input when a "wheel" (=> "scroll") event happens.
   *
   * Because React uses passive event handler by default,
   * we can't just call `preventDefault` in the `onWheel` event target.
   * We thus have to use the input reference and add our event handler manually.
   *
   * @see https://github.com/facebook/react/pull/19654
   */
  const preventWheelEvent = useCallback((event: WheelEvent) => {
    if (!inputRef.current) {
      return
    }

    event.preventDefault()
    inputRef.current.blur()
  }, [])

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
    },
    [preventWheelEvent]
  )

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      event.target.addEventListener('wheel', preventWheelEvent)
    },
    [preventWheelEvent]
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

      <StyledInput
        key={key}
        ref={inputRef}
        $hasError={hasError}
        $isLight={isLight}
        id={originalProps.name}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        type="number"
        value={value || ''}
        {...originalProps}
      />

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledInput = styled(Input)<{
  $hasError: boolean
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  border: solid 1px ${p => p.theme.color.blueYonder[100]};
  border-radius: 0;
  font-size: 13px;
  /* TODO It should be 18px but computed line-height is stuck to min. 18.5px. Investigate that. */
  line-height: 19px;
  outline: ${p => (p.$hasError ? `1px solid ${p.theme.color.maximumRed}` : 0)};
  padding: 3px 8px 6px;
  vertical-align: center;
  width: 100%;

  :focus {
    outline-width: 1px;
    outline-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray)};
  }
`
