export type CommonFieldStyleProps = {
  $hasError?: boolean
  $isDisabled: boolean
  $isLight: boolean
  $isReadOnly: boolean
  $isRequired?: boolean
  $isTransparent: boolean
}

export type CommonChoiceFieldStyleProps = CommonFieldStyleProps & {
  $isChecked: boolean
  $labelPosition?: 'left' | 'right'
}

export type CommonPickerFieldStyleProps = CommonFieldStyleProps & {
  $popupWidth: number | undefined
}

export type PseudoState = 'default' | 'focus' | 'hover' | 'active'
