/* eslint-disable no-console */

export class MonitorUiError extends Error {
  error: any
  scope: string

  constructor(message: string | undefined, scope: string, error?: any) {
    const controlledMessage = message || 'An unexpected error occured'

    super(controlledMessage)

    this.error = error
    this.scope = scope

    const logMessage = `[Monitor UI] [${scope}] ${controlledMessage}.`
    console.warn(logMessage)
    console.warn('[Monitor UI] Enable the debug logs to see the error:')
    console.debug(error)
  }
}
