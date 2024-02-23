import { getSelectedOptionValuesFromSelectedRsuiteDataItemValues } from '@utils/getSelectedOptionValuesFromSelectedRsuiteDataItemValues'
import classnames from 'classnames'
import { useCallback, useMemo, useRef, useState, type ReactNode, useEffect } from 'react'
import { CheckPicker as RsuiteCheckPicker, type CheckPickerProps as RsuiteCheckPickerProps } from 'rsuite'

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
import { getRsuiteDataItemValuesFromOptionValues } from '../utils/getRsuiteDataItemValuesFromOptionValues'
import { normalizeString } from '../utils/normalizeString'

import type { Promisable } from 'type-fest'

export type CheckPickerProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteCheckPickerProps<string>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value' | 'valueKey'
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
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name])
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
    <Field className={controlledClassName} style={style}>
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>
      <StyledRsuitePickerBox ref={boxRef} $hasError={hasError} $isLight={isLight}>
        {boxRef.current && (
          <RsuiteCheckPicker
            key={key}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData ?? rsuiteData}
            disabled={disabled}
            id={originalProps.name}
            onChange={handleChange}
            onSearch={handleSearch}
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
      </StyledRsuitePickerBox>
      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}
