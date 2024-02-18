import classnames from 'classnames'
import { StyledRsuitePickerBox } from 'fields/shared/StyledRsuitePickerBox'
import { useCallback, useEffect, useMemo, useRef, type ReactNode } from 'react'
import { MultiCascader as RsuiteMultiCascader, type MultiCascaderProps as RsuiteMultiCascaderProps } from 'rsuite'
import styled from 'styled-components'

import {
  countTreeDepth,
  getRsuiteTreeItemsFromTreeOptions,
  getSelectedOptionsValuesFromSelectedTreePositions,
  getSelectedTreePositionsFromSelectedOptionValues
} from './utils'
import { Field } from '../../elements/Field'
import { FieldError } from '../../elements/FieldError'
import { Label } from '../../elements/Label'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useForceUpdate } from '../../hooks/useForceUpdate'
import { useKey } from '../../hooks/useKey'
import { normalizeString } from '../../utils/normalizeString'

import type { OptionValueType, TreeOption } from '../../types/definitions'
import type { Promisable } from 'type-fest'

export type MultiCascaderProps<OptionValue extends OptionValueType = string> = Omit<
  RsuiteMultiCascaderProps,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'renderMenuItem' | 'value'
> & {
  /** Used to pass something else than `window.document` as a base container to attach global events listeners. */
  baseContainer?: Document | HTMLDivElement | null | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue[] | undefined) => Promisable<void>) | undefined
  options: TreeOption<OptionValue>[]
  value?: OptionValue[] | undefined
}
export function MultiCascader<OptionValue extends OptionValueType = string>({
  className,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  options,
  searchable = false,
  style,
  value,
  ...originalProps
}: MultiCascaderProps<OptionValue>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const controlledClassName = useMemo(() => classnames('Field-MultiCascader', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, originalProps.name])
  const rsuiteTreeItems = useMemo(() => getRsuiteTreeItemsFromTreeOptions<OptionValue>(options), [options])
  const selectedTreePositions = useMemo(
    () => (value ? getSelectedTreePositionsFromSelectedOptionValues(rsuiteTreeItems, value) : []),
    [rsuiteTreeItems, value]
  )
  const treeDepth = useMemo(() => countTreeDepth(options), [options])

  const { forceUpdate } = useForceUpdate()

  const handleChange = useCallback(
    (nextRsuiteSelectedTreePaths: string[]) => {
      if (!onChange) {
        return
      }

      const nextValue = getSelectedOptionsValuesFromSelectedTreePositions(options, nextRsuiteSelectedTreePaths)
      const normalizedNextValue = nextValue.length > 0 ? nextValue : undefined

      onChange(normalizedNextValue)
    },
    [onChange, options]
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

      <Box ref={boxRef} $columnCount={treeDepth} $hasError={hasError} $isLight={isLight}>
        {boxRef.current && (
          <RsuiteMultiCascader
            key={key}
            container={boxRef.current}
            data={rsuiteTreeItems}
            disabled={disabled}
            id={originalProps.name}
            onChange={handleChange as any}
            renderMenuItem={renderMenuItem}
            searchable={searchable}
            value={selectedTreePositions}
            {...originalProps}
          />
        )}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const Box = styled(StyledRsuitePickerBox)<{
  $columnCount: number
}>`
  > .rs-picker-popup {
    > div[role='tree'] {
      padding: 0;
      margin: 0;
      max-width: 100%;
      min-width: 100%;

      > [role='group'] {
        max-width: ${p => Math.round(10000 / p.$columnCount) / 100}%;
        min-width: ${p => Math.round(10000 / p.$columnCount) / 100}%;

        > [role='treeitem'] {
          > .rs-check-item {
            > .rs-checkbox-checker {
              > label {
                > svg {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
`
