import { getHashFromCollection } from '../../utils/getHashFromCollection'

import type { CustomSearchCache, CustomSearchCacheRecord } from './types'
import type { AnyObject } from '../../types/definitions'

/**
 * We take advantage of the global JS scope to use this constant as a "singleton" cache
 * to avoid re-normalizing and re-search-indexing each time `CustomSearch` is instanciated.
 *
 * This cache will only be used if the `cacheKey` option is set while instanciating `CustomSearch`.
 */
const FUSE_SEARCH_CACHE: CustomSearchCache = {}

export function findCacheRecord(
  currentCollection: AnyObject[],
  cacheKey: string | undefined,
  withCacheInvalidation: boolean
): CustomSearchCacheRecord | undefined {
  if (!cacheKey) {
    return undefined
  }

  const cacheRecord = FUSE_SEARCH_CACHE[cacheKey]
  if (!cacheRecord) {
    return undefined
  }

  if (withCacheInvalidation) {
    const currentCollectionHash = getHashFromCollection(currentCollection)
    if (currentCollectionHash !== cacheRecord.originalCollectionHash) {
      return undefined
    }
  }

  return cacheRecord
}

export function storeCacheRecord(cacheKey: string, cacheRecord: CustomSearchCacheRecord) {
  FUSE_SEARCH_CACHE[cacheKey] = cacheRecord
}
