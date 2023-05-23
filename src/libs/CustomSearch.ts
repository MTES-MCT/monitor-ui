import diacritics from 'diacritics'
import Fuse from 'fuse.js'
import { update } from 'lodash'

export type CustomSearchOptions = Partial<{
  /** Cache search index to avoid Must be unique in the entire application. */
  cacheKey: string | undefined
  /**
   * Indicates whether comparisons should be case sensitive.
   *
   * @default false
   * @see https://fusejs.io/api/options.html#iscasesensitive
   */
  isCaseSensitive: boolean
  /** Indicates whether comparisons should be diacritic (= accent) sensitive. */
  isDiacriticSensitive: boolean
  /**
   * Use strict keywords matching, disabling fuzziness.
   *
   * @default false
   * @description
   * Looking for "emoi" in ["mÉMOIre", "mÉMOrIsable"] will return only the first one if `isStrict` is `true`,
   * instead of returning both by default (`false`).
   */
  isStrict: boolean
  /**
   * At what point does the match algorithm give up.
   *
   * @default 0.6
   * @description
   * A threshold of `0.0` requires a perfect match (of both letters and location),
   * a threshold of `1.0` would match anything.
   *
   * @see https://fusejs.io/api/options.html#threshold
   */
  threshold: number
}>

export type CustomSearchKey<T> = string | Fuse.FuseOptionKeyObject<T>

/**
 * We take advantage of the global JS scope to use this constant as a "singleton" cache
 * to avoid re-normalizing and re-search-indexing each time `CustomSearch` is instanciated.
 *
 * This cache will only be used if the `cacheKey` option is set while instanciating `CustomSearch`.
 */
const FUSE_SEARCH_CACHE: Record<
  string,
  {
    fuseSearchIndex: any
    normalizedCollection: any
    originalCollection: any
  }
> = {}

export class CustomSearch<T extends Record<string, any> = Record<string, any>> {
  #originalCollection: T[]
  #fuse: Fuse<T>
  /** See {@link CustomSearchOptions.isDiacriticSensitive}. */
  #isDiacriticSensitive: boolean
  /** See {@link CustomSearchOptions.isStrict}. */
  #isStrict: boolean

  constructor(
    collection: T[],
    keys: Array<CustomSearchKey<T>>,
    {
      cacheKey,
      isCaseSensitive = false,
      isDiacriticSensitive = false,
      isStrict = false,
      threshold = 0.6
    }: CustomSearchOptions = {}
  ) {
    const maybeCache = cacheKey ? FUSE_SEARCH_CACHE[cacheKey] : undefined
    // eslint-disable-next-line no-nested-ternary
    const normalizedCollection: T[] = maybeCache
      ? maybeCache.normalizedCollection
      : isDiacriticSensitive
      ? collection
      : CustomSearch.cleanCollectionDiacritics(collection, keys)

    this.#fuse = new Fuse(
      normalizedCollection,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      { isCaseSensitive, keys, threshold, useExtendedSearch: isStrict },
      maybeCache ? Fuse.parseIndex<T>(maybeCache.fuseSearchIndex) : undefined
    )
    this.#isDiacriticSensitive = isDiacriticSensitive
    this.#isStrict = isStrict
    this.#originalCollection = maybeCache ? maybeCache.originalCollection : collection

    if (cacheKey && !maybeCache) {
      FUSE_SEARCH_CACHE[cacheKey] = {
        fuseSearchIndex: this.#fuse.getIndex(),
        normalizedCollection,
        originalCollection: collection
      }
    }
  }

  /**
   * Searches the entire collection, and returns a list of items matching this query.
   *
   * @param query The keywords to look for
   * @param limit Denotes the max number of returned search results
   * @returns     A list of matching items
   */
  public find(query: string, limit?: number): T[] {
    const normalizedQuery = this.#isDiacriticSensitive ? query : diacritics.remove(query)

    // Here we use Fuse.js `useExtendedSearch` option to avoid fuzziness
    // when `CustomSearch` `isStrict` option is set to `true`.
    // In that case we want each space-separated `query` keywords to be strict
    // and only return results containing words exactly including each of these keywords.
    // I.e.: Looking for "ÉMOI" in ["mÉMOIre", "mÉMOrIsable"] will return only the first one instead of returning both.
    // https://fusejs.io/examples.html#extended-search
    const extendedQuery = this.#isStrict
      ? normalizedQuery
          .split(/\s+/)
          .map(keyword => `'${keyword}`)
          .join(' ')
      : normalizedQuery

    return (
      this.#fuse
        .search(extendedQuery, limit ? { limit } : undefined)
        // We remap to the original collection since the normalized collection can have some accents removed
        // (because of the internal diacritic-less normalization)
        .map(({ refIndex }) => this.#originalCollection[refIndex] as T)
    )
  }

  /**
   * Replace all the diacritics with unaccented letters in a collection, targetting the provided keys.
   *
   * @param collection  An array of objects
   * @param keys        List of item prop path to clean, either a using strings
   *                    or [Fuse.js weighted objects](https://fusejs.io/api/options.html#keys)
   * @returns           The same collection with its specified keys normalized without diacritics
   *
   * @example
   * ```ts
   * const collection = [
   *   { name: 'aérosol', description: 'Un aérosol.', author: { name: 'Camille Hervé' } },
   *   { name: 'martèlement', description: 'Un martèlement.', author: { name: 'Athénée Perreault' } }
   * ]
   *
   * const normalizedCollection = CustomSearch.cleanCollectionDiacritics(collection, ['name', 'author.name'])
   * console.log(normalizedCollection[0])
   * // => `{ "name": "aerosol", "description": "Un aérosol.", author: { name: 'Camille Herve' } }`
   *
   * const normalizedCollection = CustomSearch.cleanCollectionDiacritics(collection, [{ name: 'name', weight: 1 }])
   * console.log(normalizedCollection[0])
   * // => `{ "name": "aerosol", "description": "Un aérosol.", author: { name: 'Camille Hervé' }`
   * ```
   */
  public static cleanCollectionDiacritics<T extends Record<string, any> = Record<string, any>>(
    collection: T[],
    keys: Array<CustomSearchKey<T>>
  ): T[] {
    // These are the prop paths that needs to be normalized,
    // represented as an array dot-seperated strings (i.e.: `['aProperty', 'a.nested.property']`)
    const collectionKeysAsStrings = keys.map(key => (typeof key === 'string' ? key : key.name))

    // TODO This does not follow FP principles.
    // Maybe there is an FP-friendly solution using Lodash (via 'lodash/fp') or vanilla JS?
    return collection.map(collectionItem => {
      // We have to destructure the collection item in order to avoid pointer modifications since `update()` is not FP
      const normalizedCollectionItem = { ...collectionItem }

      collectionKeysAsStrings.forEach(keyAsString => {
        // Be careful here, `keyAsString` can contains dots to represent nested properties, which `update()` understands
        update(normalizedCollectionItem, keyAsString, itemPropValue =>
          // The type check is a safeguard against unexpected values (a non-string would otherwise throw an error)
          typeof itemPropValue === 'string' ? diacritics.remove(itemPropValue) : itemPropValue
        )
      })

      return normalizedCollectionItem
    })
  }
}
