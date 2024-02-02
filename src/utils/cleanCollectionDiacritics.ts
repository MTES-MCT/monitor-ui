import diacritics from 'diacritics'
import { flow, get, update } from 'lodash/fp'

import type { CustomSearchKey } from '../libs/CustomSearch/types'
import type { AnyObject } from '../types/definitions'

/**
 * Replace all the diacritics with unaccented letters in a collection, targetting the provided keys.
 *
 * @param   collection  An array of objects
 * @param   keys        List of item prop path to clean, either a using strings
 *                      or [Fuse.js weighted objects](https://fusejs.io/api/options.html#keys)
 * @returns             The same collection with its specified keys normalized without diacritics
 *
 * @example
 * ```ts
 * const collection = [
 *   { name: 'aérosol', description: 'Un aérosol.', author: { name: 'Camille Hervé' } },
 *   { name: 'martèlement', description: 'Un martèlement.', author: { name: 'Athénée Perreault' } }
 * ]
 *
 * const normalizedCollection = cleanCollectionDiacritics(collection, ['name', 'author.name'])
 * console.log(normalizedCollection[0])
 * // => `{ "name": "aerosol", "description": "Un aérosol.", author: { name: 'Camille Herve' } }`
 *
 * const normalizedCollection = cleanCollectionDiacritics(collection, [{ name: 'name', weight: 1 }])
 * console.log(normalizedCollection[0])
 * // => `{ "name": "aerosol", "description": "Un aérosol.", author: { name: 'Camille Hervé' }`
 * ```
 */
export function cleanCollectionDiacritics<T extends AnyObject = AnyObject>(
  collection: T[],
  keys: Array<CustomSearchKey<T>>
): T[] {
  // These are the prop paths that needs to be normalized,
  // represented as an array dot-seperated strings (i.e.: `['aProperty', 'a.nested.property']`)
  const collectionKeysAsPaths = keys.map(key => (typeof key === 'string' ? key : key.name))

  // Now that we have a list of prop paths, we want to generate a list of transformers
  // able for remove diacritics of a collection item, one transformer per collection item prop path.
  const collectionItemTransformers = collectionKeysAsPaths.map(collectionKeyAsPath => (collectionItem: T): T => {
    const collectionItemPropValue = get(collectionKeyAsPath, collectionItem)

    // This type check is a safeguard against unexpected values (a non-string value would otherwise throw an error)
    if (typeof get(collectionKeyAsPath, collectionItem) !== 'string') {
      console.warn(`"${collectionKeyAsPath}" is not a string (value: \`${collectionItemPropValue}\`).`)

      return collectionItem
    }

    return update(collectionKeyAsPath, diacritics.remove, collectionItem)
  })

  // We can then generate a single function piping all these collection item transformers...
  const cleanCollectionItemDiacritics: (collectionItem: T) => T = flow(collectionItemTransformers)

  // ...and apply them to each collection item via a mapper
  return collection.map(cleanCollectionItemDiacritics)
}
