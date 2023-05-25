import classnames from 'classnames'
import { type ElementType, type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AutoComplete as RsuiteAutoComplete } from 'rsuite'
import styled from 'styled-components'

import { Accent, Size } from '../constants'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { IconButton } from '../elements/IconButton'
import { Label } from '../elements/Label'
import { useClickOutsideEffect } from '../hooks/useClickOutsideEffect'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { useKey } from '../hooks/useKey'
import { Close, Search as SearchIcon } from '../icons'
import { THEME } from '../theme'
import { getRsuiteDataFromOptions } from '../utils/getRsuiteDataFromOptions'
import { getRsuiteValueFromOptionValue } from '../utils/getRsuiteValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { CustomSearch } from '../libs/CustomSearch'
import type { Option, OptionAsRsuiteItemDataType, OptionValueType } from '../types'
import type { AutoCompleteProps as RsuiteAutoCompleteProps } from 'rsuite'
import type { ItemDataType } from 'rsuite/esm/@types/common'
import type { Promisable } from 'type-fest'

export type SearchProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteAutoCompleteProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'open' | 'onSelect' | 'value'
> & {
  MenuItem?: ElementType | undefined
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  customSearch?: CustomSearch<Option<OptionValue>> | undefined
  /** Minimum search query length required to trigger custom search filtering. */
  customSearchMinQueryLength?: number | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isSearchIconVisible?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  onQuery?: ((nextQuery: string | undefined) => Promisable<void>) | undefined
  optionValueKey?: keyof OptionValue | undefined
  options?: Option<OptionValue>[]
  value?: OptionValue | undefined
}
export function Search<OptionValue extends OptionValueType = string>({
  baseContainer,
  className,
  customSearch = undefined,
  customSearchMinQueryLength = 1,
  error,
  isErrorMessageHidden = false,
  isLabelHidden,
  isLight = false,
  isSearchIconVisible = true,
  label,
  MenuItem,
  onChange,
  onQuery,
  options = [],
  optionValueKey,
  value,
  ...originalProps
}: SearchProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */
  const customSearchRef = useRef(customSearch)

  const queryRef = useRef<string | undefined>(undefined)

  const data = useMemo(() => getRsuiteDataFromOptions(options, optionValueKey), [options, optionValueKey])

  const [isOpen, setIsOpen] = useState(false)

  const { forceUpdate } = useForceUpdate()

  const controlledClassName = useMemo(() => classnames('Field-Search', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])

  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([value, originalProps.disabled, originalProps.name])

  const rsuiteValue = useMemo(() => getRsuiteValueFromOptionValue(value, optionValueKey), [value, optionValueKey])
  const [inputValue, setInputValue] = useState<string | undefined>(rsuiteValue)

  // Only used when `customSearch` prop is set
  const [controlledRsuiteData, setControlledRsuiteData] = useState<
    OptionAsRsuiteItemDataType<OptionValue>[] | undefined
  >(customSearch ? [] : undefined)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const clean = useCallback(() => {
    setInputValue('')
    setIsOpen(false)
  }, [])

  const handleChange = useCallback(
    async (nextQuery: OptionValue, event: SyntheticEvent) => {
      if (!(typeof nextQuery === 'string')) {
        return
      }

      if (customSearch && customSearchRef.current) {
        const nextControlledRsuiteData =
          nextQuery.trim().length >= customSearchMinQueryLength
            ? getRsuiteDataFromOptions(customSearchRef.current.find(nextQuery), optionValueKey)
            : []
        setControlledRsuiteData(nextControlledRsuiteData)
      }

      queryRef.current = normalizeString(nextQuery)
      if (event.type === 'change') {
        setInputValue(nextQuery)
        setIsOpen(Boolean(queryRef.current))
      } else {
        setIsOpen(false)
      }

      if (onChange && !queryRef.current) {
        onChange(undefined)
      }

      if (onQuery) {
        onQuery(queryRef.current)
      }
    },
    [customSearch, onChange, onQuery, customSearchMinQueryLength, optionValueKey]
  )
  const handleSelect = useCallback(
    (_, item: Option<OptionValue>) => {
      if (onChange) {
        onChange(item.optionValue)
      }
      setInputValue(item.label)
    },
    [onChange]
  )

  useFieldUndefineEffect(originalProps.disabled, onChange)

  useClickOutsideEffect(boxRef, close, baseContainer)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field className={controlledClassName}>
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <Box ref={boxRef} isLight={isLight}>
        {boxRef.current && (
          <StyledAutoComplete
            key={key}
            $isLight={isLight}
            container={boxRef.current}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // when we don't, we don't need to control that and just pass the non-internally-controlled `rsuiteData`
            data={controlledRsuiteData || data}
            // When we use a custom search, we use `controlledRsuiteData` to provide the matching options (data),
            // that's why we send this "always true" filter to disable Rsuite SelectPicker internal search filtering
            filterBy={(customSearch ? () => true : undefined) as any}
            id={originalProps.name}
            onChange={handleChange}
            onSelect={handleSelect}
            open={isOpen}
            renderMenuItem={(itemLabel, item: ItemDataType<OptionValue>) =>
              MenuItem ? <MenuItem item={item.value} /> : itemLabel
            }
            value={inputValue}
            {...originalProps}
          />
        )}
        {inputValue && (
          <>
            <StyledCloseButton
              accent={Accent.TERTIARY}
              color={THEME.color.slateGray}
              Icon={Close}
              isSearchIconVisible={isSearchIconVisible}
              onClick={clean}
              size={Size.SMALL}
            />
            {isSearchIconVisible && <Separator>|</Separator>}
          </>
        )}
        {isSearchIconVisible && <StyledIconSearch color={THEME.color.slateGray} size={20} />}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledCloseButton = styled(IconButton)<{
  isSearchIconVisible: boolean
}>`
  cursor: pointer;
  height: 30px;
  margin: 5px ${p => (p.isSearchIconVisible ? 0 : 5)}px 5px 5px;
  padding: 8px;
  width: 30px;
`

const StyledIconSearch = styled(SearchIcon)`
  margin: 10px 10px 10px 8px;
`

const Separator = styled.div`
  height: 40px;
  font-weight: 300;
  color: ${p => p.theme.color.lightGray};
  padding-top: 3px;
  font-size: 20.5px;
`

const StyledAutoComplete = styled(RsuiteAutoComplete)<{
  $isLight: boolean
}>`
  font-size: 13px;
  flex-grow: 1;

  .rs-input {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
    border-width: 0 0 1px;
    border-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};

    font-size: 13px;
    width: 100%;
    height: 40px;
    padding: 11px 16px;

    :focus {
      outline: unset;
      border-color: transparent;
    }
    :hover {
      outline: unset;
      border-color: transparent;
    }
  }
`

const Box = styled.div<{
  isLight: boolean
}>`
  background-color: ${p => (p.isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  position: relative;
  width: 100%;
  display: flex;

  > .rs-picker-select {
    > .rs-picker-toggle {
      font-size: 13px;

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
          }
        }
      }
    }
  }
`
