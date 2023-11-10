import classnames from 'classnames'
import { useCallback, useMemo, useRef, useState, type ReactNode, useEffect } from 'react'
import { CheckPicker as RsuiteCheckPicker, type CheckPickerProps as RsuiteCheckPickerProps } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionValueType } from '../types'
import { getRsuiteDataFromOptions } from '../utils/getRsuiteDataFromOptions'
import { getRsuiteValuesFromOptionValues } from '../utils/getRsuiteValuesFromOptionValues'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type CheckPickerProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteCheckPickerProps<string>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'renderMenuItem' | 'value'
> & {
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
export function CheckPicker<OptionValue extends OptionValueType = string>({
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
}: CheckPickerProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const controlledClassName = useMemo(() => classnames('Field-CheckPicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const rsuiteData = useMemo(() => getRsuiteDataFromOptions(options, optionValueKey), [options, optionValueKey])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name])
  const selectedRsuiteValue = useMemo(
    () => getRsuiteValuesFromOptionValues(value, optionValueKey),
    [optionValueKey, value]
  )

  const { forceUpdate } = useForceUpdate()

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)

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
    (nextOptionRsuiteValues: string[]) => {
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
        setControlledRsuiteData(rsuiteData)

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

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className={controlledClassName} style={style}>
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>
      <Box ref={boxRef} $hasError={hasError} $isLight={isLight}>
        {boxRef.current && (
          <RsuiteCheckPicker
            key={key}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData || rsuiteData}
            disabled={disabled}
            id={originalProps.name}
            onChange={handleChange}
            onSearch={handleSearch}
            renderMenuItem={renderMenuItem}
            searchable={!!customSearch || searchable}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // that's why we send this "always true" filter to disable Rsuite CheckPicker internal search filtering
            searchBy={(customSearch ? () => true : undefined) as any}
            size={originalProps.size || 'sm'}
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
  $isLight: boolean
}>`
  position: relative;
  user-select: none;
  width: 100%;

  > .rs-picker {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    cursor: pointer;
    width: 100%;
    height: 30px;

    > .rs-picker-toggle {
      background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
      border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.gainsboro)} !important;
      cursor: inherit;
      font-size: 13px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      :hover {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.slateGray)} !important;
      }

      :active,
      :focus {
        border: solid 1px ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.blueGray)} !important;
      }

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1;
            vertical-align: 1px;
          }
          .rs-picker-value-count {
            background-color: ${p => p.theme.color.charcoal} !important;
            line-height: 18px !important;
          }

          .rs-picker-toggle-caret {
            right: 10px;
          }
          .rs-picker-toggle-clean,
          .rs-picker-toggle-caret {
            top: 5px;
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

    > .rs-picker-check-menu {
      padding-top: 6px;
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
