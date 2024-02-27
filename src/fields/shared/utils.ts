import type { CommonChoiceFieldStyleProps, CommonFieldStyleProps, PseudoState } from './types'

export function getChoiceFieldBackgroundColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      // TODO Check that with Adeline.
      case props.$hasError && props.$isLight:
        return props.$isChecked ? props.theme.color.maximumRed : props.theme.color.white

      case props.$hasError:
        return props.$isChecked ? props.theme.color.maximumRed : props.theme.color.gainsboro

      case props.$isDisabled:
        return props.$isChecked ? props.theme.color.lightGray : 'transparent'

      case props.$isReadOnly:
      // TODO Check that with Adeline.
      // When transparent on both gray/gainsboro and white background
      // eslint-disable-next-line no-fallthrough
      case props.$isTransparent:
        return 'transparent'

      case pseudoState === 'hover':
        return props.$isChecked ? props.theme.color.blueYonder : props.theme.color.blueYonder25

      // TODO Check that with Adeline (`blueYonder25` on XD).
      case pseudoState === 'focus':
        return props.$isChecked ? props.theme.color.blueGray : props.theme.color.blueGray25

      case pseudoState === 'active':
        return props.theme.color.blueGray

      // When non-transparent on gray/gainsboro background
      case props.$isLight:
        return props.$isChecked ? props.theme.color.charcoal : props.theme.color.white

      // When non-transparent on white background
      default:
        return props.$isChecked ? props.theme.color.charcoal : props.theme.color.gainsboro
    }
  }
}

export function getChoiceFieldBorderColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return props.theme.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return props.theme.color.lightGray

      case pseudoState === 'hover':
        return props.theme.color.blueYonder

      case pseudoState === 'focus':
      case pseudoState === 'active':
        return props.theme.color.blueGray

      // TODO Check that with Adeline.
      // When transparent on white background
      case props.$isTransparent && props.$isLight:
        return props.theme.color.lightGray

      // TODO Check that with Adeline.
      // When transparent on gray/gainsboro background
      case props.$isTransparent:
        return props.theme.color.slateGray

      // TODO Check that with Adeline.
      // When non-transparent on gray/gainsboro background
      // case props.$isLight:
      //   return props.theme.color.lightGray

      // When non-transparent on white background
      default:
        return props.$isChecked ? props.theme.color.charcoal : props.theme.color.lightGray
    }
  }
}

export function getFieldBackgroundColorFactory() {
  return (props: CommonFieldStyleProps) => {
    switch (true) {
      case props.$isDisabled:
        return props.theme.color.cultured

      case props.$isReadOnly:
        return 'transparent'

      // When transparent on both gray/gainsboro and white background
      case props.$isTransparent:
        return 'transparent'

      // When non-transparent on gray/gainsboro background
      case props.$isLight:
        return props.theme.color.white

      // When non-transparent on white background
      default:
        return props.theme.color.gainsboro
    }
  }
}

export function getFieldBorderColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return props.theme.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return props.theme.color.lightGray

      case pseudoState === 'hover':
        return props.theme.color.blueYonder

      case pseudoState === 'focus':
      case pseudoState === 'active':
        return props.theme.color.blueGray

      // When transparent on white background
      case props.$isTransparent && props.$isLight:
        return props.theme.color.slateGray

      // When transparent on gray/gainsboro background
      case props.$isTransparent:
        return props.theme.color.lightGray

      // When non-transparent on gray/gainsboro background
      case props.$isLight:
        return props.theme.color.white

      // When non-transparent on white background
      default:
        return props.theme.color.gainsboro
    }
  }
}

export function getFieldPlaceholderColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return props.theme.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return props.theme.color.lightGray

      case pseudoState === 'hover':
        return props.theme.color.blueYonder

      case pseudoState === 'focus':
      case pseudoState === 'active':
        return props.theme.color.blueGray

      default:
        return props.theme.color.slateGray
    }
  }
}
