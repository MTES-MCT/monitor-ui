import classnames from 'classnames'
import { equals } from 'ramda'
import { useCallback, useMemo, type CSSProperties } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue extends OptionValueType = string> = {
  className?: string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  options: Option<OptionValue>[]
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
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  options,
  style,
  value
}: MultiRadioProps<OptionValue>) {
  const controlledClassName = useMemo(() => classnames('Field-MultiRadio', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([value, disabled, name])

  const handleChange = useCallback(
    (nextOptionValue: OptionValue, isChecked: boolean) => {
      if (!onChange) {
        return
      }

      const nextCheckedOptionValue = isChecked ? nextOptionValue : undefined

      onChange(nextCheckedOptionValue)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      hasError={hasError}
      isLegendHidden={isLabelHidden}
      isLight={isLight}
      legend={label}
      style={style}
    >
      <Box key={key} $hasError={hasError} $isInline={isInline}>
        {options.map(option => (
          <Radio
            key={JSON.stringify(option.value)}
            checked={equals(option.value, value)}
            disabled={disabled}
            name={name}
            onChange={(_: any, isChecked: boolean) => handleChange(option.value, isChecked)}
          >
            {option.label}
          </Radio>
        ))}
      </Box>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const Box = styled.div<{
  $hasError: boolean
  $isInline: boolean
}>`
  color: ${p => p.theme.color.gunMetal};
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};
  font-weight: 500;
  outline: ${p => (p.$hasError ? `1px solid ${p.theme.color.maximumRed}` : 0)};

  > .rs-radio {
    * {
      user-select: none;
    }

    > .rs-radio-checker {
      min-height: 0;
      padding: 0 0 0 28px;
      user-select: none;

      .rs-radio-wrapper {
        left: 2px;
        top: 3px !important;
      }
    }
  }

  ${p =>
    !p.$isInline &&
    css`
      > .rs-radio:not(:first-child) {
        margin-top: 6px;
      }
    `}

  ${p =>
    p.$isInline &&
    css`
      > .rs-radio:not(:first-child) {
        margin-left: 12px;
      }
    `}
`
