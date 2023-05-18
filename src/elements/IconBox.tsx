import styled from 'styled-components'

import type { HTMLAttributes } from 'react'

export type IconBoxProps = HTMLAttributes<HTMLDivElement> & {
  $color?: string | undefined
  /** In pixels */
  $size?: number | undefined
}
/**
 * Internal component used to wrap SVG icon components
 */
export const IconBox = styled.div.attrs<IconBoxProps, IconBoxProps>(() => ({
  className: 'Element-IconBox'
}))`
  display: inline-block;
  color: ${p => p.$color ?? 'inherit'};

  > svg {
    display: block;
    height: ${p => p.$size ?? 20}px;
    width: ${p => p.$size ?? 20}px;
  }
`
