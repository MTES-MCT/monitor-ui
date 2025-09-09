/* eslint-disable @typescript-eslint/naming-convention */

import diacritics from 'diacritics'
import Fuse from 'fuse.js'

import { findCacheRecord, storeCacheRecord } from './cache'
import { cleanCollectionDiacritics } from '../../utils/cleanCollectionDiacritics'
import { getHashFromCollection } from '../../utils/getHashFromCollection'

import type { CustomSearchCacheRecord, CustomSearchKey, CustomSearchOptions } from './types'
import type { AnyObject } from '../../types/definitions'

export class CustomSearch<T extends AnyObject = AnyObject> {
  #originalCollection: T[]
  #fuse: Fuse<T>
  /** See {@link CustomSearchOptions.isDiacriticSensitive}. */
  #isDiacriticSensitive: boolean
  /** See {@link CustomSearchOptions.isStrict}. */
  #isStrict: boolean
  #childrenKey?: keyof T

  constructor(
    collection: T[],
    keys: Array<CustomSearchKey<T>>,
    {
      cacheKey,
      childrenKey,
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

    const flatOriginalCollection = this.#flattenCollection(collection, childrenKey)

    const normalizedCollection: T[] =
      (maybeCacheRecord?.normalizedCollection ?? isDiacriticSensitive)
        ? flatOriginalCollection
        : cleanCollectionDiacritics(flatOriginalCollection, keys)
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
    this.#childrenKey = childrenKey

    this.#originalCollection = flatOriginalCollection

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

    if (!this.#childrenKey) {
      return this.#fuse
        .search(extendedQuery, limit ? { limit } : undefined)
        .map(({ refIndex }) => this.#originalCollection[refIndex] as T)
    }

    // Tree collection: recursive filter
    return this.#recursiveFilter(this.#originalCollection, extendedQuery, limit)
  }

  /**
   * Recursively filters tree nodes based on the search.
   */
  #recursiveFilter(nodes: T[], extendedQuery: string, limit?: number): T[] {
    return nodes
      .map(node => {
        const children = this.#childrenKey ? (node[this.#childrenKey] as T[] | undefined) : undefined

        let matchedChildren: T[] | undefined
        if (children && Array.isArray(children)) {
          matchedChildren = this.#recursiveFilter(children, extendedQuery)
        }

        const isNodeMatched = this.#fuse
          .search(extendedQuery, limit ? { limit } : undefined)
          .some(result => this.#originalCollection[result.refIndex] === node)

        if (isNodeMatched || (matchedChildren && matchedChildren.length > 0)) {
          return {
            ...node,
            ...(matchedChildren ? { [this.#childrenKey!]: matchedChildren } : {})
          }
        }

        return undefined
      })
      .filter((n): n is T => n !== undefined)
  }

  #flattenCollection(collection: T[], childrenKey: keyof T): T[] {
    return collection.reduce<T[]>((flat, item) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [childrenKey]: _, ...itemWithoutChildren } = item
      flat.push(itemWithoutChildren as T)

      const children = item[childrenKey] as T[] | undefined
      if (children?.length) {
        flat.push(...this.#flattenCollection(children, childrenKey))
      }

      return flat
    }, [])
  }
}

export type { CustomSearchKey, CustomSearchOptions }
