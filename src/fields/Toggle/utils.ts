import type { CommonChoiceFieldStyleProps, PseudoState } from 'fields/shared/types'

export function getToggleBackgroundColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      // TODO Check that with Adeline (transparent or real color?).
      case !props.$isChecked:
        return 'transparent'

      case props.$hasError:
        return props.theme.color.maximumRed

      case props.$isDisabled:
        return props.theme.color.lightGray

      // TODO Check that with Adeline (no XD).
      case props.$isReadOnly:
        return props.theme.color.lightGray

      case pseudoState === 'hover':
        return props.theme.color.blueYonder

      case pseudoState === 'focus':
        return props.theme.color.blueGray

      case pseudoState === 'active':
        return props.theme.color.blueGray

      default:
        return props.theme.color.charcoal
    }
  }
}

export function getToggleBorderColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return props.theme.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return props.theme.color.lightGray

      // TODO Check focus border size with Adeline.
      case pseudoState === 'hover':
      case pseudoState === 'focus':
        return props.theme.color.blueYonder

      case pseudoState === 'active':
        return props.theme.color.blueGray

      default:
        return props.theme.color.charcoal
    }
  }
}

export function getToggleThumbColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return props.$isChecked ? props.theme.color.white : props.theme.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return props.$isChecked ? props.theme.color.gainsboro : props.theme.color.lightGray

      case props.$isChecked:
        return props.theme.color.white

      case pseudoState === 'hover':
      case pseudoState === 'focus':
        return props.theme.color.blueYonder

      case pseudoState === 'active':
        return props.theme.color.blueGray

      default:
        return props.theme.color.charcoal
    }
  }
}
