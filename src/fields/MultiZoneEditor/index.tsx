// TODO Clean, split and finalize this component.

import { Accent } from '@constants'
import { Button } from '@elements/Button'
import { FieldError } from '@elements/FieldError'
import { Fieldset } from '@elements/Fieldset'
import { IconButton } from '@elements/IconButton'
import { useFieldUndefineEffect } from '@hooks/useFieldUndefineEffect'
import { normalizeString } from '@utils/normalizeString'
import { remove } from '@utils/remove'
import classnames from 'classnames'
import { getFieldBackgroundColorFactory } from 'fields/shared/utils'
import isEqual from 'lodash/isEqual'
import { useCallback, useEffect, useId, useMemo, useRef, useState, type CSSProperties } from 'react'
import styled from 'styled-components'

import { Delete, Edit, Plus, SelectRectangle } from '../../icons'

import type { CommonFieldStyleProps } from 'fields/shared/types'
import type { Promisable } from 'type-fest'

export type MultiZoneEditorProps = {
  addButtonLabel: string
  className?: string | undefined
  defaultValue?: Record<string, any>[] | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  initialZone: Record<string, any>
  isAddButtonDisabled?: boolean | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  labelPropName: string
  onAdd?: (nextZones: Record<string, any>[], index: number) => Promisable<void>
  onCenter?: (zone: Record<string, any>) => Promisable<void>
  onChange?: (nextZones: Record<string, any>[] | undefined) => Promisable<void>
  onDelete?: (nextZones: Record<string, any>[]) => Promisable<void>
  onEdit?: (zone: Record<string, any>, index: number) => Promisable<void>
  readOnly?: boolean | undefined
  style?: CSSProperties | undefined
}
export function MultiZoneEditor({
  addButtonLabel,
  className,
  defaultValue = [],
  disabled = false,
  error,
  initialZone,
  isAddButtonDisabled = false,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  labelPropName,
  onAdd,
  onCenter,
  onChange,
  onDelete,
  onEdit,
  readOnly = false,
  style
}: MultiZoneEditorProps) {
  const prevDefaultValueRef = useRef(defaultValue)
  const multizoneId = useId()

  const [zones, setZones] = useState(defaultValue)

  const controlledClassName = useMemo(() => classnames('Field-MultiZoneEditor', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const addZone = useCallback(() => {
    const nextZones = [...zones, initialZone]

    if (onAdd) {
      onAdd(nextZones, nextZones.length)
    }

    setZones(nextZones)
  }, [initialZone, onAdd, zones])

  const centerZone = useCallback(
    (zone: Record<string, any>) => {
      if (onCenter) {
        onCenter(zone)
      }
    },
    [onCenter]
  )

  const deleteZone = useCallback(
    (index: number) => {
      const nextZones = remove(index, 1, zones)

      setZones(nextZones)

      if (onDelete) {
        onDelete(nextZones)
      }
    },
    [onDelete, zones]
  )

  const editZone = useCallback(
    (index: number, zone: Record<string, any>) => {
      if (onEdit) {
        onEdit(zone, index)
      }
    },
    [onEdit]
  )

  const handleDisable = useCallback(() => {
    setZones([])
  }, [])

  useEffect(() => {
    if (isEqual(defaultValue, prevDefaultValueRef.current)) {
      return
    }

    setZones(defaultValue)
  }, [defaultValue])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, handleDisable)

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      id={multizoneId}
      isLegendHidden={isLabelHidden}
      isRequired={isRequired}
      legend={label}
      style={style}
    >
      <Button
        accent={hasError ? Accent.ERROR : Accent.SECONDARY}
        disabled={disabled || isAddButtonDisabled}
        Icon={Plus}
        isFullWidth
        onClick={addZone}
      >
        {addButtonLabel}
      </Button>

      <>
        {zones.map((zone, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={`zone-${index}`}>
            <ZoneBox
              $hasError={hasError}
              $isDisabled={disabled}
              $isLight={isLight}
              $isReadOnly={readOnly}
              $isTransparent={isTransparent}
            >
              {zone[labelPropName]}

              {/* TODO Add `Accent.LINK` accent in @mtes-mct/monitor-ui and use it here. */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <Link onClick={() => centerZone(zone)}>
                <SelectRectangle />
                <span>Centrer sur la carte</span>
              </Link>
            </ZoneBox>

            <IconButton accent={Accent.SECONDARY} Icon={Edit} onClick={() => editZone(index, zone)} />
            <IconButton
              accent={Accent.SECONDARY}
              aria-label="Supprimer cette zone"
              Icon={Delete}
              onClick={() => deleteZone(index)}
            />
          </Row>
        ))}
      </>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const Row = styled.div`
  align-items: center;
  display: flex;
  margin: 8px 0 0;

  > button {
    margin: 0 0 0 8px;
  }
`

const ZoneBox = styled.div<CommonFieldStyleProps>`
  background-color: ${getFieldBackgroundColorFactory()};
  display: flex;
  flex-grow: 1;
  font-size: 13px;
  line-height: 1.3077; // = 17px
  justify-content: space-between;
  padding: 6px 12px 6px;
`

const Link = styled.a`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  color: ${p => p.theme.color.slateGray};

  > span {
    line-height: 1;
    margin: -2px 0 0 8px;
    text-decoration: underline;
  }
  &:hover {
    color: ${p => p.theme.color.gunMetal};
  }
`
