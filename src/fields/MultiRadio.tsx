import classnames from 'classnames'
import { equals } from 'ramda'
import { useCallback, useMemo, type CSSProperties, type ReactNode } from 'react'
import { Radio } from 'rsuite'
import styled, { css } from 'styled-components'

import { FieldError } from '../elements/FieldError'
import { Fieldset } from '../elements/Fieldset'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { getRsuiteDataItemsFromOptions } from '../utils/getRsuiteDataItemsFromOptions'
import { getRsuiteDataItemValueFromOptionValue } from '../utils/getRsuiteDataItemValueFromOptionValue'
import { normalizeString } from '../utils/normalizeString'

import type { Option, OptionValueType } from '../types/definitions'
import type { Promisable } from 'type-fest'

export type MultiRadioProps<OptionValue extends OptionValueType = string> = {
  className?: string | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isInline?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isReadOnly?: boolean
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: ((nextValue: OptionValue | undefined) => Promisable<void>) | undefined
  optionValueKey?: keyof OptionValue | undefined
  options: Option<OptionValue>[]
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
  isReadOnly = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  options,
  optionValueKey,
  renderMenuItem,
  style,
  value
}: MultiRadioProps<OptionValue>) {
  const controlledClassName = useMemo(() => classnames('Field-MultiRadio', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([value, disabled, name])

  const rsuiteData = useMemo(() => getRsuiteDataItemsFromOptions(options, optionValueKey), [options, optionValueKey])
  const selectedRsuiteValue = useMemo(
    () => (value ? getRsuiteDataItemValueFromOptionValue(value, optionValueKey) : undefined),
    [value, optionValueKey]
  )

  const handleChange = useCallback(
    (nextValue: OptionValue) => {
      if (!onChange) {
        return
      }
      onChange(nextValue)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled && !isReadOnly, onChange)

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
      <Box key={key} $hasError={hasError} $isInline={isInline} $isReadOnly={isReadOnly}>
        {rsuiteData.map(rsuiteDataItem => (
          <Radio
            key={JSON.stringify(rsuiteDataItem.value)}
            checked={equals(rsuiteDataItem.value, selectedRsuiteValue)}
            disabled={!!rsuiteDataItem.isDisabled || disabled}
            name={name}
            onChange={() => handleChange(rsuiteDataItem.optionValue)}
            readOnly={isReadOnly}
            value={rsuiteDataItem.value}
          >
            {renderMenuItem ? renderMenuItem(rsuiteDataItem.label, rsuiteDataItem.optionValue) : rsuiteDataItem.label}
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
  $isReadOnly: boolean
}>`
  color: ${p => p.theme.color.gunMetal};
  display: flex;
  flex-direction: ${p => (p.$isInline ? 'row' : 'column')};
  font-weight: 500;

  > .rs-radio {
    * {
      user-select: none;
    }

    > .rs-radio-checker {
      min-height: 0;
      padding: 0 0 0 28px;
      user-select: none;

      > label {
        color: ${p => p.theme.color.charcoal};
        font-weight: 500;
        line-height: 17px;
      }

      .rs-radio-wrapper {
        left: 2px;
        top: 3px !important;

        .rs-radio-inner:before {
          background: ${p => p.theme.color.gainsboro};
          border: 2px solid ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.lightGray)};
        }
        .rs-radio-inner:after {
          background: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
        }
      }
    }
  }
  > .rs-radio-checked {
    > .rs-radio-checker {
      .rs-radio-wrapper {
        .rs-radio-inner:before {
          border: 2px solid ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
        }
      }
    }
  }
  > .rs-radio-disabled {
    > .rs-radio-checker {
      > label {
        color: ${p => p.theme.color.lightGray};
      }
      .rs-radio-wrapper {
        .rs-radio-inner:before {
          background: ${p => p.theme.color.white};
        }
        .rs-radio-inner:after {
          background: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.lightGray)};
        }
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

    ${p =>
    p.$isReadOnly &&
    css`
      .rs-radio {
        .rs-radio-checker {
          label {
            cursor: not-allowed;
            .rs-radio-wrapper [type='radio'] {
              cursor: not-allowed;
            }
          }
        }
      }
      .rs-radio:not(.rs-radio-checked):hover .rs-radio-inner:before {
        border-color: ${p.theme.color.lightGray};
      }
      .rs-radio:not(.rs-radio-checked) .rs-radio-inner:before {
        background-color: ${p.theme.color.white};
      }
      .rs-radio:not(.rs-radio-checked) {
        .rs-radio-checker {
          label {
            color: ${p.theme.color.slateGray};
          }
        }
      }
    `}
`
