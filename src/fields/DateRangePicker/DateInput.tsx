import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { Calendar } from '../../icons'
import { NumberInput } from './NumberInput'
import { formatNumberAsDoubleDigit, isHtmlElement } from './utils'

import type { NumberInputProps } from './NumberInput'
import type { DateTuple, DateOrTimeInputRef } from './types'
import type { ForwardedRef, MutableRefObject } from 'react'
import type { Promisable } from 'type-fest'

export type DateInputProps = Pick<NumberInputProps, 'onBack' | 'onPrevious' | 'onNext'> & {
  baseContainer: Document | HTMLDivElement | undefined
  defaultValue?: DateTuple | undefined
  // TODO Check why TS thinks there is no `disabled` prop in `NumberInputProps`.
  disabled: boolean
  isCompact: boolean
  isEndDate?: boolean | undefined
  isForcedFocused: boolean
  isLight: boolean
  isStartDate?: boolean | undefined
  /** Called each time the date input is changed to a new valid value. */
  onChange: (nextDateTuple: DateTuple, isFilled: boolean) => Promisable<void>
  onClick: () => Promisable<void>
}
function DateInputWithRef(
  {
    baseContainer,
    defaultValue,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    disabled = false,
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

  const baseDocument = useMemo(
    () => (isHtmlElement(baseContainer) ? baseContainer.ownerDocument : window.document),
    [baseContainer]
  )

  useImperativeHandle<DateOrTimeInputRef, DateOrTimeInputRef>(ref, () => ({
    box: boxRef.current,
    contains: boxRef.current.contains.bind(boxRef.current),
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

    const isFilled = baseDocument.activeElement === yearInputRef.current

    switch (baseDocument.activeElement) {
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
  }, [baseDocument, onChange])

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
        {isStartDate && <span>Du </span>}
        {isEndDate && <span>Au </span>}
        <NumberInput
          ref={dayInputRef}
          aria-label={`Jour${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
          defaultValue={defaultValue && formatNumberAsDoubleDigit(defaultValue[2])}
          disabled={disabled}
          isLight={isLight}
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
          disabled={disabled}
          isLight={isLight}
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
          disabled={disabled}
          isLight={isLight}
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
