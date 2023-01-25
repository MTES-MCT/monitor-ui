import styled from 'styled-components'

export type IconBoxProps = {
  $color?: string | undefined
  /** In pixels */
  $size?: number | undefined
}
/**
 * Internal component used to wrap SVG icon components
 */
export const IconBox = styled.div<IconBoxProps>`
  display: inline-block;
  color: ${p => p.$color ?? 'inherit'};

  > svg {
    display: block;
    height: ${p => p.$size ?? 20}px;
    width: ${p => p.$size ?? 20}px;
  }
`
