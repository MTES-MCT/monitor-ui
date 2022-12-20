import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import styled from 'styled-components'

import { Calendar } from '../../icons'
import { NumberInput } from './NumberInput'
import { formatNumberAsDoubleDigit } from './utils'

import type { NumberInputProps } from './NumberInput'
import type { DateTuple, DateOrTimeInputRef } from './types'
import type { ForwardedRef, MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

export type DateInputProps = Pick<NumberInputProps, 'onBack' | 'onPrevious' | 'onNext'> & {
  defaultValue?: DateTuple
  isCompact: boolean
  isEndDate?: boolean
  isForcedFocused: boolean
  isLight: boolean
  isStartDate?: boolean
  /** Called each time the date input is changed to a new valid value. */
  onChange: (nextDateTuple: DateTuple, isFilled: boolean) => Promisable<void>
  onClick: () => Promisable<void>
}
function DateInputWithRef(
  {
    defaultValue,
    isCompact,
    isEndDate = false,
    isForcedFocused,
    isLight,
    isStartDate = false,
    onBack,
    onChange,
    onClick,
    onNext,
    onPrevious
  }: DateInputProps,
  ref: ForwardedRef<DateOrTimeInputRef>
) {
  const boxRef = useRef() as MutableRefObject<HTMLDivElement>
  const dayInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const monthInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const yearInputRef = useRef() as MutableRefObject<HTMLInputElement>

  const [hasFormatError, setHasFormatError] = useState(false)
  const [hasValidationError, setHasValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useImperativeHandle<DateOrTimeInputRef, DateOrTimeInputRef>(ref, () => ({
    box: boxRef.current,
    focus: (isInLastInputOfTheGroup = false) => {
      if (isInLastInputOfTheGroup) {
        yearInputRef.current.focus()
      } else {
        dayInputRef.current.focus()
      }
    }
  }))

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleFormatError = useCallback((hasNextFormatError: boolean) => {
    setHasFormatError(hasNextFormatError)
  }, [])

  const submit = useCallback(() => {
    setHasValidationError(false)

    const isFilled = window.document.activeElement === yearInputRef.current

    switch (window.document.activeElement) {
      case dayInputRef.current:
        monthInputRef.current.focus()
        break

      case monthInputRef.current:
        yearInputRef.current.focus()
        break

      default:
        break
    }

    if (
      !yearInputRef.current.value.length ||
      !monthInputRef.current.value.length ||
      !dayInputRef.current.value.length
    ) {
      if (
        (monthInputRef.current.value.length && !dayInputRef.current.value.length) ||
        (yearInputRef.current.value.length &&
          (!dayInputRef.current.value.length || !monthInputRef.current.value.length))
      ) {
        setHasValidationError(true)
      }

      return
    }

    const nextDateTuple: DateTuple = [
      String(yearInputRef.current.value),
      formatNumberAsDoubleDigit(monthInputRef.current.value),
      formatNumberAsDoubleDigit(dayInputRef.current.value)
    ]

    onChange(nextDateTuple, isFilled)
  }, [onChange])

  return (
    <Box
      ref={boxRef}
      $hasError={hasFormatError || hasValidationError}
      $isFocused={isForcedFocused || isFocused}
      $isLight={isLight}
    >
      <div>
        {isStartDate && <span>Du </span>}
        {isEndDate && <span>Au </span>}
        <NumberInput
          ref={dayInputRef}
          aria-label={`Jour${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
          defaultValue={defaultValue && formatNumberAsDoubleDigit(defaultValue[2])}
          max={31}
          min={1}
          onBack={onBack}
          onBlur={handleBlur}
          onClick={onClick}
          onFilled={submit}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onNext={() => monthInputRef.current.focus()}
          onPrevious={onPrevious}
          size={2}
        />
        /
        <NumberInput
          ref={monthInputRef}
          aria-label={`Mois${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
          defaultValue={defaultValue && formatNumberAsDoubleDigit(defaultValue[1])}
          max={12}
          min={1}
          onBack={() => dayInputRef.current.focus()}
          onBlur={handleBlur}
          onClick={onClick}
          onFilled={submit}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onNext={() => yearInputRef.current.focus()}
          onPrevious={() => dayInputRef.current.focus()}
          size={2}
        />
        /
        <NumberInput
          ref={yearInputRef}
          aria-label={`Année${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
          defaultValue={defaultValue && defaultValue[0]}
          max={2030}
          min={2020}
          onBack={() => monthInputRef.current.focus()}
          onBlur={handleBlur}
          onClick={onClick}
          onFilled={submit}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onNext={onNext}
          onPrevious={() => monthInputRef.current.focus()}
          size={4}
        />
      </div>

      {!isCompact && <Calendar />}
    </Box>
  )
}

export const DateInput = forwardRef(DateInputWithRef)

const Box = styled.div<{
  $hasError: boolean
  $isFocused: boolean
  $isLight: boolean
}>`
  align-items: center;
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  box-shadow: ${p =>
    p.$hasError || p.$isFocused
      ? `inset 0px 0px 0px 1px ${p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray[100]}`
      : 'none'};
  color: ${p => p.theme.color.blueGray[100]};
  display: inline-flex;
  font-size: inherit;
  justify-content: space-between;
  padding: 5px 8px 7px;
  user-select: none;

  :hover {
    box-shadow: ${p => `inset 0px 0px 0px 1px ${p.theme.color.blueYonder[100]}`};
  }

  > div:first-child {
    > span {
      color: ${p => p.theme.color.slateGray};
    }
  }
  > div:nth-child(2) {
    margin: 1px 0 0 32px;
  }
`
