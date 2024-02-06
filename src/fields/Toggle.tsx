import { Toggle as RsuiteToggle, type ToggleProps as RSuiteToggleProps } from 'rsuite'
import styled from 'styled-components'

export type ToggleProps = Omit<RSuiteToggleProps, 'onChange'> & {
  dataCy?: string
  hasError?: boolean | undefined
  isChecked: boolean
  onChange: (isChecked: boolean) => void
}
export function Toggle({ dataCy, hasError = false, isChecked, onChange, ...originalProps }: ToggleProps) {
  return (
    <StyledToggle $hasError={hasError} checked={isChecked} data-cy={dataCy} onChange={onChange} {...originalProps} />
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
