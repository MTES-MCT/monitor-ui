export function isArray<T>(value: any): value is T[] {
  // eslint-disable-next-line no-null/no-null
  return typeof value === 'object' && value !== null && Array.isArray(value)
}
