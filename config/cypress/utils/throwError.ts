export function throwError(message: string): never {
  throw new Error(`[monitor-ui > Cypress] ${message}`)
}
