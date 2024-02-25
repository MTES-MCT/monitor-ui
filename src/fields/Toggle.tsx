import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import classNames from 'classnames'
import { useMemo } from 'react'
import { Toggle as RsuiteToggle, type ToggleProps as RSuiteToggleProps } from 'rsuite'
import styled from 'styled-components'

import { getChoiceFieldBackgroundColorFactoryForState, getChoiceFieldMainColorFactoryForState } from './shared/utils'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

export type ToggleProps = Omit<RSuiteToggleProps, 'as' | 'checked' | 'defaultChecked' | 'id' | 'onChange'> & {
  checked?: boolean | undefined
  dataCy?: string
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (isChecked: boolean | undefined) => void
}
export function Toggle({
  checked = false,
  className,
  dataCy,
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  readOnly = false,
  style,
  ...originalProps
}: ToggleProps) {
  const controlledClassName = useMemo(() => classNames('Field-Toggle', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])

  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([checked, disabled, originalProps.name])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange)

  return (
    <Field className={controlledClassName} style={style}>
      <Label disabled={disabled} hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>
      <StyledToggle
        key={key}
        $hasError={hasError}
        $isChecked={checked}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        checked={checked}
        data-cy={dataCy}
        disabled={disabled}
        onChange={onChange}
        readOnly={readOnly}
        {...originalProps}
      />
      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledToggle = styled(RsuiteToggle)<{
  $hasError: boolean
  $isChecked: boolean
  $isDisabled: boolean
  $isLight: boolean
  $isReadOnly: boolean
  $isTransparent: boolean
}>`
  *,
  *:after {
    ${p => p.$isDisabled && `cursor: not-allowed !important;`}
    ${p => p.$isReadOnly && `cursor: default !important;`}
    user-select: none;
  }

  .rs-toggle-presentation {
    background-color: ${getChoiceFieldBackgroundColorFactoryForState('default')};
    border: 1px solid ${getChoiceFieldMainColorFactoryForState('default')};

    &:after {
      /* background-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)}; */
      top: 2px;
    }

    &:hover {
      /* border: 1px solid ${p => p.theme.color.blueYonder}; */

      &:after {
        /* background-color: ${p => p.theme.color.blueYonder}; */
      }
    }
  }

  &.rs-toggle-disabled .rs-toggle-presentation {
    /* background-color: ${p => p.theme.color.white};
    border: 1px solid ${p => p.theme.color.lightGray}; */
    box-shadow: none;

    &:after {
      /* background-color: ${p => p.theme.color.lightGray}; */
    }
  }

  &.rs-toggle-checked.rs-toggle-disabled .rs-toggle-presentation {
    /* background-color: ${p => p.theme.color.lightGray};
    border: 1px solid ${p => p.theme.color.lightGray}; */
    box-shadow: none;

    &:after {
      /* background-color: ${p => p.theme.color.gainsboro}; */
    }
  }

  &.rs-toggle-checked .rs-toggle-presentation {
    /* background-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)}; */
    /* border: 1px solid transparent; */

    &:after {
      /* background-color: ${p => p.theme.color.white}; */
    }

    &:hover {
      /* border: 1px solid transparent; */
      /* background-color: ${p => p.theme.color.blueYonder}; */
    }
  }
`
