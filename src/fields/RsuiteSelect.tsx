import { useForceUpdate } from '@hooks/useForceUpdate'
import { useEffect, useRef } from 'react'
import { SelectPicker as RsuiteSelectPicker, type SelectPickerProps as RsuiteSelectPickerProps } from 'rsuite'

import { StyledRsuitePickerBox } from './shared/StyledRsuitePickerBox'

export function RsuiteSelect(originalProps: RsuiteSelectPickerProps<any>) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const { forceUpdate } = useForceUpdate()

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <StyledRsuitePickerBox
      ref={boxRef}
      $hasError={false}
      $isDisabled={false}
      $isLight={false}
      $isReadOnly={false}
      $isTransparent={false}
      $popupWidth={500}
    >
      {boxRef.current && <RsuiteSelectPicker container={boxRef.current} {...originalProps} />}
    </StyledRsuitePickerBox>
  )
}
