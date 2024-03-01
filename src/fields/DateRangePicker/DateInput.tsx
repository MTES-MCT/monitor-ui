import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from 'fields/shared/utils'
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { NumberInput } from './NumberInput'
import { formatNumberAsDoubleDigit, isHtmlElement } from './utils'
import { Calendar } from '../../icons'

import type { NumberInputProps } from './NumberInput'
import type { DateTuple, DateInputRef } from './types'
import type { CommonFieldStyleProps } from 'fields/shared/types'
import type { ForwardedRef } from 'react'
import type { Promisable } from 'type-fest'

export type DateInputProps = Pick<NumberInputProps, 'onBack' | 'onPrevious' | 'onNext'> & {
  baseContainer: Document | HTMLDivElement | undefined
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
   * Impact the input labels.
   */
  isRange?: boolean | undefined
  isStartDate?: boolean | undefined
  isTransparent: boolean
  name: string
  /** Called each time any date input is changed to a new valid value. */
  onChange: (nextDateTuple: DateTuple, isFilled: boolean) => Promisable<void>
  onClick: () => Promisable<void>
  /** Called each time any date input receive a keyboard-input change whether the value is valid or not. */
  onInput: () => Promisable<void>
  readOnly: boolean
  value?: DateTuple | undefined
}
function DateInputWithRef(
  {
    baseContainer,
    disabled = false,
    isCompact,
    isEndDate = false,
    isForcedFocused,
    isLight,
    isRange = false,
    isStartDate = false,
    isTransparent,
    name,
    onBack,
    onChange,
    onClick,
    onInput,
    onNext,
    onPrevious,
    readOnly,
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

  const baseDocument = useMemo(
    () => (isHtmlElement(baseContainer) ? baseContainer.ownerDocument : window.document),
    [baseContainer]
  )
  const controlledValue = useMemo(() => {
    if (!isFocused) {
      lastValueBeforeFocusRef.current = value
    }

    return lastValueBeforeFocusRef.current
  }, [isFocused, value])

  const key = JSON.stringify(lastValueBeforeFocusRef.current)

  useImperativeHandle<DateInputRef, DateInputRef>(ref, () => ({
    box: boxRef.current,
    contains: boxRef.current ? boxRef.current.contains.bind(boxRef.current) : () => false,
    focus: (isInLastInputOfTheGroup = false) => {
      if (isInLastInputOfTheGroup) {
        yearInputRef.current?.focus()
      } else {
        dayInputRef.current?.focus()
      }
    },
    getValueAsPartialDateTuple: () => [
      yearInputRef.current?.value.length ? yearInputRef.current.value : undefined,
      monthInputRef.current?.value.length ? monthInputRef.current.value : undefined,
      dayInputRef.current?.value.length ? dayInputRef.current.value : undefined
    ]
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
    if (!yearInputRef.current || !monthInputRef.current || !dayInputRef.current) {
      return
    }

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
      $isReadOnly={readOnly}
      $isTransparent={isTransparent}
    >
      <div>
        {isRange && isStartDate && <span>Du </span>}
        {isRange && isEndDate && <span>Au </span>}
        <NumberInput
          key={`${key}-day`}
          ref={dayInputRef}
          aria-label={`Jour${isRange && isStartDate ? ' de début' : ''}${isRange && isEndDate ? ' de fin' : ''}`}
          disabled={disabled}
          isLight={isLight}
          max={31}
          min={1}
          name={`${name}Day`}
          onBack={onBack}
          onBlur={handleBlur}
          onClick={onClick}
          onFilled={submit}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onInput={onInput}
          onNext={() => monthInputRef.current?.focus()}
          onPrevious={onPrevious}
          readOnly={readOnly}
          size={2}
          value={controlledValue && controlledValue[2]}
        />
        /
        <NumberInput
          key={`${key}-month`}
          ref={monthInputRef}
          aria-label={`Mois${isRange && isStartDate ? ' de début' : ''}${isRange && isEndDate ? ' de fin' : ''}`}
          disabled={disabled}
          isLight={isLight}
          max={12}
          min={1}
          name={`${name}Month`}
          onBack={() => dayInputRef.current?.focus()}
          onBlur={handleBlur}
          onClick={onClick}
          onFilled={submit}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onInput={onInput}
          onNext={() => yearInputRef.current?.focus()}
          onPrevious={() => dayInputRef.current?.focus()}
          readOnly={readOnly}
          size={2}
          value={controlledValue && controlledValue[1]}
        />
        /
        <NumberInput
          key={`${key}-year`}
          ref={yearInputRef}
          aria-label={`Année${isRange && isStartDate ? ' de début' : ''}${isRange && isEndDate ? ' de fin' : ''}`}
          disabled={disabled}
          isLight={isLight}
          name={`${name}Year`}
          onBack={() => monthInputRef.current?.focus()}
          onBlur={handleBlur}
          onClick={onClick}
          onFilled={submit}
          onFocus={handleFocus}
          onFormatError={handleFormatError}
          onInput={onInput}
          onNext={onNext}
          onPrevious={() => monthInputRef.current?.focus()}
          readOnly={readOnly}
          size={4}
          value={controlledValue && controlledValue[0]}
        />
      </div>

      {!isCompact && <Calendar />}
    </Box>
  )
}

export const DateInput = forwardRef(DateInputWithRef)

const Box = styled.div<
  CommonFieldStyleProps & {
    $isCompact: boolean
    $isFocused: boolean
  }
>`
  align-items: center;
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  color: ${getFieldPlaceholderColorFactoryForState('default')};
  display: inline-flex;
  font-size: 13px;
  line-height: 1;
  justify-content: space-between;
  padding: ${p => (p.$isCompact ? '4px 8px 6px' : '2px 8px 4px')};
  user-select: none;

  &:hover {
    border: solid 1px
      ${p =>
        p.$isFocused ? getFieldBorderColorFactoryForState('focus')(p) : getFieldBorderColorFactoryForState('hover')(p)};
    color: ${p =>
      p.$isFocused
        ? getFieldPlaceholderColorFactoryForState('focus')(p)
        : getFieldPlaceholderColorFactoryForState('hover')(p)};
  }

  > div:nth-child(2) {
    margin: 2px 0 0 16px;
  }
`
