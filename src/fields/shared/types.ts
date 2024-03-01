import type { THEME } from '@theme'

export type CommonFieldStyleProps = {
  $hasError: boolean
  $isDisabled: boolean
  $isLight: boolean
  $isReadOnly: boolean
  $isTransparent: boolean
  theme: typeof THEME
}

export type CommonChoiceFieldStyleProps = CommonFieldStyleProps & {
  $isChecked: boolean
}

export type CommonPickerFieldStyleProps = CommonFieldStyleProps & {
  $popupWidth: number | undefined
}

export type PseudoState = 'default' | 'focus' | 'hover' | 'active'
