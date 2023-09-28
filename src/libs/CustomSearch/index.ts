/* eslint-disable @typescript-eslint/naming-convention */

import diacritics from 'diacritics'
import Fuse from 'fuse.js'

import { findCacheRecord, storeCacheRecord } from './cache'
import { cleanCollectionDiacritics } from '../../utils/cleanCollectionDiacritics'
import { getHashFromCollection } from '../../utils/getHashFromCollection'

import type { CustomSearchCacheRecord, CustomSearchKey, CustomSearchOptions } from './types'
import type { AnyObject } from '../../types'

export class CustomSearch<T extends AnyObject = AnyObject> {
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
      threshold = 0.4,
      withCacheInvalidation = false
    }: CustomSearchOptions = {}
  ) {
    // Will be `undefined` in any of those cases:
    // - no cache key was provided
    // - the cache record doesn't exist
    // - the cache record is invalidated because the collection hash has changed IF `withCacheInvalidation` is `true`
    const maybeCacheRecord = findCacheRecord(collection, cacheKey, withCacheInvalidation)

    const normalizedCollection: T[] =
      maybeCacheRecord?.normalizedCollection ?? isDiacriticSensitive
        ? collection
        : cleanCollectionDiacritics(collection, keys)

    this.#fuse = new Fuse(
      normalizedCollection,
      {
        ignoreLocation: shouldIgnoreLocation,
        isCaseSensitive,
        keys,
        threshold,
        useExtendedSearch: isStrict
      },
      maybeCacheRecord ? Fuse.parseIndex<T>(maybeCacheRecord.fuseSearchIndex) : undefined
    )
    this.#isDiacriticSensitive = isDiacriticSensitive
    this.#isStrict = isStrict
    this.#originalCollection = collection

    // If a cache key was provided
    // and the cache record was either nonexistent or invalidated,
    if (cacheKey && !maybeCacheRecord) {
      // we create a new cache record
      const newCacheRecord: CustomSearchCacheRecord = {
        fuseSearchIndex: this.#fuse.getIndex(),
        normalizedCollection,
        originalCollection: collection,
        originalCollectionHash: getHashFromCollection(collection)
      }

      // and store it
      storeCacheRecord(cacheKey, newCacheRecord)
    }
  }

  /**
   * Searches the entire collection, and returns a list of items matching this query.
   *
   * @param   query The keywords to look for
   * @param   limit Denotes the max number of returned search results
   * @returns       A list of matching items
   */
  find(query: string, limit?: number): T[] {
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
        // (because of the internal `CustomSearch` diacritic-less normalization)
        .map(({ refIndex }) => this.#originalCollection[refIndex] as T)
    )
  }
}

export type { CustomSearchKey, CustomSearchOptions }
