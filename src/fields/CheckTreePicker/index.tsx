import { CheckPickerBox } from '@fields/shared/CheckPickerBox'
import classnames from 'classnames'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import {
  CheckTreePicker as RsuiteCheckTreePicker,
  type CheckTreePickerProps as RsuiteCheckTreePickerProps
} from 'rsuite'

import { findItemByValue, fromRsuiteValue, toRsuiteValue } from './utils'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { normalizeString } from '../../utils/normalizeString'

import type { TreeOption } from './types'
import type { ValueType } from 'rsuite/esm/CheckTreePicker'
import type { Promisable } from 'type-fest'

export type CheckTreePickerProps<TreeOptionValue extends TreeOption[]> = Omit<
  RsuiteCheckTreePickerProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value'
> & {
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: TreeOptionValue | undefined) => Promisable<void>
  options: TreeOptionValue
  popupWidth?: number | undefined
  value?: TreeOptionValue | undefined
}

export function CheckTreePicker({
  className,
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
  popupWidth,
  readOnly = false,
  style,
  value,
  ...originalProps
}: CheckTreePickerProps<TreeOption[]>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)
  /** Instance of `CustomSearch` */

  const controlledClassName = useMemo(() => classnames('Field-CheckTreePicker', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = Boolean(controlledError)

  const { forceUpdate } = useForceUpdate()

  const rsuiteValue = useMemo(() => toRsuiteValue(value), [value])

  const handleChange = useCallback(
    (nextValue: ValueType) => {
      if (!onChange) {
        return
      }

      const formattedValues = fromRsuiteValue(nextValue, options, rsuiteValue)

      onChange(formattedValues)
    },
    [onChange, options, rsuiteValue]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

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
          cascade={false}
          container={boxRef.current}
          data={options}
          disabled={disabled}
          id={originalProps.name}
          onChange={handleChange}
          readOnly={readOnly}
          renderValue={() => {
            const labels = rsuiteValue?.map(val => findItemByValue(options, val)?.item.label)

            return (
              <>
                <span className="rs-picker-value-list" title={labels?.join(', ')}>
                  {labels?.join(', ')}
                </span>
                <span className="rs-picker-value-count">{labels?.length}</span>
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
