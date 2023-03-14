import { equals, includes, reject } from 'ramda'

/**
 * Add the provided `item` in a collection if this collection doesn't include it or remove it if this collection does.
 *
 * This is useful with object collections and polymorphic types.
 */
export function toggleInCollection<Item extends number | string | Record<string, any>>(
  item: Item,
  collection: Item[]
): Item[] {
  const isInCollection = includes(item, collection)

  return isInCollection ? reject(equals(item), collection) : [...collection, item]
}
