import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { NumberInput } from './NumberInput'
import { RangedTimePicker } from './RangedTimePicker'
import { NumberInputIndex } from './useFocusControl/types'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { Clock } from '../../icons'

import type { TimeInputRef, TimeTuple } from './types'
import type { ForwardedRef } from 'react'
import type { Promisable } from 'type-fest'

export type TimeInputProps = {
  baseContainer?: Document | HTMLDivElement | undefined
  // TODO Check why TS thinks there is no `disabled` prop in `NumberInputProps`.
  disabled: boolean
  isCompact: boolean
  isEndDate?: boolean | undefined
  isLight: boolean
  isStartDate?: boolean | undefined
  minutesRange?: number | undefined
  /** Called each time any time input is changed to a new valid value. */
  onChange: (nextTimeTuple: TimeTuple) => Promisable<void>
  onFocus?: (() => Promisable<void>) | undefined
  /** Called each time any time input receive a keyboard-input change whether the value is valid or not. */
  onInput: () => Promisable<void>
  value?: TimeTuple | undefined
}
function TimeInputWithRef(
  {
    baseContainer,
    disabled = false,
    isCompact,
    isEndDate = false,
    isLight,
    isStartDate = false,
    minutesRange = 15,
    onChange,
    onFocus,
    onInput,
    value
  }: TimeInputProps,
  ref: ForwardedRef<TimeInputRef>
) {
  /* eslint-disable no-null/no-null */
  const boxRef = useRef<HTMLDivElement>(null)
  const hourInputRef = useRef<HTMLInputElement>(null)
  const minuteInputRef = useRef<HTMLInputElement>(null)
  /* eslint-enable no-null/no-null */
  const lastValueBeforeFocusRef = useRef(value)

  const [hasFormatError, setHasFormatError] = useState(false)
  const [hasValidationError, setHasValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false)
  const [timePickerFilter, setTimePickerFilter] = useState<RegExp>(/.*/)

  const controlledValue = useMemo(() => {
    // We only want the `value` prop to trigger `<NumberInput />` re-mounting when they are not focused.
    if (!isFocused) {
      lastValueBeforeFocusRef.current = value
    }

    return lastValueBeforeFocusRef.current
  }, [isFocused, value])

  const key = JSON.stringify(controlledValue)

  const { hourIndex, minuteIndex } = useMemo(
    () =>
      isEndDate
        ? {
            hourIndex: NumberInputIndex.END_HOUR,
            minuteIndex: NumberInputIndex.END_MINUTE
          }
        : {
            hourIndex: NumberInputIndex.START_HOUR,
            minuteIndex: NumberInputIndex.START_MINUTE
          },
    [isEndDate]
  )

  useImperativeHandle<TimeInputRef, TimeInputRef>(ref, () => ({
    box: boxRef.current,
    getValueAsPartialTimeTuple: () => [
      hourInputRef.current?.value.length ? hourInputRef.current.value : undefined,
      minuteInputRef.current?.value.length ? minuteInputRef.current.value : undefined
    ]
  }))

  const closeRangedTimePicker = useCallback(() => {
    setIsTimePickerOpen(false)
  }, [])

  /**
   * Call `onChange()` if both inputs are filled and valid, otherwise call `onInput()`.
   */
  const callOnChangeIfFilledOrElseOnInput = useCallback(() => {
    if (!hourInputRef.current || !minuteInputRef.current) {
      return
    }

    setHasValidationError(false)

    if (hourInputRef.current.value.length !== 2 || minuteInputRef.current.value.length !== 2) {
      setHasValidationError(true)

      onInput()

      return
    }

    closeRangedTimePicker()

    const nextTimeTuple: TimeTuple = [hourInputRef.current.value, minuteInputRef.current.value]
    onChange(nextTimeTuple)
  }, [closeRangedTimePicker, onChange, onInput])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleFocus = useCallback(() => {
    setIsFocused(true)

    if (onFocus) {
      onFocus()
    }
  }, [onFocus])

  const handleFormatError = useCallback((hasNextFormatError: boolean) => {
    setHasFormatError(hasNextFormatError)
  }, [])

  const handleHourInput = useCallback(
    (nextValue: string) => {
      // eslint-disable-next-line no-nested-ternary
      const nextRangedTimePickerFilter = nextValue.length ? new RegExp(`^${nextValue}`) : /.*/

      setTimePickerFilter(nextRangedTimePickerFilter)

      callOnChangeIfFilledOrElseOnInput()
    },
    [callOnChangeIfFilledOrElseOnInput]
  )

  const handleTimePickerChange = useCallback(
    (nextTimeTuple: TimeTuple) => {
      closeRangedTimePicker()

      onChange(nextTimeTuple)
    },
    [closeRangedTimePicker, onChange]
  )

  const openRangedTimePicker = useCallback(() => {
    setIsTimePickerOpen(true)
  }, [])

  useClickOutsideEffect(boxRef, closeRangedTimePicker, baseContainer)

  return (
    <Box
      ref={boxRef}
      $hasError={hasFormatError || hasValidationError}
      $isCompact={isCompact}
      $isDisabled={disabled}
      $isFocused={isFocused}
      $isLight={isLight}
    >
      <InputGroup>
        <div>
          <NumberInput
            key={`hour-${key}`}
            ref={hourInputRef}
            aria-label={`Heure${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
            defaultValue={controlledValue && controlledValue[0]}
            disabled={disabled}
            index={hourIndex}
            isLight={isLight}
            max={23}
            min={0}
            onBlur={handleBlur}
            onClick={openRangedTimePicker}
            onFocus={handleFocus}
            onFormatError={handleFormatError}
            onInput={handleHourInput}
            size={2}
          />
          :
          <NumberInput
            key={`minute-${key}`}
            ref={minuteInputRef}
            aria-label={`Minute${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
            defaultValue={controlledValue && controlledValue[1]}
            disabled={disabled}
            index={minuteIndex}
            isLight={isLight}
            max={59}
            min={0}
            onBlur={handleBlur}
            onClick={openRangedTimePicker}
            onFocus={handleFocus}
            onFormatError={handleFormatError}
            onInput={callOnChangeIfFilledOrElseOnInput}
            size={2}
          />
        </div>

        {!isCompact && <Clock />}
      </InputGroup>

      {isTimePickerOpen && (
        <RangedTimePicker filter={timePickerFilter} minutesRange={minutesRange} onChange={handleTimePickerChange} />
      )}
    </Box>
  )
}

export const TimeInput = forwardRef(TimeInputWithRef)

const Box = styled.div<{
  $hasError: boolean
  $isCompact: boolean
  $isDisabled: boolean
  $isFocused: boolean
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  box-shadow: ${p =>
    p.$hasError || p.$isFocused
      ? `inset 0px 0px 0px 1px ${p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray[100]}`
      : 'none'};
  color: ${p => (p.$isFocused ? p.theme.color.blueGray[100] : p.theme.color.slateGray)};
  display: inline-block;
  font-size: inherit;
  padding: ${p => (p.$isCompact ? '4.5px 8px 7px' : '3px 8px 5px')};
  position: relative;
  user-select: none;

  :hover {
    box-shadow: ${p =>
      `inset 0px 0px 0px 1px ${
        // eslint-disable-next-line no-nested-ternary
        p.$isDisabled
          ? p.theme.color.cultured
          : p.$isFocused
          ? p.theme.color.blueGray[100]
          : p.theme.color.blueYonder[100]
      }`};
    color: ${p => (p.$isFocused ? p.theme.color.blueGray[100] : p.theme.color.blueYonder[100])};
  }
`

const InputGroup = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  > div:nth-child(2) {
    margin: 2px 0 0 16px;
  }
`
