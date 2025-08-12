import classnames from 'classnames'
import { type FieldsetHTMLAttributes, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Label } from './Label'

export type FieldsetProps = Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange' | 'value'> & {
  hasBorder?: boolean | undefined
  hasError?: boolean | undefined
  id: string
  isLegendHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  legend?: string | undefined
}
export function Fieldset({
  children,
  className,
  hasBorder = false,
  hasError = false,
  id,
  isLegendHidden = false,
  isLight = false,
  isRequired = false,
  legend,
  ...nativeProps
}: FieldsetProps) {
  const hasLegend = useMemo(() => Boolean(legend), [legend])

  return (
    <Box className={classnames('Element-Fieldset', className)} {...nativeProps}>
      {legend && (
        <Label
          $hasError={hasError}
          $isDisabled={nativeProps.disabled}
          $isHidden={isLegendHidden}
          $isRequired={isRequired}
          htmlFor={id}
        >
          {legend}
        </Label>
      )}

      <InnerBox $hasBorder={hasBorder} $hasLegend={hasLegend} $isLight={isLight} className="Element-Fieldset__InnerBox">
        {children}
      </InnerBox>
    </Box>
  )
}

const Box = styled.fieldset`
  align-items: flex-start;
  border: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

const InnerBox = styled.div<{
  $hasBorder: boolean
  $hasLegend: boolean
  $isLight: boolean
}>`
  background-color: ${p => (p.$isLight ? p.theme.color.white : 'transparent')};
  padding: ${p => (p.$hasBorder || p.$isLight ? '16px' : 0)};
  width: 100%;

  ${p =>
    p.$hasBorder &&
    css`
      border: solid 1px ${p.$isLight ? p.theme.color.white : p.theme.color.gainsboro};
    `}
`
