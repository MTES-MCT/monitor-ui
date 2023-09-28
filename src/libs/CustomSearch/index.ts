import diacritics from 'diacritics'
import Fuse from 'fuse.js'

import { cleanCollectionDiacritics } from './utils/cleanCollectionDiacritics'

import type { CustomSearchKey, CustomSearchOptions } from './types'

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
      shouldIgnoreLocation = true,
      threshold = 0.4
    }: CustomSearchOptions = {}
  ) {
    const maybeCache = cacheKey ? FUSE_SEARCH_CACHE[cacheKey] : undefined
    // eslint-disable-next-line no-nested-ternary
    const normalizedCollection: T[] = maybeCache
      ? maybeCache.normalizedCollection
      : isDiacriticSensitive
      ? collection
      : cleanCollectionDiacritics(collection, keys)

    this.#fuse = new Fuse(
      normalizedCollection,
      /* eslint-disable @typescript-eslint/naming-convention */
      {
        ignoreLocation: shouldIgnoreLocation,
        isCaseSensitive,
        keys,
        threshold,
        useExtendedSearch: isStrict
      },
      /* eslint-enable @typescript-eslint/naming-convention */
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
   * @param   query The keywords to look for
   * @param   limit Denotes the max number of returned search results
   * @returns       A list of matching items
   */
  public find(query: string, limit?: number): T[] {
    const normalizedQuery = (this.#isDiacriticSensitive ? query : diacritics.remove(query)).trim()

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
}

export type { CustomSearchKey, CustomSearchOptions }
