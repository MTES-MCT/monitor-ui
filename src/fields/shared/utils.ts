import { THEME } from '@theme'

import type { CommonChoiceFieldStyleProps, PseudoState } from './types'

export function getChoiceFieldBackgroundColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      // TODO Check that with Adeline.
      case props.$hasError && props.$isLight:
        return props.$isChecked ? THEME.color.maximumRed : THEME.color.white

      case props.$hasError:
        return props.$isChecked ? THEME.color.maximumRed : THEME.color.gainsboro

      case props.$isDisabled:
        return props.$isChecked ? THEME.color.lightGray : 'transparent'

      case props.$isReadOnly:
      // TODO Check that with Adeline.
      // When transparent on both gray/gainsboro and white background
      // eslint-disable-next-line no-fallthrough
      case props.$isTransparent:
        return 'transparent'

      case pseudoState === 'hover':
        return props.$isChecked ? THEME.color.blueYonder : THEME.color.blueYonder25

      // TODO Check that with Adeline (`blueYonder25` on XD).
      case pseudoState === 'focus':
        return props.$isChecked ? THEME.color.blueGray : THEME.color.blueGray25

      case pseudoState === 'active':
        return THEME.color.blueGray

      // When non-transparent on gray/gainsboro background
      case props.$isLight:
        return props.$isChecked ? THEME.color.charcoal : THEME.color.white

      // When non-transparent on white background
      default:
        return props.$isChecked ? THEME.color.charcoal : THEME.color.gainsboro
    }
  }
}

export function getChoiceFieldBorderColorFactoryForState(pseudoState: PseudoState) {
  return (props: CommonChoiceFieldStyleProps) => {
    switch (true) {
      case props.$hasError:
        return THEME.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return THEME.color.lightGray

      case pseudoState === 'hover':
        return THEME.color.blueYonder

      case pseudoState === 'focus':
      case pseudoState === 'active':
        return THEME.color.blueGray

      // TODO Check that with Adeline.
      // When transparent on white background
      case props.$isTransparent && props.$isLight:
        return THEME.color.lightGray

      // TODO Check that with Adeline.
      // When transparent on gray/gainsboro background
      case props.$isTransparent:
        return THEME.color.slateGray

      // TODO Check that with Adeline.
      // When non-transparent on gray/gainsboro background
      // case props.$isLight:
      //   return THEME.color.lightGray

      // When non-transparent on white background
      default:
        return props.$isChecked ? THEME.color.charcoal : THEME.color.lightGray
    }
  }
}

export function getFieldBackgroundColorFactory() {
  return (props: { [key: string]: any; theme: any }) => {
    switch (true) {
      case props.$isDisabled:
        return THEME.color.cultured

      case props.$isReadOnly:
        return 'transparent'

      // When transparent on both gray/gainsboro and white background
      case props.$isTransparent:
        return 'transparent'

      // When non-transparent on gray/gainsboro background
      case props.$isLight:
        return THEME.color.white

      // When non-transparent on white background
      default:
        return THEME.color.gainsboro
    }
  }
}

export function getFieldBorderColorFactoryForState(pseudoState: PseudoState) {
  return (props: { [key: string]: any; theme: any }) => {
    switch (true) {
      case props.$hasError:
        return THEME.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return THEME.color.lightGray

      case pseudoState === 'hover':
        return THEME.color.blueYonder

      case pseudoState === 'focus':
      case pseudoState === 'active':
        return THEME.color.blueGray

      // When transparent on white background
      case props.$isTransparent && props.$isLight:
        return THEME.color.slateGray

      // When transparent on gray/gainsboro background
      case props.$isTransparent:
        return THEME.color.lightGray

      // When non-transparent on gray/gainsboro background
      case props.$isLight:
        return THEME.color.white

      // When non-transparent on white background
      default:
        return THEME.color.gainsboro
    }
  }
}

export function getFieldPlaceholderColorFactoryForState(pseudoState: PseudoState) {
  return (props: { [key: string]: any; theme: any }) => {
    switch (true) {
      case props.$hasError:
        return THEME.color.maximumRed

      case props.$isDisabled:
      case props.$isReadOnly:
        return THEME.color.lightGray

      case pseudoState === 'hover':
        return THEME.color.blueYonder

      case pseudoState === 'focus':
      case pseudoState === 'active':
        return THEME.color.blueGray

      default:
        return THEME.color.slateGray
    }
  }
}
