import { getSelectedOptionValueFromSelectedRsuiteDataItemValue } from '@utils/getSelectedOptionValueFromSelectedRsuiteDataItemValue'
import { handleCustomSearch } from '@utils/handleCustomSearch'
import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  SelectPicker as RsuiteSelectPicker,
  type SelectPickerProps as RsuiteSelectPickerProps,
  type PickerHandle
} from 'rsuite'

import { StyledRsuitePickerBox } from './shared/StyledRsuitePickerBox'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { type CustomSearch } from '../libs/CustomSearch'
import { type Option, type OptionValueType } from '../types/definitions'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValueFromOptionValue } from '../utils/getRsuiteDataItemValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { ItemDataType } from 'rsuite/esm/internals/types'
import type { Promisable } from 'type-fest'

export type SelectProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteSelectPickerProps<any>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value' | 'valueKey'
> & {
  customSearch?: CustomSearch<Option<OptionValue>>
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
  error?: string | undefined
  isCleanable?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: OptionValue | undefined) => Promisable<void>
  optionValueKey?: keyof OptionValue | undefined
  options: Option<OptionValue>[]
  popupWidth?: number | undefined
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
}: SelectProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  // eslint-disable-next-line no-null/no-null
  const comboboxRef = useRef<PickerHandle | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const controlledClassname = useMemo(() => classnames('Field-Select', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name])
  const selectedRsuiteValue = useMemo(
    // eslint-disable-next-line no-null/no-null
    () => (value ? getRsuiteDataItemValueFromOptionValue(value, optionValueKey) : null),
    [value, optionValueKey]
  )
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)

  const { forceUpdate } = useForceUpdate()

  const handleChange = useCallback(
    (nextRsuiteDataItemValue: string | null) => {
      if (!onChange) {
        return
      }

      const nextOptionValue = getSelectedOptionValueFromSelectedRsuiteDataItemValue(rsuiteData, nextRsuiteDataItemValue)

      onChange(nextOptionValue)
    },
    [onChange, rsuiteData]
  )

  const handleSearch = useCallback(
    (nextQuery: string) => {
      const results = handleCustomSearch(
        customSearchMinQueryLength,
        customSearchRef,
        nextQuery,
        optionValueKey,
        rsuiteData
      )
      setControlledRsuiteData(results)
    },
    [customSearchMinQueryLength, optionValueKey, rsuiteData]
  )

  const renderMenuItem = useCallback(
    (itemLabel: React.ReactNode, item: ItemDataType) => {
      if (originalProps.renderMenuItem) {
        return originalProps.renderMenuItem(itemLabel, item)
      }

      return <span title={typeof item.label === 'string' ? item.label : undefined}>{item.label}</span>
    },
    [originalProps]
  )

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
      <Label
        $isDisabled={disabled}
        $isHidden={isLabelHidden}
        $isRequired={isRequired}
        onClick={() => {
          if (!comboboxRef.current) {
            return
          }

          comboboxRef.current.open?.()
          comboboxRef.current?.target?.focus?.()
        }}
      >
        {label}
      </Label>

      <StyledRsuitePickerBox
        ref={boxRef}
        $hasError={hasError}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        $popupWidth={popupWidth}
      >
        {boxRef.current && (
          <RsuiteSelectPicker
            key={key}
            ref={comboboxRef}
            cleanable={isCleanable}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData ?? rsuiteData}
            disabled={disabled}
            disabledItemValues={disabledItemValues}
            onChange={handleChange}
            onSearch={handleSearch}
            // `as any` because we customized `ItemDataType` type by adding `optionValue`,
            // which generates an optional vs required type conflict
            readOnly={readOnly}
            renderMenuItem={renderMenuItem}
            searchable={!!customSearch || searchable}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // that's why we send this "always true" filter to disable Rsuite SelectPicker internal search filtering
            searchBy={(customSearch ? () => true : undefined) as any}
            value={selectedRsuiteValue}
            {...originalProps}
          />
        )}
      </StyledRsuitePickerBox>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}
