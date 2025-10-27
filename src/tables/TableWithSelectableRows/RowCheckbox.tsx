import { Checkbox } from '@fields/Checkbox'
import { stopMouseEventPropagation } from '@utils/stopMouseEventPropagation'
import { type ChangeEvent, type HTMLProps, useCallback } from 'react'
import { type CheckboxProps as RsuiteCheckboxProps } from 'rsuite'
import styled from 'styled-components'

import type { ValueType } from 'rsuite/esm/Checkbox'

export type RowCheckboxProps = Omit<RsuiteCheckboxProps, 'onClick' | 'onChange'> & {
  // TODO Maybe replace that with a `((isChecked: boolean) => Promisable<void>) | undefined` for consistency with other boolean fields?
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined
}

export function RowCheckbox({ onChange, ...nativeProps }: RowCheckboxProps & HTMLProps<HTMLInputElement>) {
  const handleOnChange = useCallback(
    (_value: ValueType | undefined, _checked: boolean, event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }
    },
    [onChange]
  )

  return (
    <RestyledRsuiteCheckbox
      $isChecked={!!nativeProps.checked || !!nativeProps.indeterminate}
      $isDisabled={nativeProps.disabled}
      $isReadOnly={nativeProps.readOnly}
      {...nativeProps}
      onChange={handleOnChange}
      onClick={stopMouseEventPropagation}
    />
  )
}

const RestyledRsuiteCheckbox = styled(Checkbox)`
  vertical-align: top;

  > .rs-checkbox-checker,
  &.rs-checkbox-indeterminate > .rs-checkbox-checker {
    padding: 0;

    > label {
      > .rs-checkbox-control {
        bottom: 0;
        top: 3px;
        left: 0;

        &:after {
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
        }
      }
    }
  }
`
