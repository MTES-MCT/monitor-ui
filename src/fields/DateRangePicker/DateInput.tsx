import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { NumberInput } from './NumberInput'
import { NumberInputIndex } from './useInputControl/types'
import { formatNumberAsDoubleDigit } from './utils'
import { Calendar } from '../../icons'

import type { DateTuple, DateInputRef } from './types'
import type { ForwardedRef } from 'react'
import type { Promisable } from 'type-fest'

export type DateInputProps = {
  // TODO Check why TS thinks there is no `disabled` prop in `NumberInputProps`.
  disabled: boolean
  isCompact: boolean
  isEndDate?: boolean | undefined
  isForcedFocused: boolean
  isLight: boolean
  /**
   * Is this date input included in the `<DateRangePicker />`?
   *
   * @description
   * This affects the input labels.
   */
  isRange?: boolean | undefined
  isStartDate?: boolean | undefined
  /** Called each time all date number input are changed and filled with a new valid value. */
  onChange: (nextDateTuple: DateTuple) => Promisable<void>
  onClick: () => Promisable<void>
  onInput: () => Promisable<void>
  value?: DateTuple | undefined
}
function DateInputWithRef(
  {
    disabled = false,
    isCompact,
    isEndDate = false,
    isForcedFocused,
    isLight,
    isRange = false,
    isStartDate = false,
    onChange,
    onClick,
    onInput,
    value
  }: DateInputProps,
  ref: ForwardedRef<DateInputRef>
) {
  /* eslint-disable no-null/no-null */
  const boxRef = useRef<HTMLDivElement>(null)
  const dayInputRef = useRef<HTMLInputElement>(null)
  const monthInputRef = useRef<HTMLInputElement>(null)
  const yearInputRef = useRef<HTMLInputElement>(null)
  /* eslint-enable no-null/no-null */

  const lastValueBeforeFocusRef = useRef(value)

  const [hasFormatError, setHasFormatError] = useState(false)
  const [hasValidationError, setHasValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const { dayIndex, monthIndex, yearIndex } = useMemo(
    () =>
      isEndDate
        ? {
            dayIndex: NumberInputIndex.END_DAY,
            monthIndex: NumberInputIndex.END_MONTH,
            yearIndex: NumberInputIndex.END_YEAR
          }
        : {
            dayIndex: NumberInputIndex.START_DAY,
            monthIndex: NumberInputIndex.START_MONTH,
            yearIndex: NumberInputIndex.START_YEAR
          },
    [isEndDate]
  )

  const controlledValue = useMemo(() => {
    if (!isFocused) {
      lastValueBeforeFocusRef.current = value
    }

    return lastValueBeforeFocusRef.current
  }, [isFocused, value])

  useImperativeHandle<DateInputRef, DateInputRef>(ref, () => ({
    box: boxRef.current,
    contains: boxRef.current ? boxRef.current.contains.bind(boxRef.current) : () => false,
    getValueAsPartialDateTuple: () => [
      yearInputRef.current?.value.length ? yearInputRef.current.value : undefined,
      monthInputRef.current?.value.length ? monthInputRef.current.value : undefined,
      dayInputRef.current?.value.length ? dayInputRef.current.value : undefined
    ]
  }))

  /**
   * Call `onChange()` if all inputs are filled and valid, otherwise call `onInput()`.
   */
  const callOnChangeIfFilledOrElseOnInput = useCallback(() => {
    if (!yearInputRef.current || !monthInputRef.current || !dayInputRef.current) {
      return
    }

    setHasValidationError(false)

    if (
      yearInputRef.current.value.length !== 4 ||
      monthInputRef.current.value.length !== 2 ||
      dayInputRef.current.value.length !== 2
    ) {
      setHasValidationError(true)

      onInput()

      return
    }

    const nextDateTuple: DateTuple = [
      String(yearInputRef.current.value),
      formatNumberAsDoubleDigit(monthInputRef.current.value),
      formatNumberAsDoubleDigit(dayInputRef.current.value)
    ]

    onChange(nextDateTuple)
  }, [onChange, onInput])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleFormatError = useCallback((hasNextFormatError: boolean) => {
    setHasFormatError(hasNextFormatError)
  }, [])

  return (
    <Box
      ref={boxRef}
      $hasError={hasFormatError || hasValidationError}
      $isCompact={isCompact}
      $isDisabled={disabled}
      $isFocused={isForcedFocused || isFocused}
      $isLight={isLight}
    >
      <div>
        {isRange && isStartDate && <span>Du </span>}
        {isRange && isEndDate && <span>Au </span>}
        <NumberInput
          ref={dayInputRef}
          aria-label={`Jour${isRange && isStartDate ? ' de début' : ''}${isRange && isEndDate ? ' de fin' : ''}`}
          disabled={disabled}
          index={dayIndex}
          isLight={isLight}
          max={31}
          min={1}
          onBlur={handleBlur}
          onClick={onClick}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onInput={callOnChangeIfFilledOrElseOnInput}
          size={2}
          value={controlledValue && controlledValue[2]}
        />
        /
        <NumberInput
          ref={monthInputRef}
          aria-label={`Mois${isRange && isStartDate ? ' de début' : ''}${isRange && isEndDate ? ' de fin' : ''}`}
          disabled={disabled}
          index={monthIndex}
          isLight={isLight}
          max={12}
          min={1}
          onBlur={handleBlur}
          onClick={onClick}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onInput={callOnChangeIfFilledOrElseOnInput}
          size={2}
          value={controlledValue && controlledValue[1]}
        />
        /
        <NumberInput
          ref={yearInputRef}
          aria-label={`Année${isRange && isStartDate ? ' de début' : ''}${isRange && isEndDate ? ' de fin' : ''}`}
          disabled={disabled}
          index={yearIndex}
          isLight={isLight}
          max={2030}
          min={2020}
          onBlur={handleBlur}
          onClick={onClick}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onInput={callOnChangeIfFilledOrElseOnInput}
          size={4}
          value={controlledValue && controlledValue[0]}
        />
      </div>

      {!isCompact && <Calendar />}
    </Box>
  )
}

export const DateInput = forwardRef(DateInputWithRef)

const Box = styled.div<{
  $hasError: boolean
  $isCompact: boolean
  $isDisabled: boolean
  $isFocused: boolean
  $isLight: boolean
}>`
  align-items: center;
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  box-shadow: ${p =>
    p.$hasError || p.$isFocused
      ? `inset 0px 0px 0px 1px ${p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray[100]}`
      : 'none'};
  color: ${p => (p.$isFocused ? p.theme.color.blueGray[100] : p.theme.color.slateGray)};
  display: inline-flex;
  font-size: inherit;
  justify-content: space-between;
  padding: ${p => (p.$isCompact ? '4.5px 8px 7px' : '3px 8px 5px')};
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

  > div:nth-child(2) {
    margin: 2px 0 0 16px;
  }
`
