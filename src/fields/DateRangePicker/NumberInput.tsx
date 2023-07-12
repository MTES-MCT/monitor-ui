import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  type FocusEvent,
  type ForwardedRef,
  type InputHTMLAttributes,
  useEffect,
  type KeyboardEvent
} from 'react'
import styled from 'styled-components'

import { useFocusControl } from './useFocusControl'
import { usePreventWheelEvent } from '../../hooks/usePreventWheelEvent'

import type { NumberInputIndex } from './useFocusControl/types'
import type { Promisable } from 'type-fest'

export type NumberInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'maxLength' | 'onKeyUp' | 'onInput' | 'pattern' | 'placeholder' | 'type' | 'value'
> & {
  index: NumberInputIndex
  isLight: boolean
  max: number
  min: number
  onFormatError: (hasNextFormatError: boolean) => Promisable<void>
  onInput?: ((nextValue: string) => Promisable<void>) | undefined
  size: number
}
function NumberInputWithRef(
  { index, isLight, max, min, onBlur, onFocus, onFormatError, onInput, size, ...nativeProps }: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  // eslint-disable-next-line no-null/no-null
  const inputRef = useRef<HTMLInputElement>(null)

  const placeholder = useMemo(() => '-'.repeat(size), [size])

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  const { handleKeyUp: handleKeyUpViaInputControl, registerInput } = useFocusControl()
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
    }
  }, [max, min, onFormatError, onInput, size])

  const handleKeyUp = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      handleKeyUpViaInputControl(event, inputRef, size)
    },
    [handleKeyUpViaInputControl, size]
  )

  useEffect(() => {
    registerInput(inputRef, index)
  }, [index, registerInput])

  return (
    <StyledNumberInput
      ref={inputRef}
      $isLight={isLight}
      $size={size}
      maxLength={size}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onInput={handleInput}
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

  ::placeholder {
    color: ${p => (p.$isLight ? p.theme.color.slateGray : p.theme.color.slateGray)};
  }
`
