import { css } from 'styled-components'

export function interpolatePrimaryButtonThemedCss() {
  return css`
    background-color: ${p => p.theme.color.charcoal};
    border: 1px solid ${p => p.theme.color.charcoal};
    color: ${p => p.theme.color.gainsboro};

    &:hover,
    &._hover {
      background-color: ${p => p.theme.color.blueYonder};
      border: 1px solid ${p => p.theme.color.blueYonder};
      color: ${p => p.theme.color.white};
    }

    &:active,
    &._active {
      background-color: ${p => p.theme.color.blueGray};
      border: 1px solid ${p => p.theme.color.blueGray};
      color: ${p => p.theme.color.white};
    }

    &:disabled,
    &._disabled {
      background-color: ${p => p.theme.color.lightGray};
      border: 1px solid ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.cultured};
    }
  `
}

export function interpolateSecondaryButtonThemedCss() {
  return css`
    background-color: transparent;
    border: 1px solid ${p => p.theme.color.charcoal};
    color: ${p => p.theme.color.charcoal};

    &:hover,
    &._hover {
      background-color: ${p => p.theme.color.blueYonder25};
      border: 1px solid ${p => p.theme.color.blueYonder};
      color: ${p => p.theme.color.blueYonder};
    }

    &:active,
    &._active {
      background-color: ${p => p.theme.color.blueGray25};
      border: 1px solid ${p => p.theme.color.blueGray};
      color: ${p => p.theme.color.blueGray};
    }

    &:disabled,
    &._disabled {
      background-color: transparent;
      border: 1px solid ${p => p.theme.color.lightGray};
      color: ${p => p.theme.color.lightGray};
    }
  `
}
