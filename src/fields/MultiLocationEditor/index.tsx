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
import { isEqual } from 'lodash-es'
import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { Delete, Edit, Plus, SelectRectangle } from '../../icons'

import type { CommonFieldStyleProps } from 'fields/shared/types'
import type { Promisable } from 'type-fest'

type Options = {
  buttonLabel: string
  initialValue: Record<string, any>
  isButtonDisabled?: boolean
  onAdd?: (nextLocation: Record<string, any>[], index: number) => Promisable<void>
}

export type MultiLocationEditorProps = {
  className?: string | undefined
  defaultValue?: Record<string, any>[] | undefined
  disabled?: boolean | undefined
  error?: string | undefined
  isErrorMessageHidden?: boolean | undefined
  isLabelHidden?: boolean
  isLight?: boolean | undefined
  isRequired?: boolean | undefined
  isTransparent?: boolean | undefined
  isUndefinedWhenDisabled?: boolean | undefined
  label: string
  labelPropName: string
  onCenter?: (zone: Record<string, any>) => Promisable<void>
  onChange?: (nextZones: Record<string, any>[] | undefined) => Promisable<void>
  onDelete?: (nextZones: Record<string, any>[]) => Promisable<void>
  onEdit?: (zone: Record<string, any>, index: number) => Promisable<void>
  pointOptions?: Options | undefined
  readOnly?: boolean | undefined
  style?: CSSProperties | undefined
  zoneOptions?: Options | undefined
}

export function MultiLocationEditor({
  className,
  defaultValue = [],
  disabled = false,
  error,
  isErrorMessageHidden = false,
  isLabelHidden = false,
  isLight = false,
  isRequired = false,
  isTransparent = false,
  isUndefinedWhenDisabled = false,
  label,
  labelPropName,
  onCenter,
  onChange,
  onDelete,
  onEdit,
  pointOptions,
  readOnly = false,
  style,
  zoneOptions
}: MultiLocationEditorProps) {
  const prevDefaultValueRef = useRef(defaultValue)

  const [locations, setLocations] = useState(defaultValue)

  const controlledClassName = useMemo(() => classnames('Field-MultiLocationEditor', className), [className])
  const controlledError = useMemo(() => normalizeString(error), [error])
  const hasError = useMemo(() => Boolean(controlledError), [controlledError])

  const add = useCallback(
    ({ initialValue, onAdd }: Options) => {
      const nextZones = [...locations, initialValue]

      if (onAdd) {
        onAdd(nextZones, nextZones.length)
      }

      setLocations(nextZones)
    },
    [locations]
  )

  const centerLocation = useCallback(
    (zone: Record<string, any>) => {
      if (onCenter) {
        onCenter(zone)
      }
    },
    [onCenter]
  )

  const deleteLocation = useCallback(
    (index: number) => {
      const nextLocations = remove(index, 1, locations)

      setLocations(nextLocations)

      if (onDelete) {
        onDelete(nextLocations)
      }
    },
    [onDelete, locations]
  )

  const editLocation = useCallback(
    (index: number, location: Record<string, any>) => {
      if (onEdit) {
        onEdit(location, index)
      }
    },
    [onEdit]
  )

  const handleDisable = useCallback(() => {
    setLocations([])
  }, [])

  useEffect(() => {
    if (isEqual(defaultValue, prevDefaultValueRef.current)) {
      return
    }

    setLocations(defaultValue)
  }, [defaultValue])

  useFieldUndefineEffect(isUndefinedWhenDisabled && disabled, onChange, handleDisable)

  return (
    <Fieldset
      className={controlledClassName}
      disabled={disabled}
      isLegendHidden={isLabelHidden}
      isRequired={isRequired}
      legend={label}
      style={style}
    >
      <Controls>
        {pointOptions && (
          <Button
            accent={hasError ? Accent.ERROR : Accent.SECONDARY}
            disabled={disabled || pointOptions.isButtonDisabled === true}
            Icon={Plus}
            isFullWidth
            onClick={() => add(pointOptions)}
          >
            {pointOptions.buttonLabel}
          </Button>
        )}

        {zoneOptions && (
          <Button
            accent={hasError ? Accent.ERROR : Accent.SECONDARY}
            disabled={disabled || zoneOptions.isButtonDisabled === true}
            Icon={Plus}
            isFullWidth
            onClick={() => add(zoneOptions)}
          >
            {zoneOptions.buttonLabel}
          </Button>
        )}
      </Controls>
      <>
        {locations.map((zone, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={`zone-${index}`}>
            <LocationBox
              $hasError={hasError}
              $isDisabled={disabled}
              $isLight={isLight}
              $isReadOnly={readOnly}
              $isTransparent={isTransparent}
            >
              {zone[labelPropName]}

              {/* TODO Add `Accent.LINK` accent in @mtes-mct/monitor-ui and use it here. */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <Link onClick={() => centerLocation(zone)}>
                <SelectRectangle />
                <span>Centrer sur la carte</span>
              </Link>
            </LocationBox>

            <IconButton
              accent={Accent.SECONDARY}
              Icon={Edit}
              onClick={() => editLocation(index, zone)}
              title="Modifier cette zone"
            />
            <IconButton
              accent={Accent.SECONDARY}
              Icon={Delete}
              onClick={() => deleteLocation(index)}
              title="Supprimer cette zone"
            />
          </Row>
        ))}
      </>

      {!isErrorMessageHidden && hasError && <FieldError>{controlledError}</FieldError>}
    </Fieldset>
  )
}

const Controls = styled.div`
  display: flex;
  gap: 8px;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  margin: 8px 0 0;

  > button {
    margin: 0 0 0 8px;
  }
`

const LocationBox = styled.div<CommonFieldStyleProps>`
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
