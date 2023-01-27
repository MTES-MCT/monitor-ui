import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SelectPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutside } from '../hooks/useClickOutside'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { MouseEvent } from 'react'
import type { SelectPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SelectProps = Omit<
  SelectPickerProps<any>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: string | undefined
  error?: string | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: string | undefined) => Promisable<void>) | undefined
  options: Option[]
}
export function Select({
  baseContainer,
  error,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: SelectProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)

  const { forceUpdate } = useForceUpdate()

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    (nextValue: string | null) => {
      close()

      if (onChange) {
        const normalizedNextValue = nextValue ?? undefined

        onChange(normalizedNextValue)
      }
    },
    [close, onChange]
  )

  const toggle = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      let targetElement = event.target as HTMLElement

      if (targetElement.tagName === 'path') {
        if (targetElement.parentElement) {
          targetElement = targetElement.parentElement
        }
      }

      if (
        targetElement.classList.contains('rs-picker-toggle') ||
        targetElement.classList.contains('rs-stack-item') ||
        targetElement.classList.contains('rs-picker-toggle-caret') ||
        targetElement.classList.contains('rs-picker-toggle-placeholder')
      ) {
        setIsOpen(!isOpen)
      }
    },
    [isOpen]
  )

  useClickOutside(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} onClick={toggle}>
        {boxRef.current && (
          <StyledSelectPicker
            key={key}
            $isLight={isLight}
            container={boxRef.current}
            data={options}
            id={originalProps.name}
            // The `unknown` type from Rsuite library is wrong. It should be inferred from `data` prop type.
            // `onChange: ((value: unknown, event: React.SyntheticEvent<Element, Event>) => void) | undefined`
            onChange={handleChange as any}
            open={isOpen}
            searchable={searchable}
            {...originalProps}
          />
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledSelectPicker = styled(SelectPicker)<{
  $isLight: boolean
}>`
  > .rs-picker-toggle {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: 0;
  }
`

const Box = styled.div`
  position: relative;
  width: 100%;

  > .rs-picker-select {
    width: 100%;

    > .rs-picker-toggle {
      border: solid 1px ${p => p.theme.color.gainsboro} !important;
      font-size: 13px;
      line-height: 1.3846;
      padding: 4px 40px 6px 8px;

      :hover {
        border: solid 1px ${p => p.theme.color.blueYonder[100]} !important;
      }

      :active,
      :focus {
        border: solid 1px ${p => p.theme.color.blueGray[100]} !important;
      }

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.3846;
          }

          > svg {
            height: 18px;
            margin-top: -2px;
          }
        }
      }
    }
  }
`
