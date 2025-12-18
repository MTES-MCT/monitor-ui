import { Accent, Icon, Size } from '@constants'
import { AccentInsensitiveHighlight } from '@elements/AccentInsensitiveHighlight'
import { Button } from '@elements/Button'
import { IconButton } from '@elements/IconButton'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { useForceUpdate } from '@hooks/useForceUpdate'
import { CustomSearch } from '@libs/CustomSearch'
import { normalizeString } from '@utils/normalizeString'
import classnames from 'classnames'
import { Chevron } from 'icons'
import React, { type RefObject, type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  CheckTreePicker as RsuiteCheckTreePicker,
  type PickerHandle,
  type CheckTreePickerProps as RsuiteCheckTreePickerProps
} from 'rsuite'
import styled from 'styled-components'

import { CheckTreePickerBox } from './CheckTreePickerBox'
import {
  computeDisabledValues,
  deepCloneExtensible,
  flattenAllDescendants,
  fromRsuiteValue,
  generateUniqueIds,
  getOptionsToDisplay,
  getParentRsuiteValue,
  getTreeOptionsBySelectedValues,
  hasThreeLevels,
  mergeResultsByParent,
  toRsuiteValue
} from './utils'
import { getFormattedNodePath } from './utils/getNodePath'

import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'
import type { Promisable } from 'type-fest'

export type CheckTreePickerProps = Omit<
  RsuiteCheckTreePickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value'
> & {
  customSearch?: CustomSearch
  customSearchMinQueryLength?: number
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isMultiSelect?: boolean
  isRequired?: boolean | undefined
  isSelect?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: any[] | undefined) => Promisable<void>
  onSearch?: (query: string, event: SyntheticEvent<Element, Event>) => void
  options: TreeOption[]
  popupWidth?: number | undefined
  renderedChildrenValue?: string
  renderedValue?: string
  shouldShowLabels?: boolean
  value?: TreeOption[] | undefined
}

export function CheckTreePicker({
  childrenKey = 'children',
  className,
  customSearch,
  customSearchMinQueryLength = 1,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isMultiSelect = true,
  isRequired = false,
  isSelect = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  labelKey = 'label',
  onChange,
  onSearch,
  options,
  popupWidth,
  readOnly = false,
  renderedChildrenValue = 'Sous-thématique',
  renderedValue = 'Thématique',
  shouldShowLabels = true,
  style,
  value,
  valueKey = 'value',
  ...originalProps
}: CheckTreePickerProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  // eslint-disable-next-line no-null/no-null
  const treeRef = useRef<PickerHandle | null>(null)
  const controlledClassName = useMemo(() => classnames('Field-CheckTreePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const isSearchable = originalProps.searchable ?? true
  const hasError = Boolean(controlledError)
  const [searchKeyword, setSearchKeyword] = useState('')
  const { forceUpdate } = useForceUpdate()

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  // Generate unique IDs for options to support duplicate values in multiple categories
  const optionsWithIds = useMemo(
    () => generateUniqueIds(options, childrenKey, valueKey),
    [options, childrenKey, valueKey]
  )

  useEffect(() => {
    if (isSearchable) {
      setControlledOptions(optionsWithIds)
    }
  }, [optionsWithIds, isSearchable])

  const localCustomSearch = useMemo(
    () =>
      customSearch ??
      new CustomSearch(
        optionsWithIds,
        [
          {
            name: [labelKey]
          },
          {
            name: [`${childrenKey}.${labelKey}`]
          },
          {
            name: [`${childrenKey}.${childrenKey}.${labelKey}`]
          }
        ],
        { childrenKey, isStrict: true, withCacheInvalidation: true }
      ),
    [customSearch, optionsWithIds, labelKey, childrenKey]
  )

  const [controlledOptions, setControlledOptions] = useState(isSearchable ? optionsWithIds : [])

  const [disabledValues, setDisabledValues] = useState<ValueType>([])
  const uncheckableValues = useMemo(
    () => getParentRsuiteValue(optionsWithIds, valueKey, childrenKey),
    [optionsWithIds, childrenKey, valueKey]
  )

  const rsuiteValue = useMemo(() => {
    const nextRsuiteValue = toRsuiteValue(value, optionsWithIds, childrenKey, valueKey)
    if (!isMultiSelect && nextRsuiteValue) {
      setDisabledValues(
        computeDisabledValues(isMultiSelect, nextRsuiteValue, optionsWithIds, childrenKey, valueKey, labelKey)
      )
    } else {
      setDisabledValues([])
    }

    return nextRsuiteValue
  }, [childrenKey, isMultiSelect, optionsWithIds, value, valueKey, labelKey])

  const handleSearch = useCallback(
    (nextQuery: string, event: SyntheticEvent<Element, Event>) => {
      setSearchKeyword(nextQuery)
      if (!localCustomSearch || nextQuery.trim().length < customSearchMinQueryLength) {
        setControlledOptions(optionsWithIds)

        return
      }

      const searchResults = localCustomSearch.find(nextQuery)
      const foundOptions = searchResults
        .flatMap(option => fromRsuiteValue([option[valueKey]], optionsWithIds, false, childrenKey, valueKey, labelKey))
        .map(item => {
          const children = item?.[childrenKey] as TreeOption[] | undefined

          return !children || children.length === 0
            ? { [labelKey]: item?.[labelKey], [valueKey]: item?.[valueKey] }
            : item
        })
        .filter((result): result is TreeOption => result !== undefined)

      // Add all selected values to the results
      const selectedOptions =
        fromRsuiteValue(rsuiteValue ?? [], optionsWithIds, false, childrenKey, valueKey, labelKey) ?? []
      const merged = mergeResultsByParent(
        [...foundOptions, ...selectedOptions].map(item => deepCloneExtensible(item)),
        childrenKey,
        valueKey,
        labelKey
      )

      setControlledOptions(merged)

      if (onSearch) {
        onSearch(nextQuery, event)
      }
    },
    [
      childrenKey,
      customSearchMinQueryLength,
      labelKey,
      localCustomSearch,
      onSearch,
      optionsWithIds,
      rsuiteValue,
      valueKey
    ]
  )

  const handleChange = (nextValue: ValueType) => {
    if (!onChange) {
      return
    }

    const hasExistingSelection = rsuiteValue && rsuiteValue.length > 0
    const shouldFilterToNewValues = isSelect && hasExistingSelection

    const valuesToProcess = shouldFilterToNewValues ? nextValue.filter(item => !rsuiteValue.includes(item)) : nextValue

    const formattedValues = fromRsuiteValue(valuesToProcess, optionsWithIds, true, childrenKey, valueKey, labelKey)
    onChange(formattedValues)

    if (isSelect) {
      treeRef.current?.close?.()
    }
  }

  const removeOptions = (valuesToRemove: ValueType, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    const valueToUpdate = rsuiteValue?.filter(rvalue => !valuesToRemove.includes(rvalue))
    handleChange(valueToUpdate ?? [])
  }

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <CheckTreePickerBox
      boxRef={boxRef as RefObject<HTMLDivElement>}
      className={controlledClassName}
      disabled={disabled}
      error={controlledError}
      hasError={hasError}
      hasThreeLevels={hasThreeLevels(options, childrenKey)}
      isErrorMessageHidden={isErrorMessageHidden}
      isLabelHidden={isLabelHidden}
      isLight={isLight}
      isRequired={isRequired}
      isSelect={isSelect}
      isTransparent={isTransparent}
      label={label}
      onLabelClick={() => {
        if (!treeRef.current) {
          return
        }
        treeRef.current.open?.()
        treeRef.current.target?.focus?.()
      }}
      popupWidth={popupWidth}
      readOnly={readOnly}
      style={style}
    >
      {boxRef.current && (
        <RsuiteCheckTreePicker
          ref={treeRef}
          cascade
          childrenKey={childrenKey}
          container={boxRef.current}
          data={isSearchable ? controlledOptions : optionsWithIds}
          disabled={disabled}
          disabledItemValues={disabledValues}
          id={originalProps.name}
          labelKey={labelKey}
          onChange={handleChange}
          onClose={() => {
            setControlledOptions(optionsWithIds)
            setSearchKeyword('')
          }}
          onSearch={handleSearch}
          readOnly={readOnly}
          renderTreeIcon={(_, isExpanded) => (
            <IconExpander>
              <IconButton
                accent={Accent.TERTIARY}
                Icon={Chevron}
                size={Size.SMALL}
                style={{ transform: isExpanded ? 'rotate(0)' : 'rotate(-90deg)' }}
              />
            </IconExpander>
          )}
          renderTreeNode={item => {
            if (typeof item[labelKey] !== 'string') {
              return item[labelKey]
            }

            return <AccentInsensitiveHighlight label={item[labelKey]} query={searchKeyword} />
          }}
          renderValue={() => {
            if (isSelect && rsuiteValue && rsuiteValue.length > 0) {
              const formattedPath = getFormattedNodePath(
                rsuiteValue[0] as string | number,
                optionsWithIds,
                childrenKey,
                valueKey,
                labelKey
              )

              return <span title={formattedPath}>{formattedPath}</span>
            }

            const parents = getTreeOptionsBySelectedValues(
              rsuiteValue,
              optionsWithIds,
              false,
              childrenKey,
              valueKey,
              labelKey
            )
            const allDescendants = flattenAllDescendants(parents, childrenKey)
            const selectedOptions = [...parents, ...allDescendants].filter(Boolean)

            if (!shouldShowLabels) {
              return (
                <>
                  <span className="rs-picker-value-list" title={renderedValue}>
                    {renderedValue} <Bold>({parents.length})</Bold>
                  </span>
                  {allDescendants.length > 0 && (
                    <span className="rs-picker-value-list" title={renderedChildrenValue}>
                      {renderedChildrenValue} <Bold>({allDescendants.length})</Bold>
                    </span>
                  )}
                </>
              )
            }

            const optionsToDisplay = getOptionsToDisplay(optionsWithIds, selectedOptions, childrenKey, valueKey)

            return (
              <Wrapper>
                <SubWrapper>
                  {optionsToDisplay.map(option => {
                    const isParent =
                      option[childrenKey] !== undefined && (option[childrenKey] as TreeOption[]).length > 0

                    return (
                      <SelectedOptionContainer key={option[valueKey] as string | number}>
                        <SelectedOptionLabel $isLight={isLight || isTransparent} title={option[labelKey] as string}>
                          {option[labelKey] as string}
                          {isParent && ' (Tout)'}
                        </SelectedOptionLabel>
                        <StyledButton
                          $isLight={isLight || isTransparent}
                          accent={Accent.TERTIARY}
                          Icon={Icon.Close}
                          onClick={e => {
                            removeOptions(
                              isParent
                                ? (option[childrenKey] as TreeOption[]).flatMap(
                                    child => child[valueKey] as string | number
                                  )
                                : [option[valueKey] as string | number],
                              e
                            )
                          }}
                          size={Size.SMALL}
                          tabIndex={0}
                          title={`Retirer ${option[labelKey]}`}
                        />
                      </SelectedOptionContainer>
                    )
                  })}
                </SubWrapper>
              </Wrapper>
            )
          }}
          searchable={isSearchable}
          searchBy={(isSearchable ? () => true : undefined) as any}
          size={originalProps.size ?? 'sm'}
          uncheckableItemValues={uncheckableValues}
          value={rsuiteValue ?? []}
          valueKey={valueKey}
          virtualized={false}
          {...originalProps}
        />
      )}
    </CheckTreePickerBox>
  )
}

const Bold = styled.span`
  font-weight: bold;
  margin-right: 4px;
`
const StyledButton = styled(Button)<{ $isLight?: boolean }>`
  padding: 0 3px;
  background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};

  &:hover,
  &._hover {
    background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
    border: 1px solid ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
    color: ${p => p.theme.color.maximumRed};
  }

  &:active,
  &._active {
    background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
    border: 1px solid ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
    color: ${p => p.theme.color.maximumRed};
  }

  > .Element-IconBox {
    margin-right: 0px;

    > svg {
      height: 10px;
      width: 10px;
    }
  }
`

const IconExpander = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Wrapper = styled.div`
  display: contents;
`
const SubWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-width: calc(100% - 6px);
`

const SelectedOptionContainer = styled.div`
  display: flex;
  gap: 1px;
  padding-top: 1px;
  max-width: 100%;
`
const SelectedOptionLabel = styled.span<{ $isLight?: boolean }>`
  background-color: ${p => (p.$isLight ? p.theme.color.gainsboro : p.theme.color.white)};
  font-size: 11px;
  padding: 2px 8px 1px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  white-space: nowrap;
`
