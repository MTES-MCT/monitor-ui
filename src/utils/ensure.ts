/**
 * Ensure that a value is not undefined.
 *
 * @internal
 */
export function ensure<T>(value: T | undefined, variableName: string): T {
  if (value === undefined) {
    throw new Error(`[monitor-ui] \`${variableName}\` is undefined.`)
  }

  return value
}
