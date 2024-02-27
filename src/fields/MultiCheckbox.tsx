import classnames from 'classnames'
import { equals, includes, reject } from 'ramda'
import { useCallback, useMemo, type CSSProperties } from 'react'
import styled from 'styled-components'

import { Checkbox } from './Checkbox'
import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types/definitions'
import type { Promisable } from 'type-fest'

export type MultiCheckboxProps<OptionValue extends OptionValueType = string> = {
  className?: string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: OptionValue[] | undefined) => Promisable<void>
  options: Option<OptionValue>[]
  readOnly?: boolean | undefined
  style?: CSSProperties | undefined
  value?: OptionValue[] | undefined
}
export function MultiCheckbox<OptionValue extends OptionValueType = string>({
  className,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isInline = false,
  isLabelHidden = false,
  isLight = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readOnly = false,
  style,
  value
}: MultiCheckboxProps<OptionValue>) {
  const controlledClassName = useMemo(() => classnames('Field-MultiCheckbox', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([value, disabled, name])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      const nextCheckedOptionValues = isChecked
        ? [...(value ?? []), nextOptionValue]
        : reject(equals(nextOptionValue))(value ?? [])

      const normalizedNextValue = nextCheckedOptionValues.length ? nextCheckedOptionValues : undefined

      onChange(normalizedNextValue)
    },
    [onChange, value]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      legend={label}
      style={style}
    >
      <ChecboxesBox key={key} $isInline={isInline} $isReadOnly={readOnly}>
        {options.map((option, index) => (
          <Checkbox
            key={JSON.stringify(option.value)}
            checked={includes(option.value, value ?? [])}
            disabled={!!option.isDisabled || disabled}
            hasError={hasError}
            isLight={isLight}
            isTransparent={isTransparent}
            label={option.label}
            name={`${name}${index}`}
            onChange={(isChecked: boolean = false) => handleChange(option.value, isChecked)}
            readOnly={readOnly}
          />
        ))}
      </ChecboxesBox>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const ChecboxesBox = styled.div<{
  $isInline: boolean
  $isReadOnly: boolean
}>`
  color: ${p => p.theme.color.gunMetal};
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};

  > .Field-Checkbox:not(:first-child) {
    margin: ${p => (p.$isInline ? '0 0 0 16px' : '8px 0 0 0')};
  }
`
