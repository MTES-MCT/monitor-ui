import { Accent, Icon, Size } from '@constants'
import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { IconButton } from '@elements/IconButton'
import { Label } from '@elements/Label'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { useForceUpdate } from '@hooks/useForceUpdate'
import { THEME } from '@theme'
import { getRsuiteDataItemsFromOptions } from '@utils/getRsuiteDataItemsFromOptions'
import { getSelectedOptionFromOptionValue } from '@utils/getSelectedOptionFromOptionValue'
import { normalizeString } from '@utils/normalizeString'
import classnames from 'classnames'
import { type ElementType, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AutoComplete as RsuiteAutoComplete } from 'rsuite'
import styled from 'styled-components'

import { StyledInputBox } from './shared/StyledInputBox'
import { StyledRsuitePickerBox } from './shared/StyledRsuitePickerBox'

import type { CustomSearch } from '@libs/CustomSearch'
import type { Option, OptionValueType } from '@types_/definitions'
import type { RsuiteDataItem } from '@types_/internals'
import type { AutoCompleteProps as RsuiteAutoCompleteProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SearchProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteAutoCompleteProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'onSelect' | 'size' | 'value' | 'valueKey'
> & {
  MenuItem?: ElementType | undefined
  customSearch?: CustomSearch<Option<OptionValue>> | undefined
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isSearchIconHidden?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  key?: string | undefined
  label: string
  name: string
  onChange?: (nextValue: OptionValue | undefined) => Promisable<void>
  onQuery?: (nextQuery: string | undefined) => Promisable<void>
  optionValueKey?: keyof OptionValue | undefined
  options?: Option<OptionValue>[]
  popupWidth?: number | undefined
  readOnly?: boolean | undefined
  size?: Size | undefined
  value?: OptionValue | undefined
}

export function Search<OptionValue extends OptionValueType = string>({
  className,
  customSearch = undefined,
  customSearchMinQueryLength = 1,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden,
  isLight = false,
  isRequired = false,
  isSearchIconHidden = true,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  key,
  label,
  MenuItem,
  onChange,
  onQuery,
  options = [],
  optionValueKey,
  popupWidth,
  readOnly = false,
  size = Size.NORMAL,
  style,
  value,
  ...originalProps
}: SearchProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const [query, setQuery] = useState<string>('')

  const defaultOption = useMemo(
    () => getSelectedOptionFromOptionValue<OptionValue>(options, value, optionValueKey),
    [value, options, optionValueKey]
  )

  // Ref to prevent OnChange to trigger when we send optionValue from OnSelect
  const isSelecting = useRef(false)
  const controlledClassName = useMemo(() => classnames('Field-Search', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])
  const { forceUpdate } = useForceUpdate()

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState(customSearch ? rsuiteData : undefined)

  // Set default value
  useEffect(() => {
    if (onChange && defaultOption?.value !== undefined) {
      onChange(defaultOption.value)
    }
    setQuery(previousQuery => defaultOption?.label ?? previousQuery)
  }, [defaultOption, onChange])

  const clear = useCallback(() => {
    if (onChange) {
      onChange(undefined)
    }
    if (onQuery) {
      onQuery(undefined)
    }

    setQuery('')
  }, [onChange, onQuery])

  // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
  // that's why we send this "always true" filter to disable Rsuite SelectPicker internal search filtering
  const filterBy: any = customSearch && query.length > 0 ? () => true : undefined

  const handleChange = useCallback(
    (nextQuery: string) => {
      if (isSelecting.current) {
        isSelecting.current = false

        return
      }
      setQuery(nextQuery)

      if (onQuery) {
        onQuery(nextQuery.length > 0 ? nextQuery : undefined)
      }
    },
    [onQuery]
  )

  useEffect(() => {
    if (customSearch) {
      const nextControlledRsuiteData =
        query.trim().length >= customSearchMinQueryLength
          ? getRsuiteDataItemsFromOptions(customSearch.find(query), optionValueKey)
          : rsuiteData

      setControlledRsuiteData(nextControlledRsuiteData)
    }
  }, [forceUpdate, customSearch, customSearchMinQueryLength, optionValueKey, query, rsuiteData])

  const handleSelect = useCallback(
    (_value: any, nextOption: RsuiteDataItem<OptionValue> | undefined) => {
      if (onChange) {
        isSelecting.current = true
        onChange(nextOption?.optionValue)
      }
      setQuery('')
    },
    [onChange]
  )

  const renderMenuItem = useCallback(
    (originalMenuItem: ReactNode, rsuiteDataItem: RsuiteDataItem<OptionValue>) =>
      MenuItem ? <MenuItem item={rsuiteDataItem.value} /> : originalMenuItem,
    [MenuItem]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className={controlledClassName} style={style}>
      <Label $isDisabled={disabled} $isHidden={isLabelHidden} $isRequired={isRequired} htmlFor={originalProps.name}>
        {label}
      </Label>

      <StyledInputBox
        $hasError={hasError}
        $hasIcon={!isSearchIconHidden}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        $size={size}
      >
        {boxRef.current && (
          <RsuiteAutoComplete
            key={key}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData ?? rsuiteData}
            disabled={disabled}
            filterBy={filterBy}
            id={originalProps.name}
            onChange={(nextValue: string) => handleChange(nextValue)}
            onSelect={(nextValue: any, nextOption: any, event) => {
              event.preventDefault()
              event.stopPropagation()
              handleSelect(nextValue, nextOption)
            }}
            readOnly={readOnly}
            renderMenuItem={renderMenuItem as any}
            value={query}
            {...originalProps}
          />
        )}

        {query && (
          <>
            <StyledCloseButton
              $isSearchIconHidden={isSearchIconHidden}
              $size={size}
              accent={Accent.TERTIARY}
              className="Field-Search__ClearButton"
              color={THEME.color.slateGray}
              Icon={Icon.Close}
              onClick={clear}
              size={Size.SMALL}
            />
            {!isSearchIconHidden && (
              <Separator $isLight={isLight} $isTransparent={isTransparent} $size={size}>
                |
              </Separator>
            )}
          </>
        )}
        {!isSearchIconHidden && <Icon.Search color={THEME.color.slateGray} size={20} />}
      </StyledInputBox>
      <StyledRsuitePickerBox
        ref={boxRef}
        $hasError={hasError}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        $popupWidth={popupWidth}
      />

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledCloseButton = styled(IconButton)<{
  $isSearchIconHidden: boolean
  $size: Size
}>`
  position: absolute;
  right: 0;
  top: 0;
  margin: ${p => (p.$size === Size.LARGE ? 9 : 5)}px;

  ${p =>
    !p.$isSearchIconHidden &&
    `
    margin: ${p.$size === Size.LARGE ? '8.5px 50px 0 0' : '4px 39px 0 0'};
  `}
`

const Separator = styled.div<{
  $isLight: boolean
  $isTransparent: boolean
  $size: Size
}>`
  color: ${p =>
    // eslint-disable-next-line no-nested-ternary
    p.$isTransparent ? (p.$isLight ? p.theme.color.charcoal : p.theme.color.lightGray) : p.theme.color.charcoal};
  cursor: default;
  font-size: ${p => (p.$size === Size.LARGE ? 20 : 14)}px;
  font-weight: 300;
  line-height: 1;
  margin: ${p => (p.$size === Size.LARGE ? '7px 39px 0 0' : '5px 33px 0 0')} !important;
  position: absolute;
  right: 0;
  top: 0;
`
