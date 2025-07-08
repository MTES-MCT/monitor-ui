import { getSelectedOptionValuesFromSelectedRsuiteDataItemValues } from '@utils/getSelectedOptionValuesFromSelectedRsuiteDataItemValues'
import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode, type RefObject } from 'react'
import { CheckPicker as RsuiteCheckPicker, type CheckPickerProps as RsuiteCheckPickerProps } from 'rsuite'

import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { type OptionValueType } from '../types/definitions'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValuesFromOptionValues } from '../utils/getRsuiteDataItemValuesFromOptionValues'
import { normalizeString } from '../utils/normalizeString'
import { CheckPickerBox } from './shared/CheckPickerBox'

import type { SelectType } from '@types_/commonTypes'

export type CheckPickerProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteCheckPickerProps<string>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value' | 'valueKey'
> &
  SelectType<OptionValue>

export function CheckPicker<OptionValue extends OptionValueType = string>({
  className,
  customSearch,
  customSearchMinQueryLength = 1,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  options,
  optionValueKey,
  popupWidth,
  readOnly = false,
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
  const hasError = Boolean(controlledError)
  const selectedRsuiteValue = useMemo(
    () => getRsuiteDataItemValuesFromOptionValues(value, optionValueKey),
    [optionValueKey, value]
  )
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])

  const { forceUpdate } = useForceUpdate()

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)

  const handleChange = useCallback(
    (nextOptionRsuiteValues: string[]) => {
      if (!onChange) {
        return
      }

      const nextValue = nextOptionRsuiteValues
        ? getSelectedOptionValuesFromSelectedRsuiteDataItemValues(rsuiteData, nextOptionRsuiteValues)
        : []
      const normalizedNextValue = nextValue.length > 0 ? nextValue : undefined

      setControlledRsuiteData(rsuiteData)

      onChange(normalizedNextValue)
    },
    [onChange, rsuiteData]
  )

  const handleSearch = useCallback(
    (nextQuery: string) => {
      if (!customSearchRef.current || nextQuery.trim().length < customSearchMinQueryLength) {
        setControlledRsuiteData(rsuiteData)

        return
      }

      const nextControlledRsuiteData =
        nextQuery.trim().length >= customSearchMinQueryLength
          ? getRsuiteDataItemsFromOptions(customSearchRef.current.find(nextQuery), optionValueKey)
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
    <CheckPickerBox
      boxRef={boxRef as RefObject<HTMLDivElement>}
      className={controlledClassName}
      disabled={disabled}
      error={controlledError}
      hasError={hasError}
      isErrorMessageHidden={isErrorMessageHidden}
      isLabelHidden={isLabelHidden}
      isLight={isLight}
      isRequired={isRequired}
      isTransparent={isTransparent}
      label={label}
      name={originalProps.name}
      popupWidth={popupWidth}
      readOnly={readOnly}
      style={style}
    >
      {boxRef.current && (
        <RsuiteCheckPicker
          container={boxRef.current}
          // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
          // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
          data={controlledRsuiteData ?? rsuiteData}
          disabled={disabled}
          id={originalProps.name}
          onChange={handleChange}
          onSearch={handleSearch}
          readOnly={readOnly}
          renderMenuItem={renderMenuItem}
          searchable={!!customSearch || searchable}
          // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
          // that's why we send this "always true" filter to disable Rsuite CheckPicker internal search filtering
          searchBy={(customSearch ? () => true : undefined) as any}
          size={originalProps.size ?? 'sm'}
          value={selectedRsuiteValue}
          {...originalProps}
        />
      )}
    </CheckPickerBox>
  )
}
