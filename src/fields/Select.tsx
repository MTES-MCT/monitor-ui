import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { SelectPicker as RsuiteSelectPicker, type SelectPickerProps as RsuiteSelectPickerProps } from 'rsuite'
import styled from 'styled-components'

import { StyledRsuitePickerBox } from './shared/StyledRsuitePickerBox'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionValueType } from '../types/definitions'
import { type RsuiteDataItem } from '../types/internals'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValueFromOptionValue } from '../utils/getRsuiteDataItemValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type SelectProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteSelectPickerProps<any>,
  | 'as'
  | 'container'
  | 'data'
  | 'defaultValue'
  | 'id'
  | 'onChange'
  | 'renderMenuItem'
  | 'renderValue'
  | 'value'
  | 'valueKey'
> & {
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
  className,
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
  style,
  value,
  ...originalProps
}: SelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const { forceUpdate } = useForceUpdate()

  const controlledClassname = useMemo(() => classnames('Field-Select', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name])
  const selectedRsuiteValue = useMemo(
    () => (value ? getRsuiteDataItemValueFromOptionValue(value, optionValueKey) : undefined),
    [value, optionValueKey]
  )

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)

  const handleClean = useCallback(() => {
    if (!onChange) {
      return
    }

    onChange(undefined)
  }, [onChange])

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

  const handleSelect = useCallback(
    (_: string, selectedItem: RsuiteDataItem<OptionValue>) => {
      if (onChange) {
        onChange(selectedItem.optionValue)
      }
    },
    [onChange]
  )

  const renderMenuItem = useCallback((node: ReactNode) => <span title={String(node)}>{String(node)}</span>, [])

  const disabledItemValues = useMemo(
    () => (controlledRsuiteData ?? rsuiteData).filter(option => option.isDisabled).map(option => option.value),
    [controlledRsuiteData, rsuiteData]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className={controlledClassname} style={style}>
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef} $hasError={hasError} $isLight={isLight}>
        {boxRef.current && (
          <RsuiteSelectPicker
            key={key}
            cleanable={isCleanable}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData ?? rsuiteData}
            disabled={disabled}
            disabledItemValues={disabledItemValues}
            id={originalProps.name}
            onClean={handleClean}
            onSearch={handleSearch}
            // `as any` because we customized `ItemDataType` type by adding `optionValue`,
            // which generates an optional vs required type conflict
            onSelect={handleSelect as any}
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

const Box = styled(StyledRsuitePickerBox)``
