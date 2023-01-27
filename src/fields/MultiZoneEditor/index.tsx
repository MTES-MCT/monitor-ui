// TODO Clean, split and finalize this component.

import { equals, remove } from 'ramda'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Accent } from '../../constants'
import { Button } from '../../elements/Button'
import { Fieldset } from '../../elements/Fieldset'
import { IconButton } from '../../elements/IconButton'
import { Delete, Edit, Plus, SelectRectangle } from '../../icons'

import type { Promisable } from 'type-fest'

export type MultiZoneEditorProps = {
  addButtonLabel: string
  defaultValue?: Record<string, any>[] | undefined
  initialZone: Record<string, any>
  isLabelHidden?: boolean
  isLight?: boolean | undefined
  label: string
  labelPropName: string
  onAdd?: ((nextZones: Record<string, any>[], index: number) => Promisable<void>) | undefined
  onCenter?: ((zone: Record<string, any>) => Promisable<void>) | undefined
  onDelete?: ((nextZones: Record<string, any>[]) => Promisable<void>) | undefined
  onEdit?: ((zone: Record<string, any>, index: number) => Promisable<void>) | undefined
}
export function MultiZoneEditor({
  addButtonLabel,
  defaultValue = [],
  initialZone,
  isLabelHidden = false,
  isLight = false,
  label,
  labelPropName,
  onAdd,
  onCenter,
  onDelete,
  onEdit
}: MultiZoneEditorProps) {
  const prevDefaultValueRef = useRef(defaultValue)

  const [zones, setZones] = useState(defaultValue)

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

  useEffect(() => {
    if (equals(defaultValue, prevDefaultValueRef.current)) {
      return
    }

    setZones(defaultValue)
  }, [defaultValue])

  return (
    <Fieldset isHidden={isLabelHidden} isLight={isLight} legend={label}>
      <Button accent={Accent.SECONDARY} Icon={Plus} isFullWidth onClick={addZone}>
        {addButtonLabel}
      </Button>

      <>
        {zones.map((zone, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={`zone-${index}`}>
            <ZoneWrapper>
              {zone[labelPropName]}

              {/* TODO Add `Accent.LINK` accent in @mtes-mct/monitor-ui and use it here. */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <Link onClick={() => centerZone(zone)}>
                <SelectRectangle />
                <span>Centrer sur la carte</span>
              </Link>
            </ZoneWrapper>

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

const ZoneWrapper = styled.div`
  background-color: ${p => p.theme.color.gainsboro};
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

  > span {
    line-height: 1;
    margin: -2px 0 0 8px;
  }
`
