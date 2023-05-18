import classnames from 'classnames'
import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type LegendProps = HTMLAttributes<HTMLLegendElement> & {
  disabled?: boolean | undefined
  hasError?: boolean | undefined
  isHidden?: boolean | undefined
}
export const Legend = styled.legend.attrs<LegendProps, LegendProps>(props => ({
  className: classnames('Element-Legend', props.className)
}))`
  color: ${p =>
    // eslint-disable-next-line no-nested-ternary
    p.disabled ? p.theme.color.lightGray : p.hasError ? p.theme.color.maximumRed : p.theme.color.slateGray};
  display: ${p => (p.isHidden ? 'none' : 'block')};
  font-size: 13px;
  line-height: 1.3846;
  margin-bottom: 4px;
  padding: 0;
`
