import type { Filter } from '../types/definitions'

export function getFilteredCollection<T>(collection: T[] | undefined, filters: Array<Filter<T>>): T[] | undefined {
  if (collection === undefined) {
    return undefined
  }

  return filters.reduce((acc, filter) => filter(acc), collection)
}
