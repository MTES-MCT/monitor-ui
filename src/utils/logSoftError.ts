/* eslint-disable no-console */

import { captureMessage } from '@sentry/react'

import { NotificationEvent } from '../components/Notifier'

export function logSoftError({
  context = {},
  isSideWindowError = false,
  message,
  originalError,
  userMessage
}: {
  context?: Record<string, any>
  isSideWindowError?: boolean
  message: string
  originalError?: any
  userMessage?: string
}) {
  console.group(`Soft Error: ${message}`)
  console.debug('context', context)
  console.debug('originalError', originalError)
  console.groupEnd()

  const extra = originalError
    ? {
        ...context,
        originalError
      }
    : { ...context }
  captureMessage(message, {
    extra,
    level: 'warning'
  })

  if (userMessage) {
    window.document.dispatchEvent(new NotificationEvent(userMessage, 'error', isSideWindowError))
  }
}
