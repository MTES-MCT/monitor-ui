import classNames from 'classnames'
import { useMemo } from 'react'
import { Toggle as RsuiteToggle, type ToggleProps as RSuiteToggleProps } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useKey } from '../hooks/useKey'
import { normalizeString } from '../utils/normalizeString'

export type ToggleProps = Omit<RSuiteToggleProps, 'onChange'> & {
  dataCy?: string
  error?: string | undefined
  isChecked: boolean
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  label: string
  name: string
  onChange: (isChecked: boolean) => void
}
export function Toggle({
  className,
  dataCy,
  error,
  isChecked,
  isErrorMessageHidden = false,
  isLabelHidden,
  label,
  onChange,
  style,
  ...originalProps
}: ToggleProps) {
  const controlledClassName = useMemo(() => classNames('Field-Toggle', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])

  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([isChecked, originalProps.disabled, originalProps.name])

  return (
    <Field className={controlledClassName} style={style}>
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>
      <StyledToggle
        key={key}
        $hasError={hasError}
        checked={isChecked}
        data-cy={dataCy}
        onChange={onChange}
        {...originalProps}
      />
      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledToggle = styled(RsuiteToggle)<{ $hasError?: boolean }>`
  .rs-toggle-presentation {
    background-color: transparent;
    border: 1px solid ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};

    &:after {
      background-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
      top: 2px;
    }
    &:hover {
      border: 1px solid ${p => p.theme.color.blueYonder};
      &:after {
        background-color: ${p => p.theme.color.blueYonder};
      }
    }
  }

  &.rs-toggle-disabled .rs-toggle-presentation {
    background-color: ${p => p.theme.color.white};
    border: 1px solid ${p => p.theme.color.lightGray};
    box-shadow: none;
    &:after {
      background-color: ${p => p.theme.color.lightGray};
    }
  }

  &.rs-toggle-checked.rs-toggle-disabled .rs-toggle-presentation {
    background-color: ${p => p.theme.color.lightGray};
    border: 1px solid ${p => p.theme.color.lightGray};
    box-shadow: none;
    &:after {
      background-color: ${p => p.theme.color.gainsboro};
    }
  }

  &.rs-toggle-checked .rs-toggle-presentation {
    background-color: ${p => (p.$hasError ? p.theme.color.maximumRed : p.theme.color.charcoal)};
    border: 1px solid transparent;
    &:after {
      background-color: ${p => p.theme.color.white};
    }
    &:hover {
      border: 1px solid transparent;
      background-color: ${p => p.theme.color.blueYonder};
    }
  }
`
