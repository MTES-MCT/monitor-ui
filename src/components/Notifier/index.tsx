import { useCallback, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'

import { NotificationEvent } from './NotificationEvent'

export { NotificationEvent }

export type NotifierProps = {
  isSideWindow?: boolean
}
export function Notifier({ isSideWindow = false }: NotifierProps) {
  const push = useCallback(
    (event: NotificationEvent) => {
      if (event.detail.isSideWindowError !== isSideWindow) {
        return
      }

      toast(event.detail.message, {
        autoClose: 60000,
        position: toast.POSITION.BOTTOM_RIGHT,
        type: event.detail.type
      })
    },

    // We don't want to depend on `isSideWindow` since it should never change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useEffect(() => {
    window.document.addEventListener('NOTIFICATION_EVENT', push as any)

    return () => {
      window.document.removeEventListener('NOTIFICATION_EVENT', push as any)
    }
  }, [push])

  return (
    <StyledToastContainer
      // We may wish to let the user be able to copy the notification message
      // which is not easy to achieve when the notification is draggable
      draggable={false}
    />
  )
}

// TODO Style the notifications with Adeline.
const StyledToastContainer = styled(ToastContainer)``
