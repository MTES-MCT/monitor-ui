/* eslint-disable no-console */

export class MonitorUiError extends Error {
  error: any
  scope: string

  constructor(message: string | undefined, scope: string, error?: any) {
    const controlledMessage = message || 'An unexpected error occured'

    super(controlledMessage)

    this.error = error
    this.scope = scope

    const fullScope = `[${this.constructor.name}] [${scope}]`
    const logMessage = `${fullScope} ${controlledMessage}.`
    console.warn(logMessage)
    if (error) {
      console.warn(`${fullScope} Enable the debug logs to see the error:`)
      console.debug(error)
    }
  }
}
