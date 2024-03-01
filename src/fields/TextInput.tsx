import classnames from 'classnames'
import { type FunctionComponent, useCallback, useMemo } from 'react'
import { Input as RsuiteInput } from 'rsuite'
import styled from 'styled-components'

import { StyledInputBox } from './shared/StyledInputBox'
import { Accent, Size } from '../constants'
import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { IconButton } from '../elements/IconButton'
import { Label } from '../elements/Label'
import { useFieldUndefineEffect } from '../hooks/useFieldUndefineEffect'
import { useKey } from '../hooks/useKey'
import { Close, Search } from '../icons'
import { THEME } from '../theme'
import { normalizeString } from '../utils/normalizeString'

import type { IconProps } from '../types/definitions'
import type { InputProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type TextInputProps = Omit<InputProps, 'as' | 'defaultValue' | 'id' | 'onChange' | 'size' | 'value'> & {
  Icon?: FunctionComponent<IconProps> | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean | undefined
  isLight?: boolean | undefined
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
      <Label disabled={disabled} hasError={hasError} htmlFor={name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <StyledInputBox
        $hasError={hasError}
        $hasIcon={!!Icon}
        $isDisabled={disabled}
        $isLight={isLight}
        $isReadOnly={readOnly}
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
      </StyledInputBox>

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
  right: 5px;
  top: ${p => (p.$size === Size.LARGE ? '10px' : '5px')};
`

const Separator = styled.div`
  border-right: 1px solid ${p => p.theme.color.lightGray};
  height: 20px;
  margin-left: 4px;
  margin-right: 6px;
  padding-top: 3px;
`
