import {
  forwardRef,
  type KeyboardEvent,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  type FocusEvent,
  type ForwardedRef,
  type InputHTMLAttributes
} from 'react'
import styled from 'styled-components'

import { usePreventWheelEvent } from '../../hooks/usePreventWheelEvent'

import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'defaultValue' | 'maxLength' | 'onInput' | 'pattern' | 'type'
> & {
  isLight: boolean
  max?: number
  min?: number
  name: string
  /** Called when the use press backspace key while the input is empty. */
  onBack?: (() => Promisable<void>) | undefined
  /** Called when the input value reaches the size property. */
  onFilled?: (() => Promisable<void>) | undefined
  onFormatError: (hasNextFormatError: boolean) => Promisable<void>
  onInput?: ((nextValue: string) => Promisable<void>) | undefined
  /** Called when the right arrow is pressed while the cursor is positionned at the input end. */
  onNext?: (() => Promisable<void>) | undefined
  /** Called when the left arrow is pressed while the cursor is positionned at the input start. */
  onPrevious?: (() => Promisable<void>) | undefined
  size: number
}
function NumberInputWithRef(
  {
    isLight,
    max,
    min,
    name,
    onBack,
    onBlur,
    onFilled,
    onFocus,
    onFormatError,
    onInput,
    onNext,
    onPrevious,
    size,
    value,
    ...nativeProps
  }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // eslint-disable-next-line no-null/no-null
  const inputRef = useRef<HTMLInputElement>(null)

  const placeholder = useMemo(() => '-'.repeat(size), [size])

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  const preventWheelEvent = usePreventWheelEvent(inputRef)

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      event.target.removeEventListener('wheel', preventWheelEvent)

      if (onBlur) {
        onBlur(event)
      }
    },
    [onBlur, preventWheelEvent]
  )

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      if (!inputRef.current) {
        return
      }

      event.target.addEventListener('wheel', preventWheelEvent)

      inputRef.current.select()

      if (onFocus) {
        onFocus(event)
      }
    },
    [onFocus, preventWheelEvent]
  )

  const handleInput = useCallback(() => {
    if (!inputRef.current) {
      return
    }

    onFormatError(false)

    if (onInput) {
      onInput(inputRef.current.value)
    }
    if (inputRef.current.value.length !== size) {
      return
    }

    const valueAsNumber = Number(inputRef.current.value)
    if (Number.isNaN(valueAsNumber) || valueAsNumber < min || valueAsNumber > max) {
      onFormatError(true)

      return
    }

    if (onFilled && inputRef.current.value.length === size) {
      onFilled()
    }
  }, [max, min, onFilled, onFormatError, onInput, size])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (!inputRef.current) {
        return
      }

      if (onBack && event.key === 'Backspace' && !inputRef.current.value.length) {
        event.preventDefault()

        onBack()
      }
    },
    [onBack]
  )

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (!inputRef.current) {
        return
      }

      if (
        onPrevious &&
        event.key === 'ArrowLeft' &&
        inputRef.current.selectionStart === 0 &&
        // We don't want to call that function when the user is selecting the input text
        inputRef.current.selectionEnd === inputRef.current.selectionStart
      ) {
        event.preventDefault()

        onPrevious()

        return
      }

      if (
        onNext &&
        event.key === 'ArrowRight' &&
        inputRef.current.selectionStart === inputRef.current.value.length &&
        // We don't want to call that function when the user is selecting the input text
        inputRef.current.selectionEnd === inputRef.current.selectionStart
      ) {
        event.preventDefault()

        onNext()

        return
      }

      // TODO Find a better solution that this dirty hack handling "onRefilled" case.
      if (
        onNext &&
        inputRef.current.value.length === size &&
        inputRef.current.selectionStart === inputRef.current.value.length &&
        // We don't want to call that function when the user is selecting the input text
        inputRef.current.selectionEnd === inputRef.current.selectionStart
      ) {
        event.preventDefault()

        onNext()
      }
    },
    [onNext, onPrevious, size]
  )

  return (
    <StyledNumberInput
      key={String(value)}
      ref={inputRef}
      $isLight={isLight}
      $size={size}
      defaultValue={value}
      id={name}
      maxLength={size}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onInput={handleInput}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      pattern="\d*"
      placeholder={placeholder}
      type="text"
      {...nativeProps}
    />
  )
}

export const NumberInput = forwardRef(NumberInputWithRef)

const StyledNumberInput = styled.input<{
  $isLight: boolean
  $size: number
}>`
  background-color: transparent;
  border: 0;
  color: ${p => p.theme.color.gunMetal};
  font-size: inherit;
  outline: none;
  padding: 0;
  text-align: center;
  /* 1 digit = 8px */
  width: ${p => p.$size * 8}px;

  &::placeholder {
    /* TODO Update that, this is wrong. */
    color: ${p => (p.$isLight ? p.theme.color.slateGray : p.theme.color.slateGray)};
  }
`
