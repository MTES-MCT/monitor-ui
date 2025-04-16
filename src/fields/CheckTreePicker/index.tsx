import { Accent, Size } from '@constants'
import { IconButton } from '@elements/IconButton'
import { CheckPickerBox } from '@fields/shared/CheckPickerBox'
import classnames from 'classnames'
import { Chevron } from 'icons'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  CheckTreePicker as RsuiteCheckTreePicker,
  type CheckTreePickerProps as RsuiteCheckTreePickerProps
} from 'rsuite'
import styled from 'styled-components'

import { computeDisabledValues, fromRsuiteValue, getTreeOptionsBySelectedValues, toRsuiteValue } from './utils'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { normalizeString } from '../../utils/normalizeString'

import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'
import type { Promisable } from 'type-fest'

export type CheckTreePickerProps = Omit<
  RsuiteCheckTreePickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value'
> & {
  childrenKey?: string
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
  onChange?: (nextValue: TreeOption[] | undefined) => Promisable<void>
  options: TreeOption[]
  popupWidth?: number | undefined
  renderedChildrenValue?: string
  renderedValue?: string
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
  onChange,
  options,
  popupWidth,
  readOnly = false,
  renderedChildrenValue = 'Sous-thématique',
  renderedValue = 'Thématique',
  style,
  value,
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

  const rsuiteValue = useMemo(() => toRsuiteValue(value, childrenKey), [childrenKey, value])

  const [disabledValues, setDisabledValues] = useState<ValueType>(
    computeDisabledValues(isMultiSelect, rsuiteValue, options, childrenKey)
  )

  const handleChange = useCallback(
    (nextValue: ValueType) => {
      if (!onChange) {
        return
      }

      const formattedValues = fromRsuiteValue(nextValue, options, childrenKey)

      if (!isMultiSelect && formattedValues) {
        setDisabledValues(computeDisabledValues(isMultiSelect, nextValue, options, childrenKey))
      } else {
        setDisabledValues([])
      }

      onChange(formattedValues)
    },
    [childrenKey, isMultiSelect, onChange, options]
  )

  return (
    <CheckPickerBox
      boxRef={boxRef}
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
            const childrenCount = getTreeOptionsBySelectedValues(rsuiteValue, options, childrenKey).flatMap(
              treeOption => treeOption[childrenKey]
            ).length
            const parentCount = getTreeOptionsBySelectedValues(rsuiteValue, options, childrenKey).length

            return (
              <>
                <span className="rs-picker-value-list" title={renderedValue}>
                  {renderedValue} <Bold>({parentCount})</Bold>
                </span>
                {childrenCount > 0 && (
                  <span className="rs-picker-value-list" title={renderedChildrenValue}>
                    {renderedChildrenValue} <Bold>({childrenCount})</Bold>
                  </span>
                )}
              </>
            )
          }}
          size={originalProps.size ?? 'sm'}
          value={rsuiteValue ?? []}
          {...originalProps}
        />
      )}
    </CheckPickerBox>
  )
}

const Bold = styled.span`
  font-weight: bold;
  margin-right: 4px;
`
