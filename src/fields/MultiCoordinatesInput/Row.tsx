// TODO Clean, split and finalize this component.

import { useCallback, useMemo, useRef } from 'react'
import styled from 'styled-components'

import { Accent, Size } from '../../constants'
import { Button } from '../../elements/Button'
import { IconButton } from '../../elements/IconButton'
import { Delete, Edit, SelectRectangle } from '../../icons'
import { CoordinatesInput } from '../CoordinatesInput'
import { CoordinatesFormat } from '../CoordinatesInput/constants'

import type { Coordinates } from '../../types'
import type { Promisable } from 'type-fest'

type RowProps = {
  coordinates: Coordinates
  isEdited: boolean
  isLight: boolean
  isNew: boolean
  onCancel: () => Promisable<void>
  onCenter: () => Promisable<void>
  onDelete: () => Promisable<void>
  onEdit: () => Promisable<void>
  onSubmit: (nextCoordinates: Coordinates) => Promisable<void>
}
export function Row({
  coordinates,
  isEdited,
  isLight = false,
  isNew = false,
  onCancel,
  onCenter,
  onDelete,
  onEdit,
  onSubmit
}: RowProps) {
  const coordinatesRef = useRef<Coordinates | undefined>(undefined)

  const defaultValue = useMemo(() => (!isNew ? coordinates : undefined), [coordinates, isNew])

  const handleChange = useCallback((nextCoordinates: Coordinates | undefined) => {
    coordinatesRef.current = nextCoordinates
  }, [])

  const handleSubmit = useCallback(() => {
    if (!coordinatesRef.current) {
      return
    }

    onSubmit(coordinatesRef.current)
  }, [onSubmit])

  return (
    <Box>
      <InnerBox $isEdited={isEdited} $isLight={isLight}>
        {!isEdited && (
          <>
            {coordinates.join(', ')}

            <Button accent={Accent.LINK} Icon={SelectRectangle} onClick={onCenter}>
              Centrer sur la carte
            </Button>
          </>
        )}

        {isEdited && (
          <Form>
            <CoordinatesInput
              coordinatesFormat={CoordinatesFormat.DEGREES_MINUTES_SECONDS}
              defaultValue={defaultValue}
              isLabelHidden
              label="_"
              onChange={handleChange}
            />

            <FormButtonGroup>
              <Button accent={Accent.SECONDARY} onClick={onCancel} size={Size.SMALL}>
                Annuler
              </Button>
              <Button onClick={handleSubmit} size={Size.SMALL}>
                Valider
              </Button>
            </FormButtonGroup>
          </Form>
        )}
      </InnerBox>

      <IconButton accent={Accent.SECONDARY} Icon={Edit} onClick={onEdit} />
      <IconButton accent={Accent.SECONDARY} aria-label="Supprimer cette zone" Icon={Delete} onClick={onDelete} />
    </Box>
  )
}

const Box = styled.div`
  align-items: center;
  display: flex;
  margin: 8px 0 0;

  > button {
    margin: 0 0 0 8px;
  }
`

const InnerBox = styled.div<{
  $isEdited: boolean
  $isLight: boolean
}>`
  align-items: center;
  background-color: ${p => (p.$isLight ? p.theme.color.white : p.theme.color.gainsboro)};
  display: flex;
  flex-grow: 1;
  font-size: 13px;
  line-height: 1.3077; // = 17px
  justify-content: space-between;
  padding: ${p => (p.$isEdited ? '0 5px 0 0' : '6px 12px 6px')};
`

const Form = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

const FormButtonGroup = styled.div`
  > button:first-child {
    margin-right: 5px;
  }
`
