import { Accent, Icon, Size } from '@constants'
import { Button } from '@elements/Button'
import { IconButton } from '@elements/IconButton'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { useForceUpdate } from '@hooks/useForceUpdate'
import { normalizeString } from '@utils/normalizeString'
import classnames from 'classnames'
import { Chevron } from 'icons'
import React, { type RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  CheckTreePicker as RsuiteCheckTreePicker,
  type CheckTreePickerProps as RsuiteCheckTreePickerProps
} from 'rsuite'
import styled from 'styled-components'

import { CheckTreePickerBox } from './CheckTreePickerBox'
import {
  computeDisabledValues,
  fromRsuiteValue,
  getOptionsToDisplay,
  getParentRsuiteValue,
  getTreeOptionsBySelectedValues,
  toRsuiteValue
} from './utils'

import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'
import type { Promisable } from 'type-fest'

export type CheckTreePickerProps = Omit<
  RsuiteCheckTreePickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value'
> & {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isMultiSelect?: boolean
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: any[] | undefined) => Promisable<void>
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
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isMultiSelect = true,
  isRequired = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  labelKey = 'label',
  onChange,
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

  const controlledClassName = useMemo(() => classnames('Field-CheckTreePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = Boolean(controlledError)

  const { forceUpdate } = useForceUpdate()

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  const [disabledValues, setDisabledValues] = useState<ValueType>([])
  const uncheckableValues = useMemo(
    () => getParentRsuiteValue(options, valueKey, childrenKey),
    [options, childrenKey, valueKey]
  )

  const rsuiteValue = useMemo(() => {
    const nextRsuiteValue = toRsuiteValue(value, childrenKey, valueKey)
    if (!isMultiSelect && nextRsuiteValue) {
      setDisabledValues(computeDisabledValues(isMultiSelect, nextRsuiteValue, options, childrenKey, valueKey, labelKey))
    } else {
      setDisabledValues([])
    }

    return nextRsuiteValue
  }, [childrenKey, isMultiSelect, labelKey, options, value, valueKey])

  const handleChange = useCallback(
    (nextValue: ValueType) => {
      if (!onChange) {
        return
      }

      const formattedValues = fromRsuiteValue(nextValue, options, childrenKey, valueKey, labelKey)

      onChange(formattedValues)
    },
    [childrenKey, labelKey, onChange, options, valueKey]
  )

  const removeOptions = (valuesToRemove: ValueType, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()

    const valueToUpdate = rsuiteValue?.filter(rvalue => !valuesToRemove.includes(rvalue))
    handleChange(valueToUpdate ?? [])
  }

  return (
    <CheckTreePickerBox
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
        <RsuiteCheckTreePicker
          cascade
          childrenKey={childrenKey}
          container={boxRef.current}
          data={options}
          disabled={disabled}
          disabledItemValues={disabledValues}
          id={originalProps.name}
          labelKey={labelKey}
          onChange={handleChange}
          readOnly={readOnly}
          renderTreeIcon={({ expand }) => (
            <IconButton
              accent={Accent.TERTIARY}
              Icon={Chevron}
              size={Size.SMALL}
              style={{ transform: expand ? 'rotate(0)' : 'rotate(-90deg)' }}
            />
          )}
          renderValue={() => {
            const children = getTreeOptionsBySelectedValues(
              rsuiteValue,
              options,
              childrenKey,
              valueKey,
              labelKey
            ).flatMap(treeOption => treeOption[childrenKey] as TreeOption[])
            const parents = getTreeOptionsBySelectedValues(rsuiteValue, options, childrenKey, valueKey, labelKey)
            if (!shouldShowLabels) {
              return (
                <>
                  <span className="rs-picker-value-list" title={renderedValue}>
                    {renderedValue} <Bold>({parents.length})</Bold>
                  </span>
                  {children.length > 0 && (
                    <span className="rs-picker-value-list" title={renderedChildrenValue}>
                      {renderedChildrenValue} <Bold>({children.length})</Bold>
                    </span>
                  )}
                </>
              )
            }

            const optionsToDisplay = getOptionsToDisplay(options, [...parents, ...children], childrenKey, valueKey)

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
          size={originalProps.size ?? 'sm'}
          uncheckableItemValues={uncheckableValues}
          value={rsuiteValue ?? []}
          valueKey={valueKey}
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
