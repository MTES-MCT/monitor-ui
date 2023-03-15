import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TagPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { MouseEvent, ReactNode } from 'react'
import type { TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type MultiSelectProps<OptionValue = string> = Omit<
  TagPickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'renderMenuItem' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  defaultValue?: OptionValue[] | undefined
  error?: string | undefined
  /** Width in pixels */
  fixedWidth?: number | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
}
export function MultiSelect<OptionValue = string>({
  baseContainer,
  defaultValue,
  error,
  fixedWidth,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: MultiSelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [isOpen, setIsOpen] = useState(false)

  const controlledDefaultValue = useMemo(
    () => (!originalProps.disabled ? defaultValue : undefined),
    [defaultValue, originalProps.disabled]
  )
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledDefaultValue, originalProps.disabled, originalProps.name])

  const { forceUpdate } = useForceUpdate()

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    (nextValue: OptionValue[] | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = !nextValue || !nextValue.length ? undefined : nextValue

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  const renderMenuItem = useCallback((_label: ReactNode): ReactNode => <span title={String(_label)}>{_label}</span>, [])

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
        targetElement.classList.contains('rs-picker-tag-wrapper') ||
        targetElement.classList.contains('rs-picker-toggle-caret')
      ) {
        setIsOpen(!isOpen)
      }
    },
    [isOpen]
  )

  useFieldUndefineEffect(originalProps.disabled, onChange)

  useClickOutsideEffect(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <Box ref={boxRef} $hasError={hasError} $isActive={isOpen} $isLight={isLight} onClick={toggle}>
        {boxRef.current && (
          <TagPicker
            key={key}
            container={boxRef.current}
            data={options as any}
            defaultValue={controlledDefaultValue}
            id={originalProps.name}
            onChange={handleChange}
            onClick={toggle}
            open={isOpen}
            renderMenuItem={renderMenuItem}
            searchable={searchable}
            {...originalProps}
          />
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const Box = styled.div<{
  $hasError: boolean
  $isActive: boolean
  $isLight: boolean
}>`
  position: relative;
  width: 100%;

  > .rs-picker-input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: solid 1px
      ${p => {
        if (p.$hasError) {
          return p.theme.color.maximumRed
        }
        if (p.$isActive) {
          return p.theme.color.blueGray[100]
        }

        return p.theme.color.gainsboro
      }} !important;
    cursor: pointer;
    width: 100%;

    :hover {
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder[100])} !important;
    }

    :active,
    :focus {
      border: solid 1px ${p => p.theme.color.blueGray[100]} !important;
    }

    > .rs-picker-toggle {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: 0;
      cursor: inherit;
      font-size: 13px;
      line-height: 1.3846;
      padding: 5px 40px 5px 8px !important;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.5385; // = 20px
          }

          > svg {
            height: 18px;
          }
        }
      }
    }

    > .rs-picker-tag-wrapper {
      > .rs-tag {
        background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
      }
      .rs-picker-search {
        .rs-picker-search-input {
          padding: 0 8px !important;

          input {
            font-size: 13px;
            line-height: 1.3846;
          }
        }
      }
    }
  }

  > .rs-picker-menu {
    max-width: 100%;

    > .rs-picker-check-menu {
      margin: 0;

      > div[role='option'] {
        > .rs-check-item {
          > .rs-checkbox-checker {
            > label {
              font-size: 13px;
              line-height: 1.3846;
              overflow: hidden;
              padding: 8px 12px 8px 38px;
              text-overflow: ellipsis;
              white-space: nowrap;

              > .rs-checkbox-wrapper {
                left: 12px;
                top: 10px !important;
              }
            }
          }
        }
      }
    }
  }
`
