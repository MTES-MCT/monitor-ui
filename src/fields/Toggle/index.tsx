import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import classNames from 'classnames'
import { useMemo } from 'react'
import { Toggle as RsuiteToggle, type ToggleProps as RSuiteToggleProps } from 'rsuite'
import styled from 'styled-components'

import {
  getToggleBackgroundColorFactoryForState,
  getToggleBorderColorFactoryForState,
  getToggleThumbColorFactoryForState
} from './utils'
import { Field } from '../../elements/Field'
import { FieldError } from '../../elements/FieldError'
import { Label } from '../../elements/Label'
import { useKey } from '../../hooks/useKey'
import { normalizeString } from '../../utils/normalizeString'

import type { CommonChoiceFieldStyleProps } from 'fields/shared/types'

export type ToggleProps = Omit<RSuiteToggleProps, 'as' | 'checked' | 'defaultChecked' | 'id' | 'onChange'> & {
  checked?: boolean | undefined
  dataCy?: string
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
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
  isRequired = false,
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
      <Label $isRequired={isRequired} disabled={disabled} htmlFor={originalProps.name} isHidden={isLabelHidden}>
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

const StyledToggle = styled(RsuiteToggle)<CommonChoiceFieldStyleProps>`
  *,
  *:after {
    ${p => p.$isDisabled && `cursor: not-allowed !important;`}
    ${p => p.$isReadOnly && `cursor: default !important;`}
    user-select: none;
  }

  > .rs-toggle-presentation {
    background-color: ${getToggleBackgroundColorFactoryForState('default')} !important;
    border: 1px solid ${getToggleBorderColorFactoryForState('default')};

    /* Thumb */
    &:after {
      background-color: ${getToggleThumbColorFactoryForState('default')};
      top: 2px;
    }

    &:hover,
    &._hover {
      background-color: ${getToggleBackgroundColorFactoryForState('hover')};
      border: 1px solid ${getToggleBorderColorFactoryForState('hover')};

      &:after {
        background-color: ${getToggleThumbColorFactoryForState('hover')};
      }
    }

    &:focus,
    &._focus {
      background-color: ${getToggleBackgroundColorFactoryForState('focus')};
      border: 1px solid ${getToggleBorderColorFactoryForState('focus')};

      &:after {
        background-color: ${getToggleThumbColorFactoryForState('focus')};
      }
    }

    &:active,
    &._active {
      background-color: ${getToggleBackgroundColorFactoryForState('active')};
      border: 1px solid ${getToggleBorderColorFactoryForState('active')};

      &:after {
        background-color: ${getToggleThumbColorFactoryForState('active')};
      }
    }
  }
`
