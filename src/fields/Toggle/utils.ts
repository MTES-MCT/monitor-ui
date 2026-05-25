import { THEME } from '@theme'

import type { CommonChoiceFieldStyleProps, PseudoState } from 'fields/shared/types'

export function getToggleBackgroundColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      // TODO Check that with Adeline (transparent or real color?).
      case !props.$isChecked:
        return 'transparent'

      case props.$hasError:
        return THEME.color.maximumRed

      case props.$isDisabled:
        return THEME.color.lightGray

      // TODO Check that with Adeline (no XD).
      case props.$isReadOnly:
        return THEME.color.lightGray

      case pseudoState === 'hover':
        return THEME.color.blueYonder

      case pseudoState === 'focus':
        return THEME.color.blueGray

      case pseudoState === 'active':
        return THEME.color.blueGray

      default:
        return THEME.color.charcoal
    }
  }
}

export function getToggleBorderColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return THEME.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return THEME.color.lightGray

      // TODO Check focus border size with Adeline.
      case pseudoState === 'hover':
      case pseudoState === 'focus':
        return THEME.color.blueYonder

      case pseudoState === 'active':
        return THEME.color.blueGray

      default:
        return THEME.color.charcoal
    }
  }
}

export function getToggleThumbColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return props.$isChecked ? THEME.color.white : THEME.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return props.$isChecked ? THEME.color.gainsboro : THEME.color.lightGray

      case props.$isChecked:
        return THEME.color.white

      case pseudoState === 'hover':
      case pseudoState === 'focus':
        return THEME.color.blueYonder

      case pseudoState === 'active':
        return THEME.color.blueGray

      default:
        return THEME.color.charcoal
    }
  }
}
