import { useCallback, useEffect, useMemo, useRef } from 'react'
import { SelectPicker } from 'rsuite'
import styled from 'styled-components'

import { Field } from '../elements/Field'
import { FieldError } from '../elements/FieldError'
import { Label } from '../elements/Label'
import { useForceUpdate } from '../hooks/useForceUpdate'
import { normalizeString } from '../utils/normalizeString'

import type { Option } from '../types'
import type { SelectPickerProps } from 'rsuite'
import type { Promisable } from 'type-fest'

export type SelectProps = Omit<
  SelectPickerProps<any>,
  'as' | 'container' | 'data' | 'defaultValue' | 'id' | 'onChange' | 'value'
> & {
  defaultValue?: string
  error?: string
  isLabelHidden?: boolean
  isLight?: boolean
  label: string
  name: string
  onChange?: (nextValue: string | undefined) => Promisable<void>
  options: Option[]
}
export function Select({
  error,
  isLabelHidden = false,
  isLight = false,
  label,
  onChange,
  options,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  searchable = false,
  ...originalProps
}: SelectProps) {
  // eslint-disable-next-line no-null/no-null
  const boxRef = useRef<HTMLDivElement | null>(null)

  const { forceUpdate } = useForceUpdate()

  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useMemo(
    () => `${originalProps.name}-${JSON.stringify(originalProps.defaultValue)}`,
    [originalProps.defaultValue, originalProps.name]
  )

  const handleChange = useCallback(
    (nextValue: string | null) => {
      if (!onChange) {
        return
      }

      const normalizedNextValue = nextValue ?? undefined

      onChange(normalizedNextValue)
    },
    [onChange]
  )

  useEffect(() => {
    forceUpdate()
  }, [forceUpdate])

  return (
    <Field>
      <Label hasError={hasError} htmlFor={originalProps.name} isHidden={isLabelHidden}>
        {label}
      </Label>

      <Box ref={boxRef}>
        {boxRef.current && (
          <StyledSelectPicker
            key={key}
            $isLight={isLight}
            container={boxRef.current}
            data={options}
            id={originalProps.name}
            // The `unknown` type from Rsuite library is wrong. It should be inferred from `data` prop type.
            // `onChange: ((value: unknown, event: React.SyntheticEvent<Element, Event>) => void) | undefined`
            onChange={handleChange as any}
            searchable={searchable}
            {...originalProps}
          />
        )}
      </Box>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Field>
  )
}

const StyledSelectPicker = styled(SelectPicker)<{
  $isLight: boolean
}>`
  > .rs-picker-toggle {
    background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)} !important;
    border: 0;
  }
`

const Box = styled.div`
  position: relative;

  > .rs-picker-select {
    > .rs-picker-toggle {
      border: solid 1px ${p => p.theme.color.gainsboro} !important;
      font-size: 13px;
      line-height: 1.3846;
      padding: 4px 40px 6px 8px;

      :hover {
        border: solid 1px ${p => p.theme.color.blueYonder[100]} !important;
      }

      :active,
      :focus {
        border: solid 1px ${p => p.theme.color.blueGray[100]} !important;
      }

      > .rs-stack {
        > .rs-stack-item {
          > .rs-picker-toggle-placeholder {
            font-size: 13px;
            line-height: 1.3846;
          }

          > svg {
            height: 18px;
            margin-top: -2px;
          }
        }
      }
    }
  }
`
