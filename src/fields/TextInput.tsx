import classnames from 'classnames'
import { type FunctionComponent, useCallback, useMemo } from 'react'
import { Input as RsuiteInput } from 'rsuite'
import styled from 'styled-components'

import {
  getFieldBackgroundColorFactory,
  getFieldBorderColorFactoryForState,
  getFieldPlaceholderColorFactoryForState
} from './shared/utils'
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

import type { CommonFieldStyleProps } from './shared/types'
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
  error,
  Icon,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isSearchInput = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  onChange,
  size = Size.NORMAL,
  style,
  type = 'text',
  value,
  ...originalProps
}: TextInputProps) {
  const controlledClassname = useMemo(() => classnames('Field-TextInput', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([originalProps.disabled, originalProps.name])

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

  useFieldUndefineEffect(isUndefinedWhenDisabled && !!originalProps.disabled, onChange)

  return (
    <Field className={controlledClassname} style={style}>
      <Label
        disabled={originalProps.disabled}
        hasError={hasError}
        htmlFor={originalProps.name}
        isHidden={isLabelHidden}
      >
        {label}
      </Label>

      <InputBox $size={size}>
        <StyledRsuiteInput
          key={key}
          $hasError={hasError}
          $hasIcon={!!Icon}
          $isDisabled={originalProps.disabled}
          $isLight={isLight}
          $isReadOnly={originalProps.readOnly}
          $isTransparent={isTransparent}
          $size={size}
          id={originalProps.name}
          onChange={handleChange}
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
      </InputBox>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const PADDING: Record<Size, string> = {
  [Size.LARGE]: '8px 16px 11px',
  [Size.NORMAL]: '3px 8px 7px',
  [Size.SMALL]: '3px 8px 6px'
}
const PADDING_WITH_ICON: Record<Size, string> = {
  [Size.LARGE]: '8px 40px 11px 16px',
  [Size.NORMAL]: '3px 38px 6px 8px',
  [Size.SMALL]: '3px 38px 6px 8px'
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

const StyledRsuiteInput = styled(RsuiteInput)<
  CommonFieldStyleProps & {
    $size: Size
  }
>`
  background-color: ${getFieldBackgroundColorFactory()};
  border: solid 1px ${getFieldBorderColorFactoryForState('default')};
  border-radius: 0;
  color: ${p => p.theme.color.gunMetal};
  ${p => p.$isReadOnly && `cursor: default;`}
  font-size: 13px;
  font-weight: 500;
  line-height: 1;
  padding: ${p => (p.$hasIcon ? PADDING_WITH_ICON[p.$size] : PADDING[p.$size])};
  vertical-align: center;
  width: 100%;

  &::placeholder {
    color: ${getFieldPlaceholderColorFactoryForState('default')};
  }

  &:hover {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('hover')} !important;

    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('hover')};
    }
  }

  &:active,
  &:focus {
    background-color: ${getFieldBackgroundColorFactory()};
    border: solid 1px ${getFieldBorderColorFactoryForState('focus')} !important;
    outline: 0;

    &::placeholder {
      color: ${getFieldPlaceholderColorFactoryForState('focus')};
    }
  }
`

const InputBox = styled.div<{
  $size: Size
}>`
  position: relative;
  width: 100%;

  > .Element-IconBox {
    position: absolute;
    right: 10px;
    top: ${p => (p.$size === Size.LARGE ? '10px' : '5px')};
  }
`
