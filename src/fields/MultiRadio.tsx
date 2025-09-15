import { getSelectedOptionValueFromSelectedRsuiteDataItemValue } from '@utils/getSelectedOptionValueFromSelectedRsuiteDataItemValue'
import classnames from 'classnames'
import { eq } from 'lodash-es'
import { type CSSProperties, type ReactNode, type SyntheticEvent, useCallback, useId, useMemo } from 'react'
import { RadioGroup as RsuiteRadioGroup } from 'rsuite'
import styled from 'styled-components'

import { Radio } from './Radio'
import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValueFromOptionValue } from '../utils/getRsuiteDataItemValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types/definitions'
import type { ValueType } from 'rsuite/esm/Radio'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue extends OptionValueType = string> = {
  className?: string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  labelPosition?: 'left' | 'right'
  name: string
  onChange?: (nextValue: OptionValue | undefined) => Promisable<void>
  optionValueKey?: keyof OptionValue
  options: Option<OptionValue>[]
  readOnly?: boolean | undefined
  renderMenuItem?: (label: string, value: OptionValue) => ReactNode
  style?: CSSProperties | undefined
  value?: OptionValue | undefined
}

export function MultiRadio<OptionValue extends OptionValueType = string>({
  className,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  labelPosition = 'right',
  name,
  onChange,
  options,
  optionValueKey,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readOnly = false,
  renderMenuItem,
  style,
  value
}: MultiRadioProps<OptionValue>) {
  const controlledClassName = useMemo(() => classnames('Field-MultiRadio', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, name])
  const multiradioId = useId()

  const selectedRsuiteValue = useMemo(
    // eslint-disable-next-line no-null/no-null
    () => (value !== undefined ? getRsuiteDataItemValueFromOptionValue(value, optionValueKey) : null),
    [value, optionValueKey]
  )
  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])

  const handleChange = useCallback(
    (nextRsuiteDataItemValue: ValueType, _event: SyntheticEvent<Element, Event>) => {
      if (!onChange || readOnly) {
        return
      }

      const nextOptionValue = getSelectedOptionValueFromSelectedRsuiteDataItemValue(
        rsuiteData,
        String(nextRsuiteDataItemValue)
      )

      onChange(nextOptionValue)
    },
    [onChange, readOnly, rsuiteData]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled && !readOnly, onChange)

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      id={multiradioId}
      isLegendHidden={isLabelHidden}
      isRequired={isRequired}
      legend={label}
      style={style}
    >
      <StyledRsuiteRadioGroup
        key={key}
        $isInline={isInline}
        name={name}
        onChange={handleChange}
        value={selectedRsuiteValue ?? ''}
      >
        {rsuiteData.map(rsuiteDataItem => (
          <Radio
            key={rsuiteDataItem.value}
            checked={value !== undefined && eq(rsuiteDataItem.optionValue, value)}
            disabled={!!rsuiteDataItem.isDisabled || disabled}
            hasError={hasError}
            isLight={isLight}
            isTransparent={isTransparent}
            labelPosition={labelPosition}
            name={name}
            readOnly={readOnly}
            value={rsuiteDataItem.value}
          >
            {renderMenuItem ? renderMenuItem(rsuiteDataItem.label, rsuiteDataItem.optionValue) : rsuiteDataItem.label}
          </Radio>
        ))}
      </StyledRsuiteRadioGroup>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const StyledRsuiteRadioGroup = styled(RsuiteRadioGroup)<{
  $isInline: boolean
}>`
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};

  > .Field-Radio:not(:first-child) {
    margin: ${p => (p.$isInline ? '0 0 0 16px' : '8px 0 0 0')};
  }
`
