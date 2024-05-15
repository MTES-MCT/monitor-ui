import { type AnchorHTMLAttributes } from 'react'
import styled from 'styled-components'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = styled.a<LinkProps>`
  color: ${p => p.theme.color.slateGray};
  text-decoration: underline;

  svg {
    color: ${p => p.theme.color.slateGray};
  }

  &:hover,
  &._hover {
    color: ${p => p.theme.color.blueYonder};

    svg {
      color: ${p => p.theme.color.blueYonder};
    }
  }

  &:active,
  &._active {
    color: ${p => p.theme.color.blueGray};

    svg {
      color: ${p => p.theme.color.blueGray};
    }
  }

  &:visited {
    color: ${p => p.theme.color.slateGray};

    svg {
      color: ${p => p.theme.color.slateGray};
    }
  }
`

Link.displayName = 'LinkButton'
