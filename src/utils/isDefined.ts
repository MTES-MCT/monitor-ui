/**
 * Is the value defined and non-null?
 */
export function isDefined<T>(value?: T | null | undefined): value is T {
  // eslint-disable-next-line no-null/no-null
  return value !== undefined && value !== null
}
