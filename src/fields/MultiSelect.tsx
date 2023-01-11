import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { TagPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutside } from '../hooks/useClickOutside'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { TagPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type MultiSelectProps = Omit<
  TagPickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null
  defaultValue?: string[]
  error?: string
  /** Width in pixels */
  fixedWidth?: number
  isLabelHidden?: boolean
  isLight?: boolean
  label: string
  name: string
  onChange?: (nextValue: string[] | undefined) => Promisable<void>
  options: Option[]
}
export function MultiSelect({
  baseContainer,
  error,
  fixedWidth = 5,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: MultiSelectProps) {
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
    (nextValue: string[] | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = !nextValue || !nextValue.length ? undefined : nextValue

      onChange(normalizedNextValue)
    },
    [onChange]
  )
  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  useClickOutside(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} onClick={open}>
        {boxRef.current && (
          <StyledTagPicker
            key={key}
            $fixedWidth={fixedWidth}
            $isLight={isLight}
            container={boxRef.current}
            data={options}
            id={originalProps.name}
            onChange={handleChange}
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

// TODO A width seems to be mandatory in rsuite which is a very dirty behavior.
// We should hack that.
const StyledTagPicker = styled(TagPicker)<{
  $fixedWidth: number
  $isLight: boolean
}>`
  border: 0;
  cursor: pointer;
  width: ${p => p.$fixedWidth}px;

  > .rs-picker-toggle {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    cursor: inherit;
  }
`

const Box = styled.div`
  position: relative;

  > .rs-picker-input {
    > .rs-picker-toggle {
      border: solid 1px ${p => p.theme.color.gainsboro} !important;
      font-size: 13px;
      line-height: 1.3846;
      padding: 5px 40px 5px 8px !important;

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
            /* margin-top: -2px; */
          }
        }
      }
    }

    > .rs-picker-tag-wrapper {
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
`
