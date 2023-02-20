import { FieldsetHTMLAttributes, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Field } from './Field'
import { Legend } from './Legend'

export type FieldsetProps = Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'defaultValue' | 'onChange' | 'value'> & {
  hasBorder?: boolean | undefined
  isLegendHidden?: boolean | undefined
  isLight?: boolean | undefined
  legend?: string | undefined
}
export function Fieldset({
  children,
  hasBorder = false,
  isLegendHidden = false,
  isLight = false,
  legend,
  ...nativeProps
}: FieldsetProps) {
  const hasLegend = useMemo(() => Boolean(legend), [legend])

  return (
    <StyledField as="fieldset" {...nativeProps}>
      {legend && (
        <Legend disabled={nativeProps.disabled} isHidden={isLegendHidden}>
          {legend}
        </Legend>
      )}

      <Box $hasBorder={hasBorder} $hasLegend={hasLegend} $isLight={isLight}>
        {children}
      </Box>
    </StyledField>
  )
}

const StyledField = styled(Field)`
  border: 0;
  margin: 0;
  padding: 0;
`

const Box = styled.div<{
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
