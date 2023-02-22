// TODO Clean, split and finalize this component.

import { remove as ramdaRemove, update as ramdaUpdate } from 'ramda'
import { useCallback, useMemo, useState } from 'react'

import { Accent } from '../../constants'
import { Button } from '../../elements/Button'
import { FieldError } from '../../elements/FieldError'
import { Fieldset } from '../../elements/Fieldset'
import { useFieldUndefineEffect } from '../../hooks/useFieldUndefineEffect'
import { useFieldValue } from '../../hooks/useFieldValue'
import { useKey } from '../../hooks/useKey'
import { Plus } from '../../icons'
import { MonitorUiError } from '../../libs/MonitorUiError'
import { normalizeString } from '../../utils/normalizeString'
import { Row } from './Row'

import type { NativeFieldsetProps } from '../../elements/Fieldset'
import type { Coordinates } from '../../types'
import type { Promisable } from 'type-fest'

export type MultiCoordinatesInputProps = NativeFieldsetProps & {
  addButtonLabel: string
  defaultValue?: Coordinates[] | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isLabelHidden?: boolean
  isLight?: boolean | undefined
  label: string
  onCenter?: ((zone: Record<string, any>) => Promisable<void>) | undefined
  onChange?: ((nextCoordinatesList: Record<string, any>[] | undefined) => Promisable<void>) | undefined
}
export function MultiCoordinatesInput({
  addButtonLabel,
  defaultValue,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  disabled = false,
  error,
  isLabelHidden = false,
  isLight = false,
  label,
  onCenter,
  onChange,
  ...nativeProps
}: MultiCoordinatesInputProps) {
  const [editedIndex, setEditedIndex] = useState<number | undefined>(undefined)
  // = Does the edited index use new coordinates?
  const [isEditedIndexNew, setIsEditedIndexNew] = useState(false)

  const { controlledDefaultValue, setValue, value } = useFieldValue(defaultValue)
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])
  const key = useKey([controlledDefaultValue, disabled, nativeProps.name])

  const add = useCallback(() => {
    const nextValue: Coordinates[] = [...(value || []), [0, 0]]

    setEditedIndex(nextValue.length - 1)
    setIsEditedIndexNew(true)
    setValue(nextValue)
  }, [setValue, value])

  const cancel = useCallback(() => {
    if (!value) {
      throw new MonitorUiError('`value` is undefined. This should never happen.', '<MultiCoordinatesInput />')
    }
    if (value.length === 0) {
      throw new MonitorUiError('`value` array is empty. This should never happen.', '<MultiCoordinatesInput />')
    }

    if (isEditedIndexNew) {
      const nextValue = ramdaRemove(value.length - 1, 1, value)

      setValue(nextValue)
    }

    setEditedIndex(undefined)
    setIsEditedIndexNew(false)
  }, [isEditedIndexNew, setValue, value])

  const center = useCallback(
    (coordinates: Coordinates) => {
      if (onCenter) {
        onCenter(coordinates)
      }
    },
    [onCenter]
  )

  const handleDisable = useCallback(() => {
    setValue(undefined)
  }, [setValue])

  const remove = useCallback(
    (index: number) => {
      if (!value) {
        throw new MonitorUiError('`value` is undefined. This should never happen.', '<MultiCoordinatesInput />')
      }
      if (value.length === 0) {
        throw new MonitorUiError('`value` array is empty. This should never happen.', '<MultiCoordinatesInput />')
      }

      const nextValue = ramdaRemove(index, 1, value)
      const normalizedNextValue = nextValue.length !== 0 ? nextValue : undefined

      setValue(normalizedNextValue)

      if (onChange) {
        onChange(normalizedNextValue)
      }
    },
    [onChange, setValue, value]
  )

  const update = useCallback(
    (updatedCoordinates: Coordinates) => {
      if (editedIndex === undefined) {
        throw new MonitorUiError('`editedIndex` is undefined. This should never happen.', '<MultiCoordinatesInput />')
      }
      if (!value) {
        throw new MonitorUiError('`value` is undefined. This should never happen.', '<MultiCoordinatesInput />')
      }
      if (value.length === 0) {
        throw new MonitorUiError('`value` array is empty. This should never happen.', '<MultiCoordinatesInput />')
      }

      const nextValue = ramdaUpdate(editedIndex, updatedCoordinates, value)

      setEditedIndex(undefined)
      setIsEditedIndexNew(false)
      setValue(nextValue)

      if (onChange) {
        onChange(nextValue)
      }
    },
    [editedIndex, onChange, setValue, value]
  )

  useFieldUndefineEffect(disabled, onChange, handleDisable)

  return (
    <Fieldset key={key} disabled={disabled} isLegendHidden={isLabelHidden} legend={label} {...nativeProps}>
      <Button accent={Accent.SECONDARY} disabled={disabled} Icon={Plus} isFullWidth onClick={add}>
        {addButtonLabel}
      </Button>

      <>
        {value &&
          value.map((coordinates, index) => (
            <Row
              // eslint-disable-next-line react/no-array-index-key
              key={`coordinates-${index}`}
              coordinates={coordinates}
              isEdited={index === editedIndex}
              isLight={isLight}
              isNew={isEditedIndexNew}
              onCancel={cancel}
              onCenter={() => center(coordinates)}
              onDelete={() => remove(index)}
              onEdit={() => setEditedIndex(index)}
              onSubmit={update}
            />
          ))}
      </>

      {hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}
