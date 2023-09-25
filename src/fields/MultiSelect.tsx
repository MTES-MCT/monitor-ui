import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { TagPicker, type TagPickerProps } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionValueType } from '../types'
import { getRsuiteDataFromOptions } from '../utils/getRsuiteDataFromOptions'
import { getRsuiteValueFromOptionValue } from '../utils/getRsuiteValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type MultiSelectProps<OptionValue extends OptionValueType = string> = Omit<
  TagPickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'renderMenuItem' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  customSearch?: CustomSearch<Option<OptionValue>> | undefined
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  optionValueKey?: keyof OptionValue | undefined
  options: Option<OptionValue>[]
  value?: OptionValue[] | undefined
}
export function MultiSelect<OptionValue extends OptionValueType = string>({
  baseContainer,
  className,
  customSearch,
  customSearchMinQueryLength = 1,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  options,
  optionValueKey,
  searchable = false,
  style,
  value,
  ...originalProps
}: MultiSelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const controlledClassName = useMemo(() => classnames('Field-MultiSelect', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const rsuiteData = useMemo(() => getRsuiteDataFromOptions(options, optionValueKey), [options, optionValueKey])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name, value])
  const selectedRsuiteValue = useMemo(
    () => (value || []).map(valueItem => getRsuiteValueFromOptionValue(valueItem, optionValueKey)),
    [optionValueKey, value]
  )

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)
  const [isOpen, setIsOpen] = useState(false)

  const { forceUpdate } = useForceUpdate()

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const getOptionValuesFromRsuiteDataValues = useCallback(
    (rsuiteValues: string[]) =>
      rsuiteData.reduce((optionsValues, rsuiteDataItem) => {
        if (!rsuiteValues.includes(rsuiteDataItem.value)) {
          return optionsValues
        }

        return [...optionsValues, rsuiteDataItem.optionValue]
      }, [] as OptionValue[]),
    [rsuiteData]
  )

  const handleChange = useCallback(
    (nextOptionRsuiteValues: string[] | null) => {
      if (!onChange) {
        return
      }

      const nextValue = nextOptionRsuiteValues ? getOptionValuesFromRsuiteDataValues(nextOptionRsuiteValues) : []
      const normalizedNextValue = nextValue.length > 0 ? nextValue : undefined

      setControlledRsuiteData(rsuiteData)

      onChange(normalizedNextValue)
    },
    [getOptionValuesFromRsuiteDataValues, onChange, rsuiteData]
  )

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
        targetElement.classList.contains('rs-picker-tag-wrapper') ||
        targetElement.classList.contains('rs-picker-toggle-caret')
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
    <Field className={controlledClassName} style={style}>
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} $hasError={hasError} $isActive={isOpen} $isLight={isLight} onClick={toggle}>
        {boxRef.current && (
          <TagPicker
            key={key}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData || rsuiteData}
            disabled={disabled}
            id={originalProps.name}
            onChange={handleChange}
            onClick={toggle}
            onSearch={handleSearch}
            open={isOpen}
            renderMenuItem={renderMenuItem}
            searchable={!!customSearch || searchable}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // that's why we send this "always true" filter to disable Rsuite TagPicker internal search filtering
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

const Box = styled.div<{
  $hasError: boolean
  $isActive: boolean
  $isLight: boolean
}>`
  position: relative;
  user-select: none;
  width: 100%;

  > .rs-picker-input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: solid 1px
      ${p => {
        if (p.$hasError) {
          return p.theme.color.maximumRed
        }
        if (p.$isActive) {
          return p.theme.color.blueGray
        }

        return p.theme.color.gainsboro
      }} !important;
    cursor: pointer;
    width: 100%;

    :hover {
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueYonder)} !important;
    }

    :active,
    :focus {
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray)} !important;
    }

    > .rs-picker-toggle {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: 0;
      bottom: 0;
      cursor: inherit;
      font-size: 13px;
      height: 30px;
      line-height: 1.3846;
      padding: 5px 40px 0 8px !important;
      top: 0;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1;
            vertical-align: 1px;
          }

          .rs-picker-toggle-caret {
            right: 10px;
          }
          .rs-picker-toggle-clean,
          .rs-picker-toggle-caret {
            padding: 0;
            top: 5px;
          }
        }
      }
    }

    > .rs-picker-tag-wrapper {
      min-height: 30px;
      padding: 0 !important;

      > .rs-tag {
        background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
        font-size: 11px;
        line-height: 1.3636; // = 15px

        > .rs-tag-icon-close {
          bottom: 0;
          padding: 3px 6px;

          > svg {
            height: 10px;
            width: 10px;
          }
        }
      }

      > .rs-picker-search {
        > .rs-picker-search-input {
          padding: 0 8px !important;

          > input {
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
