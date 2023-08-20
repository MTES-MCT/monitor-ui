export function isObject<T extends { [key: string]: any }>(value: any): value is T {
  // eslint-disable-next-line no-null/no-null
  return typeof value === 'object' && value !== null && !Array.isArray(value) && value.constructor.name === 'Object'
}
