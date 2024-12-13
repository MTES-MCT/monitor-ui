import { Accent, Size } from '@constants'
import { Field } from '@elements/Field'
import { FieldError } from '@elements/FieldError'
import { IconButton } from '@elements/IconButton'
import { Label } from '@elements/Label'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { useKey } from '@hooks/useKey'
import { THEME } from '@theme'
import { normalizeString } from '@utils/normalizeString'
import classnames from 'classnames'
import { type FunctionComponent, useCallback, useMemo } from 'react'
import { Input as RsuiteInput } from 'rsuite'
import styled from 'styled-components'

import { Close, Search } from '../icons'
import { StyledInputBox } from './shared/StyledInputBox'

import type { IconProps } from '@types_/definitions'
import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type TextInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'size' | 'value'> & {
  Icon?: FunctionComponent<IconProps> | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isSearchInput?: boolean
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
  size?: Size | undefined
  value?: string | undefined
}
export function TextInput({
  className,
  disabled = false,
  error,
  Icon,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isSearchInput = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  name,
  onChange,
  readOnly = false,
  size = Size.NORMAL,
  style,
  type = 'text',
  value,
  ...originalProps
}: TextInputProps) {
  const controlledClassname = useMemo(() => classnames('Field-TextInput', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([disabled, name])

  const clean = useCallback(() => {
    if (!onChange) {
      return
    }
    onChange(undefined)
  }, [onChange])

  const handleChange = useCallback(
    (nextValue: string | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = nextValue && nextValue.trim().length ? nextValue : undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  useFieldUndefineEffect(isUndefinedWhenDisabled && !!disabled, onChange)

  return (
    <Field className={controlledClassname} style={style}>
      <Label $isDisabled={disabled} $isHidden={isLabelHidden} $isRequired={isRequired} htmlFor={name}>
        {label}
      </Label>

      <RestyledStyledInputBox
        $hasError={hasError}
        $hasIcon={!!Icon}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
        $isSearchInput={isSearchInput}
        $isTransparent={isTransparent}
        $size={size}
      >
        <RsuiteInput
          key={key}
          disabled={disabled}
          id={name}
          name={name}
          onChange={handleChange}
          readOnly={readOnly}
          type={type}
          value={value ?? ''}
          {...originalProps}
        />
        {isSearchInput && !Icon && (
          <IconsContainer $size={size}>
            {value && (
              <>
                <IconButton
                  accent={Accent.TERTIARY}
                  color={THEME.color.slateGray}
                  Icon={Close}
                  onClick={clean}
                  size={Size.SMALL}
                />
                <Separator />
              </>
            )}

            <Search color={THEME.color.slateGray} />
          </IconsContainer>
        )}

        {Icon && <Icon color={THEME.color.slateGray} />}
      </RestyledStyledInputBox>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const IconsContainer = styled.div<{
  $size: Size
}>`
  align-items: center;
  display: flex;
  position: absolute;
  right: 8px;
  top: ${p => (p.$size === Size.LARGE ? '9px' : '5px')};
`

const RestyledStyledInputBox = styled(StyledInputBox)<{
  $isSearchInput: boolean
}>`
  > input,
  > .rs-auto-complete > input {
    padding-right: ${p => p.$isSearchInput && '64px'};
  }
`

const Separator = styled.div`
  border-right: 1px solid ${p => p.theme.color.lightGray};
  height: 20px;
  margin-left: 4px;
  margin-right: 6px;
  padding-top: 3px;
`
