import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { Label } from '@elements/Label'

import { RsuiteCheckTreePickerBox } from './RsuiteCheckTreePickerBox'

interface CheckPickerBoxProps {
  boxRef: React.RefObject<HTMLDivElement> | undefined
  children?: React.ReactNode
  className: string | undefined
  disabled: boolean
  error: string | undefined
  hasError: boolean
  isErrorMessageHidden: boolean
  isLabelHidden?: boolean
  isLight: boolean
  isRequired?: boolean
  isTransparent: boolean
  label: string
  onLabelClick: () => void
  popupWidth: number | undefined
  readOnly: boolean
  style: React.CSSProperties | undefined
}

export function CheckTreePickerBox({
  boxRef,
  children,
  className,
  disabled,
  error,
  hasError,
  isErrorMessageHidden,
  isLabelHidden,
  isLight,
  isRequired,
  isTransparent,
  label,
  onLabelClick,
  popupWidth,
  readOnly,
  style
}: CheckPickerBoxProps) {
  return (
    <Field className={className} style={style}>
      <Label $isDisabled={disabled} $isHidden={isLabelHidden} $isRequired={isRequired} onClick={onLabelClick}>
        {label}
      </Label>

      <RsuiteCheckTreePickerBox
        ref={boxRef}
        $hasError={hasError}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isTransparent={isTransparent}
        $popupWidth={popupWidth}
      >
        {children}
      </RsuiteCheckTreePickerBox>
      {!isErrorMessageHidden && hasError && <FieldError>{error}</FieldError>}
    </Field>
  )
}
