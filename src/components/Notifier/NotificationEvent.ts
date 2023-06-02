import type { TypeOptions } from 'react-toastify'

export type NotificationEventDetail = {
  isSideWindowError: boolean
  message: string
  type: TypeOptions
}
export class NotificationEvent extends CustomEvent<NotificationEventDetail> {
  constructor(message: string, type: TypeOptions, isSideWindowError: boolean = false) {
    super('NOTIFICATION_EVENT', {
      detail: {
        isSideWindowError,
        message,
        type
      }
    })
  }
}
