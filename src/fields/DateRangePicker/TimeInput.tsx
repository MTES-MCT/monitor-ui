import { usePressEscapeEffect } from '@hooks/usePressEscapeEffect'
import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from 'fields/shared/utils'
import { isEqual } from 'lodash'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { NumberInput } from './NumberInput'
import { RangedTimePicker } from './RangedTimePicker'
import { isHtmlElement } from './utils'
import { useClickOutsideEffect } from '../../hooks/useClickOutsideEffect'
import { usePrevious } from '../../hooks/usePrevious'
import { Clock } from '../../icons'

import type { NumberInputProps } from './NumberInput'
import type { TimeInputRef, TimeTuple } from './types'
import type { ForwardedRef } from 'react'
import type { Promisable } from 'type-fest'

export type TimeInputProps = Pick<NumberInputProps, 'onBack' | 'onPrevious' | 'onNext'> & {
  baseContainer?: Document | HTMLDivElement | undefined
  // TODO Check why TS thinks there is no `disabled` prop in `NumberInputProps`.
  disabled: boolean
  isCompact: boolean
  isEndDate?: boolean | undefined
  isLight: boolean
  isStartDate?: boolean | undefined
  isTransparent: boolean
  minutesRange?: number | undefined
  name: string
  /** Called each time any time input is changed to a new valid value. */
  onChange: (nextTimeTuple: TimeTuple) => Promisable<void>
  onFocus?: (() => Promisable<void>) | undefined
  /** Called each time any time input receive a keyboard-input change whether the value is valid or not. */
  onInput: () => Promisable<void>
  onNext?: (() => Promisable<void>) | undefined
  onPrevious?: (() => Promisable<void>) | undefined
  readOnly: boolean
  value?: TimeTuple | undefined
}
function TimeInputWithRef(
  {
    baseContainer,
    disabled,
    isCompact,
    isEndDate = false,
    isLight,
    isStartDate = false,
    isTransparent,
    minutesRange = 15,
    name,
    onBack,
    onChange,
    onFocus,
    onInput,
    onNext,
    onPrevious,
    readOnly,
    value
  }: TimeInputProps,
  ref: ForwardedRef<TimeInputRef>
) {
  /* eslint-disable no-null/no-null */
  const boxRef = useRef<HTMLDivElement>(null)
  const hourInputRef = useRef<HTMLInputElement>(null)
  const minuteInputRef = useRef<HTMLInputElement>(null)
  /* eslint-enable no-null/no-null */

  const [controlledValue, setControlledValue] = useState(value)
  const [hasFormatError, setHasFormatError] = useState(false)
  const [hasValidationError, setHasValidationError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false)
  const [timePickerFilter, setTimePickerFilter] = useState<RegExp>(/.*/)

  const previousValue = usePrevious(value)

  const baseDocument = useMemo(
    () => (isHtmlElement(baseContainer) ? baseContainer.ownerDocument : window.document),
    [baseContainer]
  )

  useImperativeHandle<TimeInputRef, TimeInputRef>(ref, () => ({
    box: boxRef.current,
    focus: (isInLastInputOfTheGroup = false) => {
      if (isInLastInputOfTheGroup) {
        minuteInputRef.current?.focus()
      } else {
        hourInputRef.current?.focus()
      }
    },
    getValueAsPartialTimeTuple: () => [
      hourInputRef.current?.value.length ? hourInputRef.current.value : undefined,
      minuteInputRef.current?.value.length ? minuteInputRef.current.value : undefined
    ]
  }))

  const closeRangedTimePicker = useCallback(() => {
    setIsTimePickerOpen(false)
  }, [])

  const handleBack = useCallback(() => {
    if (!onBack) {
      return
    }

    closeRangedTimePicker()

    onBack()
  }, [closeRangedTimePicker, onBack])

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

      onInput()
    },
    [onInput]
  )

  const handleTimePickerChange = useCallback(
    (nextTimeTuple: TimeTuple) => {
      closeRangedTimePicker()

      setControlledValue(nextTimeTuple)

      onChange(nextTimeTuple)
    },
    [closeRangedTimePicker, onChange]
  )

  const openRangedTimePicker = useCallback(() => {
    if (disabled || readOnly) {
      return
    }

    setIsTimePickerOpen(true)
  }, [disabled, readOnly])

  const submit = useCallback(() => {
    if (!hourInputRef.current || !minuteInputRef.current) {
      return
    }

    setHasValidationError(false)

    if (baseDocument.activeElement === hourInputRef.current) {
      minuteInputRef.current.focus()
    }

    if (!hourInputRef.current.value.length || !minuteInputRef.current.value.length) {
      if (minuteInputRef.current.value.length && !hourInputRef.current.value.length) {
        setHasValidationError(true)
      }

      return
    }

    closeRangedTimePicker()

    const nextTimeTuple: TimeTuple = [hourInputRef.current.value, minuteInputRef.current.value]
    onChange(nextTimeTuple)
  }, [baseDocument, closeRangedTimePicker, onChange])

  useClickOutsideEffect(boxRef, closeRangedTimePicker, baseContainer)
  usePressEscapeEffect(closeRangedTimePicker, baseContainer)

  useEffect(() => {
    if (isEqual(value, previousValue) || isFocused) {
      return
    }

    setControlledValue(value)
  }, [isFocused, previousValue, value])

  return (
    <Box
      ref={boxRef}
      $hasError={hasFormatError || hasValidationError}
      $isCompact={isCompact}
      $isDisabled={disabled}
      $isFocused={isFocused}
      $isLight={isLight}
      $isReadOnly={readOnly}
      $isTransparent={isTransparent}
    >
      <InputGroup>
        <div>
          <NumberInput
            ref={hourInputRef}
            aria-label={`Heure${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
            disabled={disabled}
            isLight={isLight}
            max={23}
            min={0}
            name={`${name}Hour`}
            onBack={handleBack}
            onBlur={handleBlur}
            onClick={openRangedTimePicker}
            onFilled={submit}
            onFocus={handleFocus}
            onFormatError={handleFormatError}
            onInput={handleHourInput}
            onNext={() => minuteInputRef.current?.focus()}
            onPrevious={onPrevious}
            readOnly={readOnly}
            size={2}
            value={controlledValue && controlledValue[0]}
          />
          :
          <NumberInput
            ref={minuteInputRef}
            aria-label={`Minute${isStartDate ? ' de début' : ''}${isEndDate ? ' de fin' : ''}`}
            disabled={disabled}
            isLight={isLight}
            max={59}
            min={0}
            name={`${name}Minute`}
            onBack={() => hourInputRef.current?.focus()}
            onBlur={handleBlur}
            onClick={openRangedTimePicker}
            onFilled={submit}
            onFocus={handleFocus}
            onFormatError={handleFormatError}
            onInput={onInput}
            onNext={onNext}
            onPrevious={() => hourInputRef.current?.focus()}
            readOnly={readOnly}
            size={2}
            value={controlledValue && controlledValue[1]}
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
  $isReadOnly: boolean
  $isTransparent: boolean
}>`
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  color: ${getFieldPlaceholderColorFactoryForState('default')};
  display: inline-block;
  font-size: 13px;
  padding: ${p => (p.$isCompact ? '4px 8px 6px' : '2px 8px 4px')};
  position: relative;
  user-select: none;

  :hover {
    border: solid 1px
      ${p =>
        p.$isFocused ? getFieldBorderColorFactoryForState('focus')(p) : getFieldBorderColorFactoryForState('hover')(p)};
    color: ${p =>
      p.$isFocused ? getFieldBorderColorFactoryForState('focus')(p) : getFieldBorderColorFactoryForState('hover')(p)};
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
