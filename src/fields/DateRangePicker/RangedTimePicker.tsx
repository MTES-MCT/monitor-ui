import { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { getRangedTimeOptions } from './utils'
import { stopMouseEventPropagation } from '../../utils/stopMouseEventPropagation'

import type { TimeTuple } from './types'
import type { Promisable } from 'type-fest'

type RangedTimePickerProps = {
  filter: RegExp
  minutesRange: number
  onChange: (nextTimeTuple: TimeTuple) => Promisable<void>
}
export function RangedTimePicker({ filter, minutesRange, onChange }: RangedTimePickerProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)

  const rangedTimeOptions = useMemo(() => getRangedTimeOptions(minutesRange), [minutesRange])
  const filteredRangedTimeOptions = useMemo(
    () => rangedTimeOptions.filter(({ label }) => filter.test(label)),
    [filter, rangedTimeOptions]
  )

  const spannedLabels = useMemo(
    () =>
      filteredRangedTimeOptions.map(({ label }) => {
        const [hours, minutes] = label.split(':')

        return (
          <>
            {' '}
            <span>{hours}</span>:<span>{minutes}</span>
          </>
        )
      }),
    [filteredRangedTimeOptions]
  )

  const handleBoxKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        event.preventDefault()

        const nextSelectedOptionIndex =
          selectedOptionIndex < filteredRangedTimeOptions.length - 1 ? selectedOptionIndex + 1 : 0

        setSelectedOptionIndex(nextSelectedOptionIndex)

        window.document.querySelectorAll('.js-ranged-time-picker-option')[nextSelectedOptionIndex]?.scrollIntoView()
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()

        const nextSelectedOptionIndex =
          selectedOptionIndex > 0 ? selectedOptionIndex - 1 : filteredRangedTimeOptions.length - 1

        setSelectedOptionIndex(nextSelectedOptionIndex)

        window.document.querySelectorAll('.js-ranged-time-picker-option')[nextSelectedOptionIndex]?.scrollIntoView()
      }

      if (['Enter', 'Space', 'Tab'].includes(event.key)) {
        const selectedRangedTimeOption = filteredRangedTimeOptions[selectedOptionIndex]
        if (!selectedRangedTimeOption) {
          return
        }

        onChange(selectedRangedTimeOption.value)
      }
    },
    [filteredRangedTimeOptions, selectedOptionIndex, onChange]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleBoxKeyDown, {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      once: true
    })

    return () => {
      window.removeEventListener('keydown', handleBoxKeyDown)
    }
  }, [handleBoxKeyDown])

  useEffect(() => {
    setSelectedOptionIndex(0)
  }, [filteredRangedTimeOptions])

  if (!filteredRangedTimeOptions.length) {
    return <></>
  }

  return (
    <Box className="Field-DateRangePicker__RangedTimePicker" onClick={stopMouseEventPropagation} role="listbox">
      {filteredRangedTimeOptions.map(({ label, value }, index) => (
        <Option
          key={label}
          $isSelected={index === selectedOptionIndex}
          aria-selected={false}
          className="js-ranged-time-picker-option"
          onClick={() => onChange(value)}
          role="option"
          tabIndex={-1}
        >
          {spannedLabels[index]}
        </Option>
      ))}
    </Box>
  )
}

const Box = styled.div`
  background-color: ${p => p.theme.color.white};
  box-shadow: inset 0px 0px 0px 1px ${p => p.theme.color.lightGray};
  display: flex;
  flex-direction: column;
  left: 0;
  max-height: 160px;
  overflow: auto;
  position: absolute;
  /* Non-WebKit Firefox Compatibility */
  scrollbar-color: ${p => p.theme.color.lightGray};
  scrollbar-width: thin;
  top: 30px;
  width: 100%;
  z-index: 9999;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border: 0;
    background-color: ${p => p.theme.color.lightGray};
  }
  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.color.gainsboro};
  }
`

const Option = styled.div<{
  $isSelected: boolean
}>`
  background-color: ${p => (p.$isSelected ? p.theme.color.blueGray : 'transparent')};
  color: ${p => (p.$isSelected ? p.theme.color.white : p.theme.color.gunMetal)};
  cursor: pointer;
  line-height: 1;
  padding: 8.5px 0 10.5px 8px;

  &:hover {
    background-color: ${p => (p.$isSelected ? p.theme.color.blueGray : p.theme.color.blueYonder25)};
  }

  > span {
    display: inline-flex;
    justify-content: center;
    width: 16px;
  }
`
