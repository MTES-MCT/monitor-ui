import { type AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = styled.a<LinkProps>`
  color: ${p => p.theme.color.slateGray} !important;
  text-decoration: underline !important;

  svg {
    color: ${p => p.theme.color.slateGray} !important;
  }

  &:visited {
    color: ${p => p.theme.color.slateGray} !important;
    text-decoration: underline !important;

    svg {
      color: ${p => p.theme.color.slateGray} !important;
    }
  }

  &:hover,
  &._hover,
  &:visited:hover,
  &.visited._hover {
    color: ${p => p.theme.color.blueYonder} !important;
    text-decoration: underline !important;

    svg {
      color: ${p => p.theme.color.blueYonder} !important;
    }
  }

  &:active,
  &._active,
  &:visited:active,
  &.visited._active {
    color: ${p => p.theme.color.blueGray} !important;
    text-decoration: underline !important;

    svg {
      color: ${p => p.theme.color.blueGray} !important;
    }
  }
`

Link.displayName = 'Link'
