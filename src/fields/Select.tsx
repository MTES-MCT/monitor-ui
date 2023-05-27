import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { SelectPicker, type SelectPickerProps } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionAsRsuiteItemDataType, type OptionValueType } from '../types'
import { getRsuiteDataFromOptions } from '../utils/getRsuiteDataFromOptions'
import { getRsuiteValueFromOptionValue } from '../utils/getRsuiteValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type SelectProps<OptionValue extends OptionValueType = string> = Omit<
  SelectPickerProps<any>,
  | 'as'
  | 'container'
  | 'data'
  | 'defaultValue'
  | 'id'
  | 'onChange'
  | 'open'
  | 'renderMenuItem'
  | 'renderValue'
  | 'value'
  | 'valueKey'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  customSearch?: CustomSearch<Option<OptionValue>> | undefined
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
  error?: string | undefined
  isCleanable?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  optionValueKey?: keyof OptionValue | undefined
  options: Option<OptionValue>[]
  value?: OptionValue | undefined
}
export function Select<OptionValue extends OptionValueType = string>({
  baseContainer,
  customSearch,
  customSearchMinQueryLength = 1,
  disabled = false,
  error,
  isCleanable = true,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  options,
  optionValueKey,
  searchable = false,
  value,
  ...originalProps
}: SelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const { forceUpdate } = useForceUpdate()

  const controlledError = useMemo(() => normalizeString(error), [error])
  const rsuiteData = useMemo(() => getRsuiteDataFromOptions(options, optionValueKey), [options, optionValueKey])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name, value])
  const selectedRsuiteValue = useMemo(
    () => getRsuiteValueFromOptionValue(value, optionValueKey),
    [value, optionValueKey]
  )

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleClean = useCallback(() => {
    if (!onChange) {
      return
    }

    onChange(undefined)
  }, [onChange])

  const handleSearch = useCallback(
    (nextQuery: string) => {
      if (!customSearchRef.current || nextQuery.trim().length < customSearchMinQueryLength) {
        return
      }

      const nextControlledRsuiteData =
        nextQuery.trim().length >= customSearchMinQueryLength
          ? getRsuiteDataFromOptions(customSearchRef.current.find(nextQuery), optionValueKey)
          : rsuiteData

      setControlledRsuiteData(nextControlledRsuiteData)
    },
    [customSearchMinQueryLength, optionValueKey, rsuiteData]
  )

  const handleSelect = useCallback(
    (_: string, selectedItem: OptionAsRsuiteItemDataType<OptionValue>) => {
      close()

      if (onChange) {
        onChange(selectedItem.optionValue)
      }
    },
    [close, onChange]
  )

  const renderMenuItem = useCallback((node: ReactNode) => <span title={String(node)}>{String(node)}</span>, [])

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
        targetElement.classList.contains('rs-picker-toggle-value') ||
        targetElement.classList.contains('rs-stack-item') ||
        targetElement.classList.contains('rs-picker-toggle-caret') ||
        targetElement.classList.contains('rs-picker-toggle-placeholder')
      ) {
        setIsOpen(!isOpen)
      }
    },
    [isOpen]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useClickOutsideEffect(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className="Field-Select">
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} $hasError={hasError} onClick={toggle}>
        {boxRef.current && (
          <StyledSelectPicker
            key={key}
            $isLight={isLight}
            cleanable={isCleanable}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData || rsuiteData}
            disabled={disabled}
            id={originalProps.name}
            onClean={handleClean}
            onSearch={handleSearch}
            // `as any` because we customized `ItemDataType` type by adding `optionValue`,
            // which generates an optional vs required type conflict
            onSelect={handleSelect as any}
            open={isOpen}
            renderMenuItem={renderMenuItem}
            searchable={!!customSearch || searchable}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // that's why we send this "always true" filter to disable Rsuite SelectPicker internal search filtering
            searchBy={(customSearch ? () => true : undefined) as any}
            value={selectedRsuiteValue}
            {...originalProps}
          />
        )}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
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

const Box = styled.div<{
  $hasError: boolean
}>`
  position: relative;
  user-select: none;
  width: 100%;

  > .rs-picker-select {
    width: 100%;

    > .rs-picker-toggle {
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.gainsboro)} !important;
      font-size: 13px;
      line-height: 1.3846;
      padding: 4px 40px 6px 8px;

      :hover {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder[100])} !important;
      }

      :active,
      :focus {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray[100])} !important;
      }

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.3846;
          }

          > .rs-picker-toggle-clean.rs-btn-close {
            top: 4px !important;
          }

          > svg {
            height: 18px;
            margin-top: -2px;
          }
        }
      }
    }
  }

  > .rs-picker-menu {
    max-width: 100%;

    > .rs-picker-search-bar {
      > .rs-picker-search-bar-input {
        background-color: ${p => p.theme.color.white};
        border: solid 1px ${p => p.theme.color.lightGray};
        border-radius: 0;
        font-size: 13px;
        padding: 4px 8px 6px 8px;
      }

      > svg {
        color: ${p => p.theme.color.lightGray};
        top: 11px;
      }
    }

    > .rs-picker-select-menu {
      > div[role='option'] {
        > .rs-picker-select-menu-item {
          font-size: 13px;
          line-height: 1.3846;
          overflow: hidden;
          padding: 6px 12px 10px 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`
