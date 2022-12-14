import { FieldsetHTMLAttributes, useMemo } from 'react'
import styled, { css } from 'styled-components'

import { Field } from './Field'
import { Legend } from './Legend'

export type FieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  hasBorder?: boolean
  isHidden?: boolean
  isLight?: boolean
  legend?: string
}
export function Fieldset({
  children,
  hasBorder = false,
  isHidden = false,
  isLight = false,
  legend,
  ...nativeProps
}: FieldsetProps) {
  const hasLegend = useMemo(() => Boolean(legend), [legend])

  return (
    <StyledField as="fieldset" {...nativeProps}>
      {legend && <Legend isHidden={isHidden}>{legend}</Legend>}

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

  ${p =>
    p.$hasBorder &&
    css`
      border: solid 1px ${p.$isLight ? p.theme.color.white : p.theme.color.gainsboro};
    `}
`
