import { isEmpty } from 'lodash/fp'

/**
 * Checks if a value is empty or not, including strings with only whitespaces.
 */
export function isEmptyish(value: any) {
  if (typeof value === 'string') {
    return !value.trim().length
  }

  return isEmpty(value)
}
