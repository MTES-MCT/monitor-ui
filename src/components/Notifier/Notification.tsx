import { Notification as RsuiteNotification } from 'rsuite'
import styled from 'styled-components'

import type { MessageType } from 'rsuite/esm/Notification/Notification'

export type NotificationProps = {
  message: string
  type: MessageType
}
export function Notification({ message, type }: NotificationProps) {
  return (
    <StyledNotification closable header="Erreur" type={type}>
      {message}
    </StyledNotification>
  )
}

const StyledNotification = styled(RsuiteNotification)`
  margin: 0 0 24px !important;
`
